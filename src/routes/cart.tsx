import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
export const Route = createFileRoute("/cart")({ component: Cart });
function Cart() {
  return (
    <div className="animate-fade-in px-5 py-16 text-center">
      <ShoppingBag className="h-7 w-7 mx-auto text-[color:var(--gold)]" strokeWidth={1.3} />
      <h1 className="font-serif text-3xl mt-3">Your bag</h1>
      <p className="text-sm text-muted-foreground mt-3">Your bag is empty — but not for long.</p>
      <Link to="/shop" className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-3.5 text-[11px] tracking-luxe uppercase rounded-sm">Start shopping</Link>
    </div>
  );
}
