import { prisma } from "../lib/prisma";
import styles from "../data/styles.json";
import hops from "../data/hops.json";
import grains from "../data/grains.json";
import { HopUsage, StyleCategory } from "../generated/prisma/client";
import slugify from "@/lib/slugify";
import { toPercent } from "@/lib/utils";

async function main() {
  await prisma.style.deleteMany({});
  await prisma.equipmentProfile.deleteMany({});
  await prisma.waterProfile.deleteMany({});
  await prisma.mashProfile.deleteMany({});
  await prisma.fermentable.deleteMany({});
  await prisma.hop.deleteMany({});
  console.log("Seeding database...");
  await prisma.style.createMany({
    data: styles.map(({ category, ...style }) => ({
      ...style,
      subcategoryId: parseInt(style.subcategoryId, 10),
      category: StyleCategory[category.toLowerCase() as StyleCategory],
    })),
  });
  await prisma.mashProfile.create({
    data: {
      name: "Max Fermentability",
      slug: slugify("Max Fermentability", { lower: true }),
      description: "Maximum Fermentability",
      steps: {
        createMany: { data: [{ index: 0, temperature: 152, time: 60 }] },
      },
    },
  });
  await prisma.equipmentProfile.create({
    data: {
      name: "Anvil 10.5",
      slug: slugify("Anvil 10.5", { lower: true }),
      description: "Anvil Foundry",
      boilOffRate: 0.5,
      trubLoss: 0.55,
      mashLoss: 0,
      fermenterLoss: 0.5,
      batchVolume: 4.8,
      preboilVolume: 8.5,
      boilVolume: 7.5,
      brewEfficiency: 0.7,
      mashEfficiency: 0.6,
      boilTime: 60,
    },
  });
  await prisma.equipmentProfile.create({
    data: {
      name: "Anvil 6.5",
      slug: slugify("Anvil 6.5", { lower: true }),
      description: "Anvil Foundry",
      boilOffRate: 0.35,
      trubLoss: 0.25,
      mashLoss: 0,
      fermenterLoss: 0.5,
      batchVolume: 3.4,
      preboilVolume: 55,
      boilVolume: 6.5,
      brewEfficiency: 0.4,
      mashEfficiency: 0.5,
      boilTime: 60,
    },
  });
  await prisma.waterProfile.create({
    data: {
      name: "RO",
      slug: slugify("RO", { lower: true }),
      description: "Reverse Osmosis",
      calcium: 1,
      magnesium: 0,
      sulfate: 1,
      chloride: 4,
      bicarbonate: 16,
      sodium: 8,
    },
  });
  const jb = await prisma.waterProfile.create({
    data: {
      name: "Juicy Bits",
      slug: slugify("Juicy Bits", { lower: true }),
      description: "Juicy!",
      calcium: 140,
      magnesium: 0,
      sulfate: 90,
      chloride: 175,
      bicarbonate: 0,
      sodium: 0,
      forks: {
        create: {
          //forks: [],
          name: "amctammany Juicy Bits",
          slug: slugify("amctammamy Juicy Bits", { lower: true }),
          description: "Juicy!",
          calcium: 150,
          magnesium: 0,
          sulfate: 92,
          chloride: 165,
          bicarbonate: 0,
          sodium: 0,
        },
      },
    },
  });

  await prisma.waterProfile.create({
    data: {
      name: "Good",
      slug: slugify("Good", { lower: true }),
      description: "good",
      calcium: 10,
      magnesium: 20,
      sulfate: 50,
      chloride: 100,
      bicarbonate: 6,
      sodium: 15,
    },
  });

  await prisma.fermentable.createMany({
    data: grains.map(({ maxUsage, ...grain }) => ({
      ...grain,
      ...toPercent({ maxUsage }),
      slug: slugify(grain.name, { lower: true }),
    })),
  });
  await prisma.hop.createMany({
    data: hops.map(
      ({
        aromas,
        usage,
        alpha,
        alphaLow,
        alphaHigh,
        beta,
        betaLow,
        betaHigh,
        cohumulone,
        cohumuloneLow,
        cohumuloneHigh,
        caryophyllene,
        caryophylleneHigh,
        caryophylleneLow,
        geraniol,
        geraniolHigh,
        geraniolLow,
        farnesene,
        farneseneHigh,
        farneseneLow,
        humulene,
        humuleneHigh,
        humuleneLow,
        bPinene,
        bPineneHigh,
        bPineneLow,
        linalool,
        linaloolHigh,
        linaloolLow,
        myrcene,
        myrceneLow,
        myrceneHigh,
        flavorMap,
        ...hop
      }: any) => ({
        flavor: aromas,
        ...toPercent({
          alpha,
          alphaLow,
          alphaHigh,
          beta,
          betaLow,
          betaHigh,
          cohumulone,
          cohumuloneLow,
          cohumuloneHigh,
          caryophyllene,
          caryophylleneHigh,
          caryophylleneLow,
          geraniol,
          geraniolHigh,
          geraniolLow,
          farnesene,
          farneseneHigh,
          farneseneLow,
          humulene,
          humuleneHigh,
          humuleneLow,
          bPinene,
          bPineneHigh,
          bPineneLow,
          linalool,
          linaloolHigh,
          linaloolLow,
          myrcene,
          myrceneLow,
          myrceneHigh,
        }),
        ...hop,

        slug: slugify(hop.name),
        usage: HopUsage[usage?.toLowerCase() as HopUsage] || HopUsage.dual,
      })
    ),
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
