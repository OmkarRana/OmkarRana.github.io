"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUpRight, Mail } from "lucide-react";
import data from "@/data/portfolio.json";

const navigation = ["About", "Experience", "Skills", "Projects", "Contact"];
export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    setDark(document.documentElement.dataset.theme === "dark");
    const sync = () => { try { if (localStorage.getItem("theme")) return; } catch {} document.documentElement.dataset.theme = media.matches ? "dark" : "light"; setDark(media.matches); };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [open]);
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? "dark" : "light"; try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {} }
  return <header className="header"><div className="container header-inner"><a className="wordmark" href="#" aria-label={`${data.name} home`}>omkar<span>rana.</span></a><nav id="primary-nav" aria-label="Main navigation" className={open ? "nav open" : "nav"}>{navigation.map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="header-controls"><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button><a className="header-contact" href={`mailto:${data.email}`}>Say hello<ArrowUpRight size={16} /></a><button id="menu-toggle" className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={22} /> : <Menu size={22} />}</button></div></div></header>;
}

export function Reveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return <LazyMotion features={domAnimation}><m.div initial={false} whileInView={reduce ? undefined : { opacity: [0.65, 1], y: [14, 0] }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.5, ease: "easeOut" }}>{children}</m.div></LazyMotion>;
}

export function ContactForm({ email }: { email: string }) {
  return <div className="contact-form"><div className="form-heading"><h3>Send a message</h3><span>Coming soon</span></div><p id="form-note">The form is not connected yet. Please email me directly for now.</p><fieldset disabled aria-describedby="form-note"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Name" /><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" /><label htmlFor="contact-message">What do you have in mind?</label><textarea id="contact-message" name="message" placeholder="Tell me about the opportunity…" rows={3} /><button className="button primary" type="button">Send message<ArrowUpRight size={17} /></button></fieldset><a className="form-email" href={`mailto:${email}`}><Mail size={15} />Send an email instead<ArrowUpRight size={14} /></a></div>;
}
