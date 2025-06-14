import React, { useContext } from "react";
import { anniversaries } from "../data/anniversaries";
import illustrationMap from "../data/illustrations";
import { Link } from "react-router-dom";
import { SettingsContext } from "./SettingsPage";

function formatDate(date) {
  const [month, day] = date.split("/");
  return `${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
}

export default function AnniversaryPage({ date }) {
  const formattedDate = formatDate(date);
  console.log("確認用：formattedDate =", formattedDate);
  const anniversary = anniversaries[formattedDate];
  const { showIllustration } = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>にっちょくアプリ</h1>
      <p>date = {formattedDate}</p>
      {anniversary ? (
        <>
          <h2>{anniversary.title}</h2>
          <p>{anniversary.description}</p>
          {showIllustration && illustrationMap[formattedDate] && (
            <img
              src={illustrationMap[formattedDate]}
              alt={anniversary.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
      <Link to="/">トップにもどる</Link>
    </div>
  );
}
