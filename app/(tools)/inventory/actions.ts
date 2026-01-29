"use server";
import { prisma } from "@/lib/prisma";
import { validateSchema } from "@/lib/validateSchema";
import { InventoryInputType } from "@/types/Inventory";
import { redirect } from "next/navigation";
import z from "zod";
import { zfd } from "zod-form-data";
const RawInventorySchema = zfd.formData({
  id: zfd.text(z.string()),
  type: zfd.text(z.string()),
  names: zfd.text(z.string()),
  values: zfd.text(z.string()),
});
const ItemizedInventorySchema = zfd.formData({
  id: zfd.text(z.string()),
  items: zfd.repeatableOfType(
    z.object({
      type: zfd.text(z.string()),
      name: zfd.text(),
      value: zfd.numeric(),
    }),
  ),
});

const IngredientTypeEnum = {
  Hop: "Hop",
  Yeast: "Yeast",
  Fermentable: "Fermentable",
};
const AddToInventorySchema = zfd.formData({
  selected: zfd.text(z.string().optional()),
  id: zfd.text(z.string().optional()),
  inventoryId: zfd.text(z.string()),
  type: z.enum(IngredientTypeEnum),
  name: zfd.text(z.string()),
  amount: zfd.numeric(z.number()),
});
const models: Record<keyof typeof IngredientTypeEnum, any> = {
  Hop: prisma.hopInventoryItem,
  Yeast: prisma.yeastInventoryItem,
  Fermentable: prisma.fermentableInventoryItem,
};
export async function addToInventory(prev: any, data: FormData) {
  const res = validateSchema(data, AddToInventorySchema);
  console.log(res);
  if (res.errors) return res;
  const { id, type, ...d } = res.data;
  const model = models[type as keyof typeof IngredientTypeEnum];

  const item = await model.upsert({
    where: { id },
    create: {
      ...d,
    },
    update: {
      ...d,
    },
    include: {
      Inventory: {
        include: {
          hopInventoryItems: true,
          yeastInventoryItems: true,
          fermentableInventoryItems: true,
        },
      },
    },
  });
  console.log(item.Inventory.hopInventoryItems);
  // redirect("/inventory");
  const r = {
    success: true,
    data: { selected: undefined, ...item.Inventory },
  };
  console.log(r);
  return r;
}
export async function updateInventory(
  prev: InventoryInputType,
  data: FormData,
) {
  console.log(prev);
  if (prev?.status === "RAW") {
    const res = validateSchema(data, RawInventorySchema);
    if (res.errors)
      return { status: "RAW", errors: res.errors, data: res.data };
    const names = res.data.names.split(/\r\n/);
    const values = res.data.values.split(/\r\n/);
    const items = names.map((name, i) => ({
      type: res.data.type,
      name,
      value: parseFloat(values[i]),
    }));
    // console.log("raw", names, values, items);
    return { status: "ITEMIZED", data: { id: res.data.id, items } };
  } else if (prev?.status === "ITEMIZED") {
    const res = validateSchema(data, ItemizedInventorySchema);
    if (res.errors)
      return { status: "ITEMIZED", errors: res.errors, data: res.data };
    console.log("itemized", res);
    const date = new Date(Date.now());
    const hops = res.data.items
      .filter((i) => i.type === "Hop")
      .map((h) => ({ name: h.name, date, amount: h.value }));
    const r = await prisma.inventory.update({
      where: { id: res.data.id },
      data: {
        hopInventoryItems: { createMany: { data: hops } },
      },
    });
    console.log(r);
    redirect("/inventory");
  }
}
