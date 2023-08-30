import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Valentina Panic Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-gray-900 w-full min-h-screen">
        
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Layout className="">
          <Component {...pageProps} />
           </Layout>
          <Footer />
       
      </main>
    </div>
  );
}
