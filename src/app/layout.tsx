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
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7f8f5" }, { media: "(prefers-color-scheme: dark)", color: "#101916" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch{}` }} /></head><body>{children}</body></html>;
}
