"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { FieldSet, FieldGroup, Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import data from "@/data/portfolio.json";

export function Header() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("about");
  const [themeInstant, setThemeInstant] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => {
      const sections = ["about", "experience", "projects"];
      const current = sections.filter(id => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) < 160).at(-1);
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const keyboard = (event: KeyboardEvent) => { if (event.key === "Tab") document.documentElement.dataset.input = "keyboard"; };
    const pointer = () => { document.documentElement.dataset.input = "pointer"; };
    window.addEventListener("keydown", keyboard);
    window.addEventListener("pointerdown", pointer);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", keyboard); window.removeEventListener("pointerdown", pointer); };
  }, []);
  function toggleTheme(event: { detail: number }) {
    setThemeInstant(event.detail === 0);
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  }
  const links = [{ id: "about", name: "Home" }, { id: "experience", name: "Work" }, { id: "projects", name: "Projects" }];
  return <header className="site-header"><div className="header-inner reading-column">
    <NavigationMenu aria-label="Main navigation"><NavigationMenuList>
      {links.map(link => <NavigationMenuItem key={link.id}><NavigationMenuLink href={`#${link.id}`} active={active === link.id} aria-current={active === link.id ? "location" : undefined}>{link.name}</NavigationMenuLink></NavigationMenuItem>)}
      <NavigationMenuItem><NavigationMenuLink href={data.resumeUrl} target="_blank" rel="noreferrer">Resume<ArrowUpRight data-icon="inline-end" /></NavigationMenuLink></NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
    <TooltipProvider delay={350}><Tooltip><TooltipTrigger render={<Button variant="muted" size="icon" className="theme-control" aria-label="Toggle color theme" aria-pressed={dark} onClick={toggleTheme} />}>
      <AnimatePresence initial={false} custom={themeInstant}>
        <motion.span key={dark ? "sun" : "moon"} className="theme-glyph" aria-hidden="true"
          custom={themeInstant} initial={themeInstant ? false : "enter"} animate="rest" exit="exit"
          variants={{
            enter: { opacity: 0, transform: reduce ? "none" : "rotate(-30deg) scale(0.9)" },
            rest: { opacity: 1, transform: "rotate(0deg) scale(1)", transition: { duration: themeInstant ? 0 : reduce ? 0.1 : 0.15, ease: EASE_OUT } },
            exit: (instant: boolean) => ({ opacity: instant ? 1 : 0, transform: instant || reduce ? "none" : "rotate(30deg) scale(0.9)", transition: { duration: instant ? 0 : reduce ? 0.1 : 0.15, ease: EASE_OUT } }),
          }}>
          {dark ? <Sun /> : <Moon />}
        </motion.span>
      </AnimatePresence>
    </TooltipTrigger><TooltipContent>{dark ? "Light mode" : "Dark mode"}</TooltipContent></Tooltip></TooltipProvider>
  </div></header>;
}

export function Entrance({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return <motion.div initial={false} animate={reduce ? { opacity: [0.9, 1] } : { opacity: [0.8, 1], transform: ["translateY(6px)", "translateY(0px)"] }} transition={{ duration: reduce ? 0.1 : 0.24, ease: EASE_OUT }}>{children}</motion.div>;
}

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function useDisclosure(initialOpen: boolean) {
  const [open, setOpen] = useState(initialOpen);
  const [instant, setInstant] = useState(false);
  const onOpenChange: NonNullable<ComponentProps<typeof Collapsible>["onOpenChange"]> = (next, details) => {
    const event = details.event;
    setInstant(event.type.startsWith("key") || ("detail" in event && event.detail === 0));
    setOpen(next);
  };
  return { open, instant, onOpenChange };
}

// The shadcn panel retains IDs and trigger semantics. Motion owns visibility
// during closing, while inert/aria-hidden immediately remove closed contents
// from keyboard navigation and the accessibility tree.
export function MotionPanel({ open, instant, className, contentClassName, children }: {
  open: boolean; instant: boolean; className?: string; contentClassName?: string; children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const measure = () => setHeight(content.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    return () => observer.disconnect();
  }, []);
  return <CollapsibleContent keepMounted hidden={false} aria-hidden={!open} inert={!open} className={className}
    render={<motion.div initial={false} style={{ overflow: "hidden" }}
      animate={{ height: open ? height ?? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ height: { duration: instant || reduce ? 0 : 0.2, ease: EASE_OUT }, opacity: { duration: instant ? 0 : reduce ? 0.1 : 0.16, ease: EASE_OUT } }} />}
  ><div ref={contentRef} className={contentClassName} style={{ display: "flow-root" }}>{children}</div></CollapsibleContent>;
}

function DisclosureChevron({ open, instant }: { open: boolean; instant: boolean }) {
  const reduce = useReducedMotion();
  return <motion.span className="disclosure-glyph" aria-hidden="true" initial={false}
    animate={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }}
    transition={{ duration: instant || reduce ? 0 : 0.18, ease: EASE_OUT }}><ChevronDown /></motion.span>;
}

export function ContactForm({ email }: { email: string }) {
  const { open, instant, onOpenChange } = useDisclosure(false);
  return <Collapsible open={open} onOpenChange={onOpenChange} className="contact-form-disclosure">
    <CollapsibleTrigger render={<Button variant="muted" size="sm" />}><DisclosureChevron open={open} instant={instant} />Contact form <Badge variant="outline">Coming soon</Badge></CollapsibleTrigger>
    <MotionPanel open={open} instant={instant} contentClassName="contact-form-panel">
      <FieldSet disabled aria-describedby="form-note"><FieldDescription id="form-note">This form is not connected yet. Please email {email} directly for now.</FieldDescription><FieldGroup>
        <Field data-disabled><FieldLabel htmlFor="contact-name">Your name</FieldLabel><Input id="contact-name" name="name" autoComplete="name" disabled placeholder="Name" /></Field>
        <Field data-disabled><FieldLabel htmlFor="contact-email">Email address</FieldLabel><Input id="contact-email" name="email" type="email" autoComplete="email" disabled placeholder="you@company.com" /></Field>
        <Field data-disabled><FieldLabel htmlFor="contact-message">Message</FieldLabel><Textarea id="contact-message" name="message" disabled placeholder="Tell me about the opportunity" rows={4} /></Field>
        <Button disabled type="button">Send message<ArrowUpRight data-icon="inline-end" /></Button>
      </FieldGroup></FieldSet>
    </MotionPanel>
  </Collapsible>;
}
