import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { WishButton } from "@/components/zine/WishButton";
import { ChevronLeft, Plus, Minus, Truck, ShieldCheck, Gift } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.product.name} — ZINE` },
      { name: "description", content: loaderData.product.story },
      { property: "og:title", content: `${loaderData.product.name} — ZINE` },
      { property: "og:description", content: loaderData.product.story },
      { property: "og:image", content: loaderData.product.image },
    ] : [],
  }),
  notFoundComponent: () => <div className="p-10 text-center"><p>Product not found.</p><Link to="/shop" className="underline">Back to shop</Link></div>,
  errorComponent: () => <div className="p-10 text-center">Something went wrong.</div>,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const related = products.filter((x) => x.id !== p.id).slice(0, 3);
  return (
    <div className="animate-fade-in">
      <div className="relative">
        <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" />
        <Link to="/shop" className="absolute top-4 left-4 h-10 w-10 grid place-items-center rounded-full bg-background/85 backdrop-blur shadow-soft">
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <WishButton id={p.id} className="absolute top-4 right-4 h-10 w-10 shadow-soft" />
      </div>

      <section className="px-6 pt-7 pb-5 animate-fade-up">
        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">{p.category}</p>
        <h1 className="font-serif text-3xl mt-2 leading-tight">{p.name}</h1>
        <p className="text-lg mt-3 text-[color:var(--gold)] font-medium">${p.price}.00</p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-5 italic font-serif">"{p.story}"</p>
      </section>

      <section className="px-6 pb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-border rounded-full">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3"><Minus className="h-3.5 w-3.5" /></button>
            <span className="px-2 w-8 text-center text-sm">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="p-3"><Plus className="h-3.5 w-3.5" /></button>
          </div>
          <button className="flex-1 bg-primary text-primary-foreground py-4 text-[11px] tracking-luxe uppercase rounded-sm shadow-elegant active:scale-[0.99] transition">Add to bag</button>
        </div>
        <button className="mt-3 w-full border border-foreground/80 py-3.5 text-[11px] tracking-luxe uppercase">Add to wishlist</button>
      </section>

      <section className="mx-5 my-6 p-6 rounded-2xl bg-card shadow-soft">
        <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">The Story</p>
        <h2 className="font-serif text-2xl mt-2 leading-tight">More than jewelry — a feeling.</h2>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          Each ZINE piece is hand-finished in 18k gold, polished to catch the warmth of golden hour.
          Wear it as a memory, a milestone, or simply because it makes you smile.
        </p>
      </section>

      <section className="grid grid-cols-3 gap-2 px-5 pb-8">
        {[
          { Icon: Truck, t: "Free shipping", s: "Over $150" },
          { Icon: ShieldCheck, t: "30-day returns", s: "Easy & free" },
          { Icon: Gift, t: "Gift ready", s: "Wrapped with love" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="text-center p-3 rounded-xl bg-card">
            <Icon className="h-5 w-5 mx-auto text-[color:var(--gold)]" strokeWidth={1.3} />
            <p className="text-[10px] tracking-[0.18em] uppercase mt-2 font-medium">{t}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s}</p>
          </div>
        ))}
      </section>

      <section className="px-5 pb-12">
        <h3 className="font-serif text-2xl text-center">You may also love</h3>
        <div className="mt-5 flex gap-4 overflow-x-auto no-scrollbar scroll-snap-x">
          {related.map((r) => (
            <Link key={r.id} to="/product/$id" params={{ id: r.id }} className="min-w-[55%] snap-start">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="font-serif text-sm mt-2">{r.name}</p>
              <p className="text-xs text-muted-foreground">${r.price}.00</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
