import type { FC } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import { useNavigate } from "react-router";

const CoolingMistWorkingPage: FC = () => {
  const navigate = useNavigate();

  return <DimLayout navigationBar={{ onHomeButtonClicked: () => navigate("/home") }}>

  </DimLayout>
}

export default CoolingMistWorkingPage;