import {
  Award,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  ThumbsUp,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const BRAND_PHONE = "020 8368 5555";
const CURRENT_YEAR = new Date().getFullYear();

// ── NAV ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    "Quartz",
    "Granite",
    "Marble",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <header
      data-ocid="nav.panel"
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          data-ocid="nav.link"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ backgroundColor: "#2D8FD5" }}
          >
            D
          </div>
          <span className="font-display font-bold text-lg text-gray-900 tracking-tight">
            DialAWorkTop™
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              data-ocid="nav.link"
              className="text-sm font-medium text-gray-600 hover:text-[#2D8FD5] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#quote"
            data-ocid="nav.primary_button"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#2D8FD5" }}
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link}
              className="block w-full text-left py-2.5 text-sm font-medium text-gray-700 hover:text-[#2D8FD5] border-b border-gray-50"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </button>
          ))}
          <a
            href="#quote"
            className="mt-3 block text-center py-2.5 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: "#2D8FD5" }}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      data-ocid="hero.section"
      className="pt-16 min-h-screen flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#EBF5FB", color: "#2D8FD5" }}
            >
              <Zap size={14} />
              London's #1 Quartz Worktop Specialists
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight text-gray-900 mb-5">
              Quartz Worktops in London —{" "}
              <span style={{ color: "#2D8FD5" }}>Supplied &amp; Fitted</span> by
              Experts
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Premium quartz worktops installed in your London kitchen. Precise
              measurements, flawless fitting, and a finish you'll love.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#quote"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white shadow-md hover:shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#2D8FD5" }}
              >
                Get a Free Quote
              </a>
              <a
                href="#samples"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold border-2 hover:bg-[#EBF5FB] transition-all"
                style={{ borderColor: "#2D8FD5", color: "#2D8FD5" }}
              >
                Order a Next-Day Sample
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "20+ Years Experience",
                "500+ Kitchens Fitted",
                "5★ Google Rating",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                >
                  <Check size={11} style={{ color: "#2D8FD5" }} />
                  {t}
                </span>
              ))}
            </div>

            {/* Phone */}
            <a
              href={`tel:${BRAND_PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-white font-bold text-lg shadow-md hover:opacity-90 transition-all"
              style={{ backgroundColor: "#2D8FD5" }}
            >
              <Phone size={20} />
              {BRAND_PHONE}
            </a>
          </div>

          {/* Right — Kitchen Photo */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/hero-kitchen.dim_1920x1080.jpg"
                alt="Luxury quartz worktop installation in a London kitchen"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-5 left-5 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
              >
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill="#2D8FD5" stroke="none" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-gray-900">
                    4.9 on Google
                  </p>
                  <p className="text-xs text-gray-500">500+ London Kitchens</p>
                </div>
              </div>
              {/* Trust badge */}
              <div
                className="absolute top-5 right-5 px-4 py-2 rounded-xl text-white text-sm font-bold shadow-md"
                style={{ backgroundColor: "#2D8FD5" }}
              >
                20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── STATS BAR ────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "4.9★", label: "Google Rating" },
    { value: "500+", label: "London Kitchens Fitted" },
    { value: "Next-Day", label: "Sample Service" },
  ];
  return (
    <section data-ocid="stats.section" style={{ backgroundColor: "#2D8FD5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`py-8 px-6 text-center text-white ${
                i < stats.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <div className="text-3xl font-bold font-display mb-1">
                {s.value}
              </div>
              <div className="text-sm text-white/80 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BENEFITS ─────────────────────────────────────────────────────────────────
function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Incredibly Durable",
      desc: "Scratch, stain & heat resistant surfaces",
    },
    { icon: Zap, title: "Zero Maintenance", desc: "No sealing required, ever" },
    {
      icon: Award,
      title: "Premium Aesthetics",
      desc: "Consistent colour & pattern throughout",
    },
    {
      icon: Truck,
      title: "Fast Installation",
      desc: "Most kitchens fitted in a single day",
    },
    {
      icon: ThumbsUp,
      title: "10-Year Guarantee",
      desc: "Full manufacturer-backed warranty",
    },
    {
      icon: Clock,
      title: "Next-Day Samples",
      desc: "Order samples delivered tomorrow",
    },
  ];

  return (
    <section data-ocid="benefits.section" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            Why Choose Quartz
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why London homeowners choose quartz
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The perfect combination of beauty, durability, and practicality for
            modern London kitchens.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-gray-200 rounded-xl p-6 group hover:border-[#2D8FD5] hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#EBF5FB" }}
              >
                <b.icon size={20} style={{ color: "#2D8FD5" }} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BRANDS ───────────────────────────────────────────────────────────────────
function Brands() {
  const brands = [
    {
      name: "Silestone",
      desc: "World's leading quartz surface brand with over 100 colours.",
    },
    {
      name: "Caesarstone",
      desc: "Pioneer in quartz surfaces since 1987. Unrivalled quality.",
    },
    {
      name: "Cambria",
      desc: "American-made quartz, 100% natural and family-owned.",
    },
    {
      name: "CRL Quartz",
      desc: "Exclusive designs crafted for modern British kitchens.",
    },
  ];
  return (
    <section data-ocid="brands.section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            Our Brands
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Premium quartz brands we stock in London
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b) => (
            <div
              key={b.name}
              className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-card transition-all group"
            >
              <div className="bg-gray-100 h-24 flex items-center justify-center">
                <span className="font-display font-bold text-xl text-gray-700">
                  {b.name}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-3">{b.desc}</p>
                <a
                  href="#quote"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#2D8FD5" }}
                >
                  View range →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── COLOURS ──────────────────────────────────────────────────────────────────
function Colours() {
  const colours = [
    {
      name: "White",
      sub: "Clean & Contemporary",
      img: "/assets/generated/quartz-white.dim_600x400.jpg",
      badge: "Most Popular",
    },
    {
      name: "Grey",
      sub: "Modern & Versatile",
      img: "/assets/generated/quartz-grey.dim_600x400.jpg",
      badge: "Trending",
    },
    {
      name: "Black",
      sub: "Bold & Dramatic",
      img: "/assets/generated/quartz-black.dim_600x400.jpg",
      badge: null,
    },
    {
      name: "Cream",
      sub: "Warm & Inviting",
      img: "/assets/generated/quartz-cream.dim_600x400.jpg",
      badge: null,
    },
    {
      name: "Marble-look",
      sub: "Timeless Luxury",
      img: "/assets/generated/quartz-marble.dim_600x400.jpg",
      badge: "Editor's Pick",
    },
  ];
  return (
    <section
      id="samples"
      data-ocid="colours.section"
      className="py-20 bg-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            Colour Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Find your quartz colour
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {colours.map((c) => (
            <div
              key={c.name}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={c.img}
                  alt={`${c.name} quartz worktop`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {c.badge && (
                  <span
                    className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: "#2D8FD5" }}
                  >
                    {c.badge}
                  </span>
                )}
              </div>
              <div className="bg-white p-3">
                <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                <p className="text-xs text-gray-500 mb-1.5">{c.sub}</p>
                <a
                  href="#quote"
                  className="text-xs font-semibold"
                  style={{ color: "#2D8FD5" }}
                >
                  See options →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROCESS ──────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      num: "01",
      title: "Free Quote",
      desc: "Send us your measurements or book a site visit.",
      tag: "Same-day response",
    },
    {
      num: "02",
      title: "Choose Your Slab",
      desc: "Browse our showroom or order next-day samples.",
      tag: "100s of colours",
    },
    {
      num: "03",
      title: "Template & Cut",
      desc: "Precision CNC cutting to exact dimensions.",
      tag: "±1mm accuracy",
    },
    {
      num: "04",
      title: "Expert Fitting",
      desc: "Our team installs your worktops to perfection.",
      tag: "10-year guarantee",
    },
  ];
  return (
    <section data-ocid="process.section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            How we fit your quartz worktop
          </h2>
        </div>
        {/* Steps with connecting line */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-lg text-white relative z-10"
                  style={{ backgroundColor: "#2D8FD5" }}
                >
                  {s.num}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  {s.desc}
                </p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "#2D8FD5" }}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── GALLERY ──────────────────────────────────────────────────────────────────
const galleryProjects = [
  {
    gradient: "linear-gradient(135deg, #d4e8f7 0%, #a8d0ef 100%)",
    name: "Calacatta Gold",
    loc: "Hampstead, NW3",
  },
  {
    gradient: "linear-gradient(135deg, #e8e8e8 0%, #c4c4c4 100%)",
    name: "Silestone Blanco Zeus",
    loc: "Islington, N1",
  },
  {
    gradient: "linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 100%)",
    name: "Jet Black Honed",
    loc: "Chelsea, SW3",
  },
  {
    gradient: "linear-gradient(135deg, #f5f0e8 0%, #e0d4c0 100%)",
    name: "Bianco Carrara",
    loc: "Richmond, TW9",
  },
  {
    gradient: "linear-gradient(135deg, #ddeef8 0%, #b0d6ee 100%)",
    name: "Cemento Oxford",
    loc: "Notting Hill, W11",
  },
  {
    gradient: "linear-gradient(135deg, #f7f7f7 0%, #e2e2e2 100%)",
    name: "Ariel White",
    loc: "Wimbledon, SW19",
  },
];

function Gallery() {
  return (
    <section data-ocid="gallery.section" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            Recent Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            London kitchens we've transformed
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryProjects.map((p, i) => (
            <div
              key={p.name}
              data-ocid={`gallery.item.${i + 1}`}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div
                className="h-52 relative overflow-hidden"
                style={{ background: p.gradient }}
              >
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    color: "#2D8FD5",
                  }}
                >
                  DialAWorkTop™
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                  <MapPin size={11} style={{ color: "#2D8FD5" }} />
                  {p.loc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#quote"
            data-ocid="gallery.primary_button"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white hover:opacity-90 transition-all shadow-md"
            style={{ backgroundColor: "#2D8FD5" }}
          >
            Get a Free Quote for Your Kitchen
          </a>
        </div>
      </div>
    </section>
  );
}

// ── REVIEWS ──────────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      text: "Absolutely stunning. The team measured, cut, and fitted our worktops in a single day. Flawless finish and incredibly professional service.",
      name: "Sarah M.",
      loc: "Hampstead, NW3",
    },
    {
      text: "We went with the Calacatta marble-look and couldn't be happier. The quality is exceptional and the price was far better than competitors.",
      name: "James & Laura T.",
      loc: "Richmond, TW9",
    },
    {
      text: "Faultless from start to finish. Next-day sample service was a game changer — we chose our colour in 24 hours. Highly recommend.",
      name: "Mohammed A.",
      loc: "Islington, N1",
    },
  ];
  return (
    <section data-ocid="reviews.section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            What London homeowners say
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              data-ocid={`reviews.item.${i + 1}`}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-card transition-all"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="#2D8FD5" stroke="none" />
                ))}
              </div>
              <p className="text-gray-700 italic text-sm leading-relaxed mb-5">
                "{r.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "#2D8FD5" }}>
                  <MapPin size={11} className="inline mr-1" />
                  {r.loc}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Verified Google Review
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── WHY US ────────────────────────────────────────────────────────────────────
function WhyUs() {
  const usps = [
    "20+ years fitting quartz across London",
    "Full survey, supply, and installation service",
    "Price-match guarantee on all major brands",
    "Experienced, fully insured fitters",
    "Clean, tidy, and respectful of your home",
    "10-year manufacturer-backed guarantee",
  ];
  return (
    <section
      data-ocid="whyus.section"
      style={{ backgroundColor: "#2D8FD5" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/70 block mb-3">
              Why DialAWorkTop™
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
              London's most trusted quartz specialists
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Family-run and London-based, we've been transforming kitchens for
              over 20 years. Every job gets the same attention to detail —
              whether it's a single kitchen or a full apartment block.
            </p>
            <a
              href="#quote"
              data-ocid="whyus.primary_button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold bg-white hover:bg-gray-50 transition-all"
              style={{ color: "#2D8FD5" }}
            >
              Request a Free Quote
            </a>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {usps.map((u) => (
              <div
                key={u}
                className="flex items-center gap-3 px-4 py-3.5 rounded-lg"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <Check size={13} className="text-white" />
                </div>
                <span className="text-white text-sm font-medium">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "How long does a quartz worktop installation take?",
    a: "Most installations are completed in a single day. We arrive early, remove your old worktops, fit the new quartz, and leave your kitchen fully functional before we go.",
  },
  {
    q: "Do you offer next-day sample delivery across London?",
    a: "Yes! Order any samples on our website before 2pm and we'll have them delivered to your London home the very next day — completely free of charge.",
  },
  {
    q: "What is the difference between quartz and granite?",
    a: "Quartz is an engineered stone made from 90–95% natural quartz crystals, while granite is 100% natural. Quartz requires no sealing, is more consistent in pattern, and is generally easier to maintain.",
  },
  {
    q: "How much does a quartz worktop cost in London?",
    a: "Prices vary based on size, colour, and edge profile. Most standard kitchens range from £1,500–£4,000 fully fitted. Contact us for a free, no-obligation quote.",
  },
  {
    q: "Do quartz worktops stain or scratch easily?",
    a: "Quartz is highly resistant to stains, scratches, and bacteria. While it's extremely durable, we recommend using a cutting board and avoiding placing extremely hot pans directly on the surface.",
  },
  {
    q: "What warranty do you offer?",
    a: "All our quartz worktops come with a 10-year manufacturer warranty, and our installation is covered by a 2-year workmanship guarantee.",
  },
  {
    q: "Do you cover all of London?",
    a: "Yes — we cover all London boroughs and surrounding counties including Surrey, Kent, Hertfordshire, and Essex. Travel charges may apply outside the M25.",
  },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section data-ocid="faq.section" className="py-20 bg-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#2D8FD5" }}
          >
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={item.q}
              data-ocid={`faq.item.${i + 1}`}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">
                  {item.q}
                </span>
                {openIdx === i ? (
                  <ChevronUp
                    size={18}
                    style={{ color: "#2D8FD5", flexShrink: 0 }}
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="text-gray-400 flex-shrink-0"
                  />
                )}
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── LOCATIONS ────────────────────────────────────────────────────────────────
function Locations() {
  const locations = [
    "Barnet",
    "Camden",
    "Chelsea",
    "City of London",
    "Croydon",
    "Ealing",
    "Greenwich",
    "Hackney",
    "Hammersmith",
    "Hampstead",
    "Harrow",
    "Havering",
    "Islington",
    "Kensington",
    "Kingston",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Notting Hill",
    "Putney",
    "Richmond",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Wandsworth",
    "Westminster",
    "Wimbledon",
    "Surrey",
    "Kent",
    "Hertfordshire",
    "Essex",
  ];
  return (
    <section data-ocid="locations.section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-2 block"
            style={{ color: "#2D8FD5" }}
          >
            We Cover
          </span>
          <h2 className="font-display text-2xl font-bold text-gray-900">
            Quartz worktops across London &amp; beyond
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {locations.map((l) => (
            <span
              key={l}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-[#EBF5FB] hover:text-[#2D8FD5] transition-colors cursor-pointer"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section id="quote" data-ocid="cta.section" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span
          className="text-xs font-bold uppercase tracking-widest mb-4 block"
          style={{ color: "#2D8FD5" }}
        >
          Get Started Today
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
          Ready to transform your{" "}
          <span style={{ color: "#2D8FD5" }}>London kitchen?</span>
        </h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Join 500+ London homeowners who've upgraded their kitchen with our
          premium quartz worktops. Free quote. No commitment.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:info@dialawortop.co.uk"
            data-ocid="cta.primary_button"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all"
            style={{ backgroundColor: "#2D8FD5" }}
          >
            Request a Free Quote
          </a>
          <a
            href={`tel:${BRAND_PHONE.replace(/\s/g, "")}`}
            data-ocid="cta.secondary_button"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border-2 hover:bg-[#EBF5FB] transition-all"
            style={{ borderColor: "#2D8FD5", color: "#2D8FD5" }}
          >
            <Phone size={18} />
            Call {BRAND_PHONE}
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          Monday–Friday 8am–6pm · Saturday 9am–4pm · No obligation, free advice
        </p>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer
      className="py-8 px-4 sm:px-6"
      style={{ backgroundColor: "#1a2533" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
            style={{ backgroundColor: "#2D8FD5" }}
          >
            D
          </div>
          <span className="font-display font-bold text-white">
            DialAWorkTop™
          </span>
        </div>
        <p className="text-gray-400 text-xs text-center">
          © {CURRENT_YEAR} DialAWorkTop Ltd. All rights reserved. · Built with ❤️
          using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Benefits />
        <Brands />
        <Colours />
        <Process />
        <Gallery />
        <Reviews />
        <WhyUs />
        <FAQ />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
