import { PrismaClient, UnitType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Create Categories
  const categoriesData = [
    { name: "Frutta" },
    { name: "Verdura" },
    { name: "Carne" },
    { name: "Pesce" },
    { name: "Latticini e Uova" },
    { name: "Pane e Prodotti da Forno" },
    { name: "Dispensa" },
  ];

  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: cat,
    });
  }
  console.log(`Seeded ${categoriesData.length} categories.`);

  // Create Products and Variants
  const productsData = [
    {
      name: "Mele",
      category: "Frutta",
      unit: UnitType.WEIGHT,
      variants: [{ name: "Golden" }, { name: "Granny Smith" }, { name: "Fuji" }],
    },
    {
      name: "Banane",
      category: "Frutta",
      unit: UnitType.WEIGHT,
      variants: [{ name: "Standard" }],
    },
    {
      name: "Pomodori",
      category: "Verdura",
      unit: UnitType.WEIGHT,
      variants: [{ name: "Grappolo" }, { name: "Ciliegino" }, { name: "San Marzano" }],
    },
    {
      name: "Insalata",
      category: "Verdura",
      unit: UnitType.PIECES,
      variants: [{ name: "Lattuga" }, { name: "Iceberg" }],
    },
    {
      name: "Petto di Pollo",
      category: "Carne",
      unit: UnitType.WEIGHT,
      variants: [{ name: "A fette" }, { name: "Intero" }],
    },
    {
      name: "Bistecca di Manzo",
      category: "Carne",
      unit: UnitType.WEIGHT,
      variants: [{ name: "Fiorentina" }, { name: "Costata" }],
    },
    {
      name: "Salmone",
      category: "Pesce",
      unit: UnitType.WEIGHT,
      variants: [{ name: "Filetto" }, { name: "Trancio" }],
    },
    {
      name: "Latte",
      category: "Latticini e Uova",
      unit: UnitType.PIECES,
      variants: [{ name: "Intero 1L" }, { name: "Parzialmente Scremato 1L" }],
    },
    {
      name: "Uova",
      category: "Latticini e Uova",
      unit: UnitType.PIECES,
      variants: [{ name: "Confezione da 6" }, { name: "Confezione da 10" }],
    },
    {
      name: "Pane",
      category: "Pane e Prodotti da Forno",
      unit: UnitType.PIECES,
      variants: [{ name: "Baguette" }, { name: "Pagnotta integrale" }],
    },
    {
      name: "Pasta",
      category: "Dispensa",
      unit: UnitType.PIECES,
      variants: [{ name: "Spaghetti 500g" }, { name: "Penne 500g" }],
    },
    {
      name: "Olio Extra Vergine d'Oliva",
      category: "Dispensa",
      unit: UnitType.PIECES,
      variants: [{ name: "Bottiglia 1L" }],
    },
  ];

  for (const prod of productsData) {
    const category = await prisma.category.findUnique({ where: { name: prod.category } });
    if (category) {
      const createdProduct = await prisma.product.upsert({
        where: { name_categoryId: { name: prod.name, categoryId: category.id } },
        update: {},
        create: {
          name: prod.name,
          unit: prod.unit,
          categoryId: category.id,
        },
      });

      for (const variant of prod.variants) {
        await prisma.variant.upsert({
          where: { name_productId: { name: variant.name, productId: createdProduct.id } },
          update: {},
          create: {
            name: variant.name,
            productId: createdProduct.id,
          },
        });
      }
    }
  }
  console.log(`Seeded ${productsData.length} products with their variants.`);

  console.log(`Seeding finished.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
