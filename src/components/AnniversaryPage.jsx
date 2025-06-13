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
  const { showImage, setShowImage, fontSize, setFontSize } = useContext(SettingsContext);

  const fixedDate = formatDate(date);
  const anniversary = anniversaries[fixedDate];
  const illustration = illustrationMap[fixedDate];

  return (
    <div className="text-center p-6 bg-gradient-to-b from-yellow-100 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">にっちょくアプリ</h1>
      <div className="text-xl mb-4 text-gray-800">date = {fixedDate}</div>

      {anniversary ? (
        <div className={`border rounded-xl p-4 bg-white shadow-lg ${fontSize}`}>
          <h2 className="text-2xl font-semibold mb-2 text-green-700">{anniversary.title}</h2>
          <p className="mb-4 text-gray-700">{anniversary.description}</p>
          {showImage && illustration && (
            <img
              src={illustration}
              alt="記念日のイラスト"
              className="mx-auto max-w-xs rounded-lg shadow-md border border-yellow-300"
            />
          )}
        </div>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
    </div>
  );
}
