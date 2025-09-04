import SplashPage from "@/pages/SplashPage";
import "@/styles/global.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
