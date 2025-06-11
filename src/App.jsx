import React, { useState } from "react";

const anniversaries = {
  "01/01": { "title": "がんじつ", "description": "おしょうがつをいわう日です。" },
  "06/10": { "title": "とけいの日", "description": "じかんをたいせつにしよう。" },
  "06/11": { "title": "むしの日", "description": "こんちゅうをしらべてみよう。" },
  "12/31": { "title": "おおみそか", "description": "ことしさいごの日。いちねんをふりかえろう。" }
};

export default function App() {
  const [date, setDate] = useState(() => {
    const today = new Date();
    const mm = ("0" + (today.getMonth() + 1)).slice(-2);
    const dd = ("0" + today.getDate()).slice(-2);
    return mm + "/" + dd;
  });

  const anniversary = anniversaries[date];

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>にっちょくアプリ</h1>
      <p>date = {date}</p>
      {anniversary ? (
        <>
          <h2>{anniversary.title}</h2>
          <p>{anniversary.description}</p>
        </>
      ) : (
        <p>今日はなんの日か見つかりませんでした。</p>
      )}
    </div>
  );
}