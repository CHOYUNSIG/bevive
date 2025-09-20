import SplashPage from "@/pages/SplashPage";
import "@/styles/global.css";
import HomePage from "@/pages/HomePage";
import { Route, Routes, useNavigate } from "react-router";
import useIdle from "@/hooks/useIdle";
import { useEffect } from "react";
import MapPage from "@/pages/MapPage";

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
    </Routes>
  );
}

export default App;
