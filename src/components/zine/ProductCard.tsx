import { Link } from "@tanstack/react-router";
import { Product } from "@/lib/products";
import { WishButton } from "./WishButton";

export function ProductCard({ p, variant = "grid" }: { p: Product; variant?: "grid" | "carousel" }) {
  const widthClass = variant === "carousel" ? "min-w-[58%] snap-start" : "";
  return (
    <Link to="/product/$id" params={{ id: p.id }} className={`group block ${widthClass}`}>
      <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square shadow-soft">
        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {p.badge && (
          <span className="absolute top-3 left-3 bg-background/90 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full">{p.badge}</span>
        )}
        <WishButton id={p.id} className="absolute top-3 right-3" />
      </div>
      <div className="mt-3 px-1">
        <h3 className="font-serif text-[15px] leading-tight">{p.name}</h3>
        <p className="text-[13px] text-muted-foreground mt-0.5">${p.price}.00</p>
      </div>
    </Link>
  );
}
