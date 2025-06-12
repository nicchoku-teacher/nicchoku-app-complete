import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DatePage from "./components/DatePage";
import WeatherPage from "./components/WeatherPage";
import GenkiPage from "./components/GenkiPage";
import AnniversaryPage from "./components/AnniversaryPage";
import SettingsPage from "./components/SettingsPage";
import NavBar from "./components/NavBar";
import { SettingsProvider } from "./components/SettingsPage";

export default function App() {
  return (
    <SettingsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/date" element={<DatePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/genki" element={<GenkiPage />} />
          <Route path="/anniversary" element={<AnniversaryPage date={getToday()} />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<DatePage />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
}

function getToday() {
  const today = new Date();
  const mm = ("0" + (today.getMonth() + 1)).slice(-2);
  const dd = ("0" + today.getDate()).slice(-2);
  return `${mm}/${dd}`;
}
