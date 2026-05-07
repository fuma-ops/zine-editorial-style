import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/zine/ProductCard";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/wishlist")({ component: Wishlist });

function Wishlist() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => { try { setIds(JSON.parse(localStorage.getItem("zine:wish") || "[]")); } catch {} }, []);
  const items = products.filter((p) => ids.includes(p.id));
  return (
    <div className="animate-fade-in px-5 py-8">
      <div className="text-center">
        <Heart className="h-6 w-6 mx-auto text-[color:var(--gold)]" strokeWidth={1.3} />
        <h1 className="font-serif text-3xl mt-3">Saved for you</h1>
        <p className="text-xs text-muted-foreground mt-2">Pieces you've fallen for.</p>
      </div>
      {items.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Your wishlist is empty.</p>
          <Link to="/shop" className="inline-block mt-5 border border-foreground/80 px-7 py-3 text-[11px] tracking-luxe uppercase">Discover jewelry</Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
