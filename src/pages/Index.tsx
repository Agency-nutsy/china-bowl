import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Leaf, Truck, Star, ArrowRight, Clock, MapPin, Phone, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// You will need to update these image imports with your actual assets
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";
import noodlesImg from "@/assets/momos.jpg"; // Placeholder
import dumplingsImg from "@/assets/thukpa.jpg"; // Placeholder
import chilliPotatoImg from "@/assets/tingmo.jpg"; // Placeholder
import lambImg from "@/assets/butter-tea.jpg"; // Placeholder
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

// NAP Data fetched directly from Google Maps for China Bowl
const PHONE = "+919871927332";
const PHONE_DISPLAY = "+91 98719 27332";
const ADDRESS = "House No. 10, Satya Niketan Rd, opposite Venkateshwara College, Moti Bagh II, Satya Niketan, South Moti Bagh, New Delhi, Delhi 110021, India";
const MAPS_LINK = "https://www.google.com/maps/place/China+Bowl/@28.5877496,77.1673068,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1d1235279cef:0xc8edd7db61b0e4e6!8m2!3d28.5877496!4d77.1673068!16s%2Fg%2F11b6scfwst?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5892.071326677798!2d77.16615361644291!3d28.586376926004043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d1235279cef%3A0xc8edd7db61b0e4e6!2sChina%20Bowl!5e0!3m2!1sen!2sin!4v1776114373284!5m2!1sen!2sin"; 

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

// Updated based on actual Google reviews praising these specific items
const specialties = [
  { name: "Amazing Dumplings", desc: "Authentic, hand-folded dumplings that are an absolute must-try.", img: dumplingsImg, price: "₹150", tag: "Bestseller" },
  { name: "Honey Chilli Potato", desc: "Crispy, sweet, and perfectly spiced for an authentic Chinese taste.", img: chilliPotatoImg, price: "₹180", tag: "Crowd Favorite" },
  { name: "Veg Hakka Noodles", desc: "Classic, comforting noodles that hit the spot every single time.", img: noodlesImg, price: "₹160", tag: "Classic" },
  { name: "Scrumptious Lamb", desc: "Deeply flavorful main courses with perfectly cooked meat.", img: lambImg, price: "₹280", tag: "Highly Recommended" },
];

// Extracted from real Google Maps reviews for China Bowl
const reviews = [
  { name: "Google Reviewer", text: "I had veg hakka noodles here. It was so calm and peaceful. Service was also nice, making the experience special.", rating: 5, avatar: "G" },
  { name: "Google Reviewer", text: "It was my go-to place for Chinese when I lived in Satya. Their dumplings are amazing, as well as their main dishes. I would recommend this to anyone.", rating: 5, avatar: "G" },
  { name: "Google Reviewer", text: "Authentic Chinese dishes and a fine dining experience in a cozy setting. Tasty and reasonably priced.", rating: 4, avatar: "G" },
];

const stats = [
  { value: "4.3", label: "Google Rating" },
  { value: "100%", label: "Authentic Taste" },
  { value: "50+", label: "Menu Items" },
  { value: "11am", label: "Opens Daily" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Show all images stacked, only current one is visible via opacity */}
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="China Bowl Food"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10" />

        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-accent" />
                Authentic Chinese Cuisine
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              China Bowl
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/80 mb-2 font-display italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Fine Dining in a Cozy Setting
            </motion.p>

            <motion.p
              className="text-primary-foreground/60 mb-10 text-lg max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Tasty, reasonably priced Chinese cuisine like honey chilli potato, amazing dumplings, and fried rice in a tranquil environment.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Phone size={18} />
                Call Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">The China Bowl Vibe</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ChefHat, title: "Authentic Flavors", desc: "Authentic Chinese dishes offering a true taste of traditional recipes crafted with care." },
              { icon: Leaf, title: "Cozy & Peaceful", desc: "A tranquil, family-friendly environment that makes your dining experience incredibly special." },
              { icon: UtensilsCrossed, title: "Reasonable Prices", desc: "Tasty and generous portions of your favorite Chinese food without breaking the bank." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Menu</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Signature Dishes</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/menu" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View Full Menu <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ambiance split */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={gallery1} alt="China Bowl restaurant ambiance" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
                <img src={gallery2} alt="Chinese food platter" className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="md:pl-4">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Space</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  A Tranquil Escape,<br />In the Heart of Delhi
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Located opposite Venkateshwara College in the heart of Satya Niketan, China Bowl offers a fine dining experience in a cozy setting. Whether you're craving our amazing dumplings or classic hakka noodles, our calm and peaceful ambiance is the perfect retreat.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Read Our Story <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What Our Guests Say</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="absolute -top-3 left-8 text-6xl text-primary/10 font-display">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{r.avatar}</div>
                    <p className="font-semibold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Find Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Visit Our Kitchen</h2>
                <div className="space-y-6">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday – Sunday: 11:00 AM – 11:00 PM</p>
                    </div>
                  </div>
                  <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="China Bowl Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Craving Authentic Chinese?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg max-w-lg mx-auto">
              Drop by for our famous honey chilli potato, amazing dumplings, and a peaceful dining experience right here in Satya Niketan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-foreground px-8 py-4 font-semibold hover:shadow-xl transition-all duration-300"
              >
                <Phone size={18} />
                Call Us Now
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Explore Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;