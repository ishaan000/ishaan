import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpaceBackground from "../components/SpaceBackground";
import SmoothScroll from "../components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishaan Bhalla | Software Engineer",
  description:
    "Portfolio website showcasing my skills, projects, and experience as a software engineer",
  openGraph: {
    title: "Ishaan Bhalla | Software Engineer",
    description:
      "Portfolio website showcasing my skills, projects, and experience as a software engineer",
    images: [
      {
        url: "/image.png", // Using the hero image instead of profile picture
        width: 1200,
        height: 630,
        alt: "Ishaan Bhalla - Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpaceBackground />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
