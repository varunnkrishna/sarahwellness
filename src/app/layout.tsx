import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactButton } from "@/components/ui/ContactButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarah Wellness - Mental Health Coach",
  description: "Your journey to mental wellness starts here. Professional mental health coaching and guidance for a balanced life.",
  icons: {
    icon: [
      {
        url: '/images/sarah-fevicon.webp',
        type: 'image/webp',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <ContactButton />
      </body>
    </html>
  );
}
