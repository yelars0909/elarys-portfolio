import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elarys Tolkhyn",
  description:
    "Elarys Tolkhyn — cross-media designer: UI/UX, book design, branding, and motion design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
