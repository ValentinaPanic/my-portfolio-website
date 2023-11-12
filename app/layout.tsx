import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Valentina Panic | Personal Portfolio",
  description: "Valentina Panic is a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${monsterrat.variable} font-mont relative bg-zinc-50 text-zinc-900 w-full h-full`}
      >
        <Navbar darkMode={true} />
        <div className="min-h-[calc(100vh_-_154px)] mx-3 mt-3">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
