import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/zine/ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import hero from "@/assets/p-necklace.jpg";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({ meta: [{ title: "Shop — ZINE" }, { name: "description", content: "Browse the Cherry Collection — dainty 18k gold jewelry by ZINE." }] }),
});

function Shop() {
  return (
    <div className="animate-fade-in">
      <section className="relative aspect-[16/10] overflow-hidden">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] tracking-luxe uppercase text-foreground/70">The Cherry Collection</p>
          <h1 className="font-serif text-3xl mt-2 leading-tight">Sweet by nature,<br/>crafted with love.</h1>
          <p className="text-xs text-muted-foreground mt-2 max-w-[260px]">Inspired by little joys and made to be worn always.</p>
        </div>
      </section>

      <div className="flex items-center justify-between px-5 py-4 border-y border-border/60 bg-card/60">
        <button className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase">
          <SlidersHorizontal className="h-4 w-4" /> Filter
        </button>
        <button className="flex items-center gap-1 text-[11px] tracking-[0.2em] uppercase">
          Sort <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>

      <div className="px-5 py-6 text-center">
        <button className="w-full border border-foreground/80 py-3 text-[11px] tracking-luxe uppercase">Load more</button>
      </div>
    </div>
  );
}
