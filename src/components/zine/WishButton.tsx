import { useState } from "react";
import { Heart } from "lucide-react";

export function WishButton({ id, className = "" }: { id: string; className?: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      aria-label="Save to wishlist"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOn((v) => !v); try { const k = "zine:wish"; const cur = JSON.parse(localStorage.getItem(k) || "[]"); const nx = on ? cur.filter((x: string) => x !== id) : Array.from(new Set([...cur, id])); localStorage.setItem(k, JSON.stringify(nx)); } catch {} }}
      className={`grid place-items-center h-8 w-8 rounded-full bg-background/80 backdrop-blur transition-transform active:scale-90 ${className}`}
    >
      <Heart className={`h-4 w-4 transition-all ${on ? "fill-[color:var(--gold)] text-[color:var(--gold)]" : "text-foreground/70"}`} strokeWidth={1.5} />
    </button>
  );
}
