import React from "react";
import { useNavigate } from "react-router-dom";
import { anniversaries } from "../data/anniversaries";
import illustrationMap from "../data/illustrations";
import { useSettings } from "./SettingsPage";

export default function AnniversaryPage({ date }) {
  const navigate = useNavigate();
  const { showImage, fontSize } = useSettings();

  // MM/DD形式に整える
  const formatDate = (d) => {
    if (!d) return "";
    const [m, d2] = d.split("/");
    const mm = m.padStart(2, "0");
    const dd = d2.padStart(2, "0");
    return `${mm}/${dd}`;
  };

  const formattedDate = formatDate(date);
  const anniversary = anniversaries[formattedDate];
  const illustration = illustrationMap[formattedDate];

  return (
    <div className="text-center p-6 bg-gradient-to-b from-yellow-100 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">にっちょくアプリ</h1>
      <div className="text-xl mb-4 text-gray-800">date = {formattedDate}</div>
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
        <p className="text-lg text-red-600">今日はなんの日か見つかりませんでした。</p>
      )}

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/weather")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600"
        >
          つぎへ（てんき）
        </button>
        <button
          onClick={() => navigate("/genki")}
          className="px-4 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600"
        >
          つぎへ（げんき）
        </button>
        <button
          onClick={() => navigate("/settings")}
          className="px-4 py-2 bg-gray-700 text-white rounded-xl shadow hover:bg-gray-800"
        >
          設定ページ
        </button>
      </div>
    </div>
  );
}
