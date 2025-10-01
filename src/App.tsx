import SplashPage from "@/pages/SplashPage";
import "@/styles/global.css";
import HomePage from "@/pages/HomePage";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import useIdle from "@/hooks/useIdle";
import { useEffect } from "react";
import MapPage from "@/pages/MapPage";
import CoolingMistPage from "@/pages/CoolingMistPage.tsx";
import CoolingMistWorkingPage from "@/pages/CoolingMistWorkingPage.tsx";
import PhotoWithYupYupPage from "@/pages/PhotoWithYupYupPage.tsx";
import EmergencyReportPage from "@/pages/EmergencyReportPage.tsx";
import QrPage from "./pages/QrPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isIdle = useIdle({
    isEnabled: location.pathname !== "/home",
    timeout: 5000000,
  });

  useEffect(() => {
    if (isIdle) navigate("/");
  }, [isIdle, navigate]);

  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/cooling-mist" element={<CoolingMistPage />} />
      <Route
        path="/cooling-mist/working"
        element={<CoolingMistWorkingPage />}
      />
      <Route path="/photo-with-yupyup" element={<PhotoWithYupYupPage />} />
      <Route path="/emergency-report" element={<EmergencyReportPage />} />
      <Route path="/qr" element={<QrPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
