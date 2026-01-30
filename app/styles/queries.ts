"use cache";
import { prisma } from "@/lib/prisma";
import { cacheTag } from "next/cache";

export const getStyle = async (slug: string) => {
  const style = await prisma.style.findFirst({
    where: { slug },
  });
  return style;
};
export const getStyles = async () => {
  const styles = await prisma.style.findMany({
    orderBy: [{ subcategoryId: "asc" }, { identifier: "asc" }],
  });
  return styles;
};
export const getStyleNames = async () => {
  "use cache";
  cacheTag("styles");
  const styles = await prisma.style.findMany({
    select: {
      id: true,
      name: true,
      identifier: true,
    },
  });
  const names = styles.map(({ name, identifier }) => ({
    label: name,
    value: identifier,
  }));
  return names;
};
