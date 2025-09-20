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

function App() {
  const isIdle = useIdle(60 * 1000 * 1000);
  const navigate = useNavigate();

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
    </Routes>
  );
}

export default App;
