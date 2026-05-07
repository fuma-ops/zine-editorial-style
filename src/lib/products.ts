import necklace from "@/assets/p-necklace.jpg";
import earrings from "@/assets/p-earrings.jpg";
import ring from "@/assets/p-ring.jpg";
import set from "@/assets/p-set.jpg";
import bracelet from "@/assets/p-bracelet.jpg";
import huggies from "@/assets/p-huggies.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  category: string;
  story: string;
};

export const products: Product[] = [
  { id: "gold-cherry-necklace", name: "Gold Cherry Necklace", price: 49, image: necklace, badge: "BEST SELLER", category: "Necklaces", story: "A whisper of sweetness against your skin — twin cherries cast in 18k gold, suspended on a hand-finished chain." },
  { id: "cherry-stud-earrings", name: "Cherry Stud Earrings", price: 39, image: earrings, badge: "NEW", category: "Earrings", story: "Tiny treasures that catch the light. Crystal leaves, polished gold cherries — made for everyday luminance." },
  { id: "cherry-ring", name: "Cherry Ring", price: 32, image: ring, category: "Rings", story: "Delicate, dimensional, unforgettable. Wear it stacked or on its own as a quiet statement." },
  { id: "cherry-bracelet", name: "Cherry Bracelet", price: 45, image: bracelet, category: "Bracelets", story: "A featherlight chain that moves with you — finished with a single ruby cherry charm." },
  { id: "cherry-layered-set", name: "Cherry Layered Set", price: 79, image: set, badge: "SET", category: "Sets", story: "Two perfectly-paired chains designed to layer effortlessly. The art of dressing in gold, simplified." },
  { id: "mini-cherry-huggies", name: "Mini Cherry Huggies", price: 36, image: huggies, category: "Earrings", story: "The huggie hoop, reimagined. Sculpted gold with a delicate cherry detail — tiny, bold, perfect." },
];
