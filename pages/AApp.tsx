import { useState } from "react";

import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";

import { Montserrat } from "@next/font/google";

const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${monsterrat.variable} font-mont ${
        darkMode ? "dark" : ""
      } relative`}
    >
      <main className="bg-light dark:bg-dark w-full relative min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Component {...pageProps} />

       
      </main>
    </div>
  );
}
