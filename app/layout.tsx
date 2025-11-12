import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Journey Animation - ShortBuzz BD",
  description: "Join Aarav's creative journey! Daily animation stories on ShortBuzz BD",
  openGraph: {
    title: "Creative Journey Animation - ShortBuzz BD",
    description: "Daily animation stories and creative content",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
