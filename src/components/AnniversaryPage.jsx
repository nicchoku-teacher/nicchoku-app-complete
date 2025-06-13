import React, { useContext } from "react";
import { anniversaries } from "../data/anniversaries";
import illustrationMap from "../data/illustrations";
import { Link } from "react-router-dom";
import { SettingsContext } from "./SettingsPage";

export default function AnniversaryPage({ date }) {
  const { showImage, setShowImage, fontSize, setFontSize } = useContext(SettingsContext);
  const anniversary = anniversaries[date];
  const illustration = illustrationMap[date];

  console.log("📅 date =", date);

  return (
    <div className="text-center p-6 bg-gradient-to-b from-yellow-100 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-pink-700">にっちょくアプリ</h1>
      <div className="text-xl mb-4 text-gray-800">date = {date}</div>

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

      <div className="mt-6 space-x-4">
        <button
          onClick={() => setShowImage(!showImage)}
          className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
        >
          {showImage ? "イラストをかくす" : "イラストをひょうじ"}
        </button>

        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="px-2 py-1 rounded border shadow text-gray-700"
        >
          <option value="text-sm">小</option>
          <option value="text-lg">中</option>
          <option value="text-xl">大</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">
          ホームにもどる
        </Link>
        <Link to="/date" className="px-4 py-2 bg-indigo-500 text-white rounded-xl shadow hover:bg-indigo-600">
          日付ページへ
        </Link>
        <Link to="/weather" className="px-4 py-2 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600">
          てんきページへ
        </Link>
        <Link to="/genki" className="px-4 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600">
          げんきメーターへ
        </Link>
        <Link to="/settings" className="px-4 py-2 bg-gray-600 text-white rounded-xl shadow hover:bg-gray-700">
          設定ページ
        </Link>
      </div>
    </div>
  );
}
