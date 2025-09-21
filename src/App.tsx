import SplashPage from "@/pages/SplashPage";
import "@/styles/global.css";
import HomePage from "@/pages/HomePage";
import { Route, Routes, useNavigate } from "react-router";
import useIdle from "@/hooks/useIdle";
import { useEffect } from "react";
import MapPage from "@/pages/MapPage";
import CoolingMistPage from "@/pages/CoolingMistPage.tsx";
import CoolingMistWorkingPage from "@/pages/CoolingMistWorkingPage.tsx";
import PhotoWithYupYupPage from "@/pages/PhotoWithYupYupPage.tsx";
import EmergencyReportPage from "@/pages/EmergencyReportPage.tsx";

function App() {
  const navigate = useNavigate();
  const isIdle = useIdle();

  useEffect(() => {
    if (isIdle) navigate("/");
  }, [isIdle, navigate]);

  return (
    <Routes>
      <Route path="/" element={<SplashPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/map" element={<MapPage/>}/>
      <Route path="/cooling-mist" element={<CoolingMistPage/>}/>
      <Route path="/cooling-mist/working" element={<CoolingMistWorkingPage/>}/>
      <Route path="/photo-with-yupyup" element={<PhotoWithYupYupPage/>}/>
      <Route path="/emergency-report" element={<EmergencyReportPage/>}/>
    </Routes>
  );
}

export default App;
