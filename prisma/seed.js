const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Categorie come da prompt
  const categoriesData = [
    { name: "Frutta", unit: "WEIGHT" },
    { name: "Verdura", unit: "WEIGHT" },
    { name: "Alimentari", unit: "PIECES" },
    { name: "Prodotti per la Casa", unit: "PIECES" },
  ];

  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: { name: cat.name },
    });
  }
  console.log(`Seeded ${categoriesData.length} categories.`);

  // Prodotti e varianti come da prompt
  const productsData = [
    // Frutta
    {
      name: "Mele",
      category: "Frutta",
      unit: "WEIGHT",
      variants: [
        "Kanzi",
        "Granny Smith",
        "Royal Gala",
        "Fuji",
        "Golden Delicious",
      ],
    },
    {
      name: "Pere",
      category: "Frutta",
      unit: "WEIGHT",
      variants: [
        "Abate",
        "Carmen",
        "Guyot",
        "Santa Maria",
        "William",
        "Kaiser",
        "Decana",
      ],
    },
    {
      name: "Uva",
      category: "Frutta",
      unit: "WEIGHT",
      variants: [
        "da tavola",
        "Vittoria",
        "Italia",
        "Red Globe",
        "Uva spina",
        "Uva fragola",
      ],
    },
    {
      name: "Pesche",
      category: "Frutta",
      unit: "WEIGHT",
      variants: [
        "nettarine",
        "tabacchiera",
        "percoche",
        "pesche gialle",
        "pesche bianche",
      ],
    },
    {
      name: "Kiwi",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["verde", "gold"],
    },
    {
      name: "Banane",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["Cavendish", "plantain", "banane rosse"],
    },
    {
      name: "Angurie",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["crimson sweet", "sugar baby", "moon and stars"],
    },
    {
      name: "Frutti rossi",
      category: "Frutta",
      unit: "WEIGHT",
      variants: [
        "mirtilli",
        "fragole",
        "lamponi",
        "ribes",
        "more",
        "ribes rosso",
        "ribes nero",
      ],
    },
    {
      name: "Albicocche",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["Bella d'Italia", "Precoce di Treviglio", "Valleggia"],
    },
    {
      name: "Susine",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["Santa Rosa", "Angelino", "President"],
    },
    {
      name: "Ciliegie",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["Durone", "Ferrovia", "Bigarreau"],
    },
    {
      name: "Meloni",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["cantalupo", "retato", "invernale"],
    },
    {
      name: "Arance",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["da tavola", "da spremere", "Navel", "Tarocco", "Valencia"],
    },
    {
      name: "Limoni",
      category: "Frutta",
      unit: "WEIGHT",
      variants: ["Femminello", "Meyer", "Eureka"],
    },
    // Verdura
    {
      name: "Carciofi",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["Romanesco", "Spinoso", "Violetto"],
    },
    {
      name: "Asparagi",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["verdi", "bianchi", "viola"],
    },
    {
      name: "Zucca",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["Butternut", "Hokkaido", "Spaghetti"],
    },
    {
      name: "Pomodori",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["San Marzano", "Pixel", "Ciliegino", "Cuore di Bue"],
    },
    {
      name: "Patate",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["novelle", "pasta gialla", "pasta bianca"],
    },
    {
      name: "Zucchine",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["verdi", "gialle", "trombetta"],
    },
    {
      name: "Insalata",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["lattuga", "rucola", "radicchio", "iceberg", "romana"],
    },
    {
      name: "Peperoni",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["rossi", "gialli", "verdi", "arancioni"],
    },
    {
      name: "Melanzane",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["lunghe", "tonde", "violette"],
    },
    {
      name: "Cavolfiori",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["bianchi", "verdi", "viola"],
    },
    {
      name: "Broccoli",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["verdi", "viola", "romanesco"],
    },
    {
      name: "Spinaci",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["freschi", "baby"],
    },
    {
      name: "Carote",
      category: "Verdura",
      unit: "WEIGHT",
      variants: ["arancioni", "gialle", "viola"],
    },
    // Alimentari
    {
      name: "Affettati di carne",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Crudo di Parma",
        "Crudo San Daniele",
        "Cotto",
        "Salame",
        "Coppa",
        "Pancetta",
        "Culatello",
        "Speck",
        "Bresaola",
        "Mortadella",
        "Wurstel",
      ],
    },
    {
      name: "Conserve di pesce",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Tonno in olio",
        "Tonno al naturale",
        "Tonno rosso",
        "Ventresca di tonno",
        "Tonno pinne gialle",
        "Salmone affumicato",
        "Sardine in olio",
        "Acciughe in olio",
        "Acciughe in salsa piccante",
      ],
    },
    {
      name: "Legumi e polenta",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Ceci",
        "Fagioli borlotti",
        "Fagioli cannellini",
        "Lenticchie",
        "Piselli",
        "Polenta",
        "Polenta Taragna",
        "Purè di Patate",
      ],
    },
    {
      name: "Pasta",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Spaghetti",
        "Penne",
        "Fusilli",
        "Linguine",
        "Paccheri",
        "Farfalle",
        "Orecchiette",
        "Tagliatelle",
        "Ravioli",
        "Tortellini",
        "Integrale",
        "Senza Glutine",
        "Kamut",
        "Legumi",
      ],
    },
    {
      name: "Riso",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Arborio",
        "Carnaroli",
        "Basmati",
        "Venere",
        "Jasmine",
        "Integrale",
        "Parboiled",
      ],
    },
    {
      name: "Uova",
      category: "Alimentari",
      unit: "PIECES",
      variants: ["Allevate a terra", "Bio"],
    },
    {
      name: "Latte e latticini",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Intero",
        "Scremato",
        "Senza lattosio",
        "Soia",
        "Mandorla",
        "Avena",
        "Cocco",
        "Burro",
        "Panna",
        "Yogurt bianco senza grassi",
        "Yogurt bianco normale",
        "Yogurt alla frutta",
      ],
    },
    {
      name: "Formaggi",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Mozzarella di bufala",
        "Mozzarella treccia",
        "Ricotta",
        "Stracchino",
        "Parmigiano Reggiano",
        "Pecorino",
        "Grana Padano",
        "Gorgonzola",
        "Formaggini",
        "Philadelphia",
      ],
    },
    {
      name: "Colazione",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Muesli",
        "Cornflakes",
        "Biscotti Frollini",
        "Biscotti Integrali",
        "Biscotti Senza zucchero",
        "Wafer",
        "Biscotti per bambini",
        "Biscotti Gocciole",
        "Biscotti Oro Saiwa",
      ],
    },
    {
      name: "Marmellate e creme",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Marmellata di Frutta",
        "Miele",
        "Nutella",
        "Crema di pistacchio",
        "Crema di nocciola",
      ],
    },
    {
      name: "Snack salati",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Crackers",
        "Patatine",
        "Taralli",
        "Grissini",
        "Mandorle",
        "Noci",
        "Pistacchi",
        "Mix",
        "Gallette di riso",
        "Gallette di grano saraceno",
        "Gallette di mais",
      ],
    },
    {
      name: "Snack dolci",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Cioccolato Fondente",
        "Cioccolato al latte",
        "Brioche",
        "Gelato",
      ],
    },
    {
      name: "Olio e aceto",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Di olive taggiasche",
        "Italiano",
        "Europeo",
        "Di semi di girasole",
        "Di arachidi",
        "Aromatizzato",
        "Aceto balsamico",
        "Aceto di mele",
        "Aceto di vino",
      ],
    },
    {
      name: "Condimenti e salse",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Ketchup",
        "Maionese",
        "Senape",
        "Salsa BBQ",
        "Soya",
        "Tabasco",
      ],
    },
    {
      name: "Ready-to-eat",
      category: "Alimentari",
      unit: "PIECES",
      variants: [
        "Zuppa di lenticchie",
        "Zuppa di legumi",
        "Zuppa di zucca",
        "Polenta",
      ],
    },
    {
      name: "Acqua",
      category: "Alimentari",
      unit: "PIECES",
      variants: ["Naturale", "Frizzante", "Leggermente frizzante"],
    },
    {
      name: "Vino",
      category: "Alimentari",
      unit: "PIECES",
      variants: ["Rosso", "Bianco", "Rosé", "Spumante"],
    },
    {
      name: "Birra",
      category: "Alimentari",
      unit: "PIECES",
      variants: ["Chiara", "Scura", "Rossa", "Artigianale"],
    },
    // Prodotti per la Casa
    {
      name: "Detersivi per piatti",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["liquidi", "in polvere", "in pastiglie"],
    },
    {
      name: "Detersivi per bucato",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["liquidi", "in polvere", "in capsule"],
    },
    {
      name: "Pulitori multiuso",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["spray", "liquidi", "in pastiglie"],
    },
    {
      name: "Prodotti per la pulizia del bagno",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["detergenti", "disinfettanti", "anticalcare"],
    },
    {
      name: "Prodotti per la pulizia della cucina",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["detergenti", "sgrassatori", "disinfettanti"],
    },
    {
      name: "Prodotti per la pulizia dei vetri",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["spray", "liquidi"],
    },
    {
      name: "Deodoranti per ambienti",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["spray", "diffusori", "bastoncini"],
    },
    {
      name: "Sacchetti per la spazzatura",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["grandi", "medi", "piccoli"],
    },
    {
      name: "Carta igienica",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["doppia velina", "tripla velina", "extra morbida"],
    },
    {
      name: "Rotoli di carta da cucina",
      category: "Prodotti per la Casa",
      unit: "PIECES",
      variants: ["monostrato", "multistrato", "extra assorbenti"],
    },
  ];

  for (const prod of productsData) {
    const category = await prisma.category.findUnique({
      where: { name: prod.category },
    });
    if (category) {
      const createdProduct = await prisma.product.upsert({
        where: {
          name_categoryId: { name: prod.name, categoryId: category.id },
        },
        update: {},
        create: {
          name: prod.name,
          unit: prod.unit,
          categoryId: category.id,
        },
      });

      for (const variantName of prod.variants) {
        await prisma.variant.upsert({
          where: {
            name_productId: { name: variantName, productId: createdProduct.id },
          },
          update: {},
          create: {
            name: variantName,
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
