import { createFileRoute } from "@tanstack/react-router";
import { User, Package, MapPin, CreditCard, Bell, ChevronRight } from "lucide-react";
export const Route = createFileRoute("/account")({ component: Account });
function Account() {
  const items = [
    { Icon: Package, label: "Orders" },
    { Icon: MapPin, label: "Addresses" },
    { Icon: CreditCard, label: "Payment methods" },
    { Icon: Bell, label: "Notifications" },
  ];
  return (
    <div className="animate-fade-in">
      <div className="px-6 py-10 text-center bg-card border-b border-border/60">
        <div className="h-16 w-16 rounded-full bg-background grid place-items-center mx-auto shadow-soft">
          <User className="h-7 w-7 text-[color:var(--gold)]" strokeWidth={1.3} />
        </div>
        <h1 className="font-serif text-2xl mt-4">Welcome back</h1>
        <p className="text-xs text-muted-foreground mt-1">Sign in to view your orders & wishlist.</p>
        <button className="mt-5 bg-primary text-primary-foreground px-8 py-3 text-[11px] tracking-luxe uppercase rounded-sm">Sign in</button>
      </div>
      <ul className="divide-y divide-border/60">
        {items.map(({ Icon, label }) => (
          <li key={label}>
            <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-card transition">
              <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.4} />
              <span className="flex-1 text-left text-sm">{label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
