import { Link, useLocation, Outlet } from "@tanstack/react-router";
import { Home, Search, Heart, ShoppingBag, User, Menu } from "lucide-react";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/shop", icon: Search, label: "Shop" },
  { to: "/wishlist", icon: Heart, label: "Saved" },
  { to: "/cart", icon: ShoppingBag, label: "Bag" },
  { to: "/account", icon: User, label: "Me" },
] as const;

export function MobileShell({ children }: { children?: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto min-h-screen max-w-[480px] bg-background relative">
      <div className="bg-primary text-primary-foreground text-[10px] tracking-luxe text-center py-2 uppercase">
        Free shipping on orders over $150
      </div>
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="flex items-center justify-between px-5 h-14">
          <button aria-label="Menu" className="p-1"><Menu className="h-5 w-5" /></button>
          <Link to="/" className="font-serif text-2xl tracking-[0.4em]">ZINE</Link>
          <Link to="/cart" className="flex items-center gap-1 text-xs">
            <ShoppingBag className="h-5 w-5" /> <span className="text-muted-foreground">(0)</span>
          </Link>
        </div>
      </header>
      <main className="pb-24">{children ?? <Outlet />}</main>
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-40 border-t border-border/60 bg-background/95 backdrop-blur-md">
        <ul className="grid grid-cols-5 px-2 pt-2 pb-3">
          {tabs.map(({ to, icon: Icon, label }) => {
            const active = pathname === to;
            return (
              <li key={to}>
                <Link to={to} className={`flex flex-col items-center gap-1 py-1 transition-colors ${active ? "text-[color:var(--gold)]" : "text-muted-foreground"}`}>
                  <Icon className={`h-5 w-5 ${active ? "fill-[color:var(--gold)]/10" : ""}`} strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.18em] uppercase">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
