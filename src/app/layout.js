import { Inter } from "next/font/google";
import "./globals.css";
import GoTopBox from "./Components/GoTopBox/GoTopBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coins",
  description: `Crypto prices (in every coin and in most fiat currencies, like USD and EUR.)
Extensive price history and all-time highs
Ranks, supplies, market caps
Project information, such as descriptions and social media links
SVG/PNG logos of all coins`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <GoTopBox />
      </body>
    </html>
  );
}
