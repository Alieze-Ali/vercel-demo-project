import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/Nav"; // Import Nav component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navigation /> {/* Add the Nav component here */}
        {children} {/* Keep the children rendering below the nav */}
      </body>
    </html>
  );
}
