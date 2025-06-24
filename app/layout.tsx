import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/components/navigation/NavBar";

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
        <div className="flex min-h-screen flex-col">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
