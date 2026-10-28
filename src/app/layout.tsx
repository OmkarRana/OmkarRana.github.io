import type { Metadata, Viewport } from "next";
import data from "@/data/portfolio.json";
import "./globals.css";


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omkarrana.github.io";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${data.name} — Data Engineer`,
  description: data.valueProposition,
  authors: [{ name: data.name }],
  alternates: { canonical: "/" },
  openGraph: { title: `${data.name} — Data Engineer`, description: data.valueProposition, url: "/", siteName: `${data.name} Portfolio`, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${data.name} — Data Engineer` }] },
  twitter: { card: "summary_large_image", title: `${data.name} — Data Engineer`, description: data.valueProposition, images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fafafa" }, { media: "(prefers-color-scheme: dark)", color: "#111111" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className="dark"><head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme')||'dark';document.documentElement.dataset.theme=t;document.documentElement.classList.toggle('dark',t==='dark')}catch{}` }} /></head><body>{children}</body></html>;
}
