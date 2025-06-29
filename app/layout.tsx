import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Log",
  description: "Keep track of your journeys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
