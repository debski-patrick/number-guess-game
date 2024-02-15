import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import StaticBody from "../components/StaticBody";
import store from "../store";
import MainField from "../components/MainField";
import PrivacyPolicy from "../components/PrivacyPolicy";

const NumberOnlyMode = () => {
  const [settings, setSettings] = useState({
    challengeLink: null
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSettings({
        challengeLink: window.location.pathname.includes("/challenge")
          ? window.location.pathname.split("/challenge/")[1]
          : null
      });
    }

    store.dispatch({
      type: "dailyChallengeMode",
      payload: false,
    });
    store.dispatch({
      type: "numbersOnlyMode",
      payload: true,
    });
    store.dispatch({
      type: "practiceMode",
      payload: false,
    });
  }, []);

  console.log(store.getState().darkMode, "darkMode?");
  return (
    <div className={"App " + (store.getState().darkMode ? "darkMode " : "")}>
      {typeof window !== 'undefined' && window.location.pathname === "/privacy-policy" ? (
        <PrivacyPolicy />
      ) : (
        <div>
          <Header challengeLink={settings.challengeLink} />
          <MainField challengeLink={settings.challengeLink} />
          <StaticBody />
        </div>
      )}
    </div>
  );
};

export default NumberOnlyMode;
