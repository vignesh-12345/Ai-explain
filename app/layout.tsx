import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KALNET AI — Study Topic Explainer",
  description:
    "Enter any study topic and get a clear, student-friendly explanation powered by AI.",
  keywords: ["study", "AI", "education", "explainer", "learning", "students"],
  authors: [{ name: "KALNET" }],
  openGraph: {
    title: "KALNET AI — Study Topic Explainer",
    description: "AI-powered study companion for students",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="ambient-left" aria-hidden="true" />
        <div className="ambient-right" aria-hidden="true" />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}