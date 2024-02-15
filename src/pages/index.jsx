import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import StaticBody from "../components/StaticBody";
import store from "../store";
import MainField from "../components/MainField";
import PrivacyPolicy from "../components/PrivacyPolicy";

const inter = Inter({ subsets: ['latin'] })

const MathEquationMode = () => {
  const [settings, setSettings] = useState({
    challengeLink: null
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YD7GSZRT0P');

      setSettings({
        challengeLink: window.location.pathname.includes("/challenge")
          ? window.location.pathname.split("/challenge/")[1]
          : null
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Number Guess | Math Wordle Puzzle Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${inter.className}`}>
        <div className={"App " + (store.getState().darkMode ? "darkMode " : "")}>
          {
            typeof window !== 'undefined' &&
              window.location.pathname === "/privacy-policy" ? (
              <PrivacyPolicy />
            ) : (
              <div>
                <Header challengeLink={settings.challengeLink} />
                <MainField challengeLink={settings.challengeLink} />
                <StaticBody />
              </div>
            )
          }
        </div>
      </main>
    </>
  )
}

export default MathEquationMode;