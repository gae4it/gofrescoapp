// src/lib/icon-mapper.ts
import {
  Apple,
  Cherry,
  Grape,
  Banana,
  Carrot,
  Leaf,
  Beef,
  Fish,
  Egg,
  Milk,
  Wheat,
  Coffee,
  Utensils,
  Wine,
  Beer,
  Droplets,
  Sparkles,
  Trash2,
  Flower,
  Shirt,
  Bath,
  Cookie,
  type LucideIcon,
} from "lucide-react";

// Mappatura delle emoji alle icone Lucide React
export const emojiToIconMap: Record<string, LucideIcon> = {
  // Frutta
  "🍎": Apple, // mele, frutta
  "🍐": Apple, // pere
  "🍇": Grape, // uva
  "🍑": Cherry, // pesche, albicocche
  "🥝": Apple, // kiwi
  "🍌": Banana, // banane
  "🍉": Apple, // angurie
  "🫐": Cherry, // frutti rossi, susine
  "🍒": Cherry, // ciliegie
  "🍈": Apple, // meloni
  "🍊": Apple, // arance
  "🍋": Apple, // limoni

  // Verdura
  "🥬": Leaf, // verdura, asparagi, insalata, spinaci
  "🌱": Leaf, // carciofi
  "🎃": Apple, // zucca
  "🍅": Cherry, // pomodori
  "🥔": Apple, // patate
  "🥒": Leaf, // zucchine
  "🫑": Leaf, // peperoni
  "🍆": Leaf, // melanzane
  "🥦": Leaf, // cavolfiori, broccoli
  "🥕": Carrot, // carote

  // Alimentari
  "🥖": Wheat, // alimentari
  "🥓": Beef, // affettati di carne
  "🐟": Fish, // conserve di pesce
  "🫘": Leaf, // legumi
  "🍝": Utensils, // pasta
  "🍚": Wheat, // riso
  "🥚": Egg, // uova
  "🥛": Milk, // latte e latticini
  "🧀": Milk, // formaggi
  "🥣": Coffee, // colazione, ready-to-eat
  "🍯": Coffee, // marmellate e creme
  "🥨": Wheat, // snack salati
  "🍫": Cookie, // snack dolci
  "🫒": Droplets, // olio
  "🧂": Utensils, // condimenti e salse
  "💧": Droplets, // acqua
  "🍷": Wine, // vino
  "🍺": Beer, // birra

  // Casa
  "🧹": Sparkles, // prodotti per la casa
  "🧼": Sparkles, // detersivi piatti
  "👕": Shirt, // detersivi bucato
  "🧴": Sparkles, // pulitori multiuso
  "🚿": Bath, // prodotti bagno
  "🍽️": Utensils, // prodotti cucina
  "🪟": Sparkles, // prodotti vetri
  "🌸": Flower, // deodoranti ambienti
  "🗑️": Trash2, // sacchetti spazzatura
  "🧻": Sparkles, // carta igienica
  "📄": Sparkles, // rotoli carta cucina
};

// Funzione per ottenere l'icona Lucide da una emoji
export function getIconFromEmoji(emoji: string): LucideIcon {
  return emojiToIconMap[emoji] ?? Apple; // Fallback ad Apple se non trovata
}

// Funzione per verificare se un'emoji ha una mappatura
export function hasIconMapping(emoji: string): boolean {
  return emoji in emojiToIconMap;
}