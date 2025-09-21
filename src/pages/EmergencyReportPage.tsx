import type { FC } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const EmergencyReportPage: FC = () => {
  const navigationBar = useNavigationBar();

  return <DimLayout navigationBar={navigationBar}>

  </DimLayout>
}

export default EmergencyReportPage;