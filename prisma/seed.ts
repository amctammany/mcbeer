import { prisma } from "../lib/prisma";
import styles from "../data/styles.json";
import { StyleCategory } from "../generated/prisma/client";

async function main() {
  await prisma.style.deleteMany({});
  console.log("Seeding database...");
  await prisma.style.createMany({
    data: styles.map(({ category, ...style }) => ({
      ...style,
      subcategoryId: parseInt(style.subcategoryId, 10),
      category: StyleCategory[category.toLowerCase() as StyleCategory],
    })),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
