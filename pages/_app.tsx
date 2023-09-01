import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Montserrat} from "@next/font/google";


const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"

})

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${monsterrat.variable} font-mont ${darkMode ? "dark" : ""} relative`}>
      <Head>
        <title>Valentina Panic Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light dark:bg-dark w-full relative min-h-screen">
        
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Layout className="">
          <Component {...pageProps} />
           </Layout>
          <Footer />
       
      </main>
    </div>
  );
}
