import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/zine/ProductCard";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import { Sparkles, Gift, Droplets, Leaf, RotateCcw, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div className="animate-fade-in">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src={hero} alt="Woman wearing gold cherry necklace" width={832} height={1216} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 animate-fade-up">
          <p className="text-[10px] tracking-luxe uppercase text-foreground/70 mb-3">Dainty · Timeless · You</p>
          <h1 className="font-serif text-[2.5rem] leading-[1.05] text-foreground">
            Little details,<br /><em className="font-medium">endless meaning.</em>
          </h1>
          <p className="text-sm text-muted-foreground mt-3 max-w-[280px]">Timeless jewelry to elevate your everyday.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-7 py-3.5 text-[11px] tracking-luxe uppercase rounded-sm shadow-elegant hover:bg-primary/90 transition">
            Shop the collection
          </Link>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="grid grid-cols-3 gap-3 px-5 py-8 border-b border-border/60">
        {[
          { Icon: Leaf, t: "Dainty Design", s: "Made to cherish" },
          { Icon: Sparkles, t: "Premium Quality", s: "18k gold plated" },
          { Icon: Gift, t: "Perfect Gift", s: "For someone special" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="text-center">
            <Icon className="h-6 w-6 mx-auto text-[color:var(--gold)]" strokeWidth={1.3} />
            <p className="text-[10px] tracking-[0.18em] uppercase mt-2.5 font-medium">{t}</p>
            <p className="text-[11px] text-muted-foreground mt-1">{s}</p>
          </div>
        ))}
      </section>

      {/* CAROUSEL */}
      <section className="py-10">
        <div className="text-center px-5">
          <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Our Favorites</p>
          <p className="text-[color:var(--gold)] mt-1">♡</p>
          <h2 className="font-serif text-3xl mt-1">Loved by You</h2>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto no-scrollbar scroll-snap-x px-5 pb-2">
          {products.slice(0, 5).map((p) => (
            <ProductCard key={p.id} p={p} variant="carousel" />
          ))}
        </div>
        <div className="px-5 mt-6 text-center">
          <Link to="/shop" className="inline-block border border-foreground/80 px-8 py-3 text-[11px] tracking-luxe uppercase hover:bg-foreground hover:text-background transition">
            View all jewelry
          </Link>
        </div>
      </section>

      {/* STORY BANNER */}
      <section className="relative mx-5 rounded-3xl overflow-hidden shadow-elegant">
        <img src={story} alt="Cherry necklace in gift box" loading="lazy" className="w-full h-[420px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[10px] tracking-luxe uppercase text-foreground/70">Made to mean more</p>
          <h3 className="font-serif text-3xl mt-2 leading-tight">Dainty pieces.<br/>Big emotions.</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-[260px]">Designed with love, made to last and meant to be part of your story.</p>
          <button className="mt-5 bg-primary text-primary-foreground px-6 py-3 text-[11px] tracking-luxe uppercase rounded-sm">Our story</button>
        </div>
        <div className="absolute top-5 right-5 h-20 w-20 rounded-full border border-[color:var(--gold)]/60 grid place-items-center bg-background/70 backdrop-blur">
          <span className="text-[8px] tracking-luxe text-center leading-tight">Timeless<br/>♡<br/>By Design</span>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-12 px-5">
        <div className="text-center">
          <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">The Journal</p>
          <h2 className="font-serif text-3xl mt-2">Stories & Inspiration</h2>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto no-scrollbar scroll-snap-x">
          {[
            { t: "How to Style Dainty Jewelry Everyday", img: products[0].image },
            { t: "The Meaning Behind Our Cherry Collection", img: products[4].image },
            { t: "The Perfect Gift for Any Occasion", img: story },
          ].map((j) => (
            <article key={j.t} className="relative min-w-[68%] snap-start aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
              <img src={j.img} alt={j.t} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <h3 className="font-serif text-lg leading-snug">{j.t}</h3>
                <p className="text-[10px] tracking-luxe uppercase mt-2 underline underline-offset-4">Read more</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="grid grid-cols-2 gap-x-4 gap-y-5 px-6 py-10 bg-card border-y border-border/60">
        {[
          { Icon: Droplets, t: "Water Resistant", s: "Wear with confidence" },
          { Icon: Leaf, t: "Hypoallergenic", s: "Gentle on sensitive skin" },
          { Icon: Gift, t: "Gift Ready Packaging", s: "Beautifully wrapped" },
          { Icon: RotateCcw, t: "30-Day Returns", s: "Love it or return it" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="flex gap-3">
            <Icon className="h-5 w-5 text-[color:var(--gold)] mt-0.5 shrink-0" strokeWidth={1.3} />
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-medium">{t}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{s}</p>
            </div>
          </div>
        ))}
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-12 text-center">
        <Mail className="h-6 w-6 mx-auto text-[color:var(--gold)]" strokeWidth={1.3} />
        <h3 className="font-serif text-2xl mt-3">Join the ZINE Club</h3>
        <p className="text-xs text-muted-foreground mt-2">Be the first to know about new drops, exclusive offers & more.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-0">
          <input type="email" placeholder="Your email address" className="flex-1 bg-card border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground" />
          <button className="bg-primary text-primary-foreground px-5" aria-label="Subscribe"><ArrowRight className="h-4 w-4" /></button>
        </form>
      </section>

      <footer className="px-6 py-8 border-t border-border/60 text-center">
        <p className="font-serif text-xl tracking-[0.4em]">ZINE</p>
        <p className="text-[10px] text-muted-foreground mt-3 tracking-wider">© 2026 ZINE · All rights reserved.</p>
      </footer>
    </div>
  );
}
