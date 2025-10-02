import ProgressiveStatusBar from "@/components/ProgressiveStatusBar";
import useNavigationBar from "@/hooks/useNavigationBar";
import DimLayout from "@/layouts/DimLayout";
import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";

const YupYupWorkingPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setTimeout(() => setCurrentStep(1), 10);

    const interval = setInterval(() => {
      setCurrentStep((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStep > 2) navigate("/qr");
  }, [currentStep, navigate]);

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-[72px] pb-[10%]">
        <div className="relative">
          <img src="/drone.png" className="w-[540px]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-[50%] text-[16px] font-medium">
            ⁘ 가까운{" "}
            <i className="bg-[url('/yupyup.svg')] bg-center bg-no-repeat bg-contain filter-[grayscale(1)] w-[80px] h-[12px] inline-block" />{" "}
            이 오고 있어요!
          </span>
        </div>
        <ProgressiveStatusBar
          steps={["호출 완료", "이동중", "도착 예정"]}
          currentStep={currentStep}
        />
      </div>
    </DimLayout>
  );
};

export default YupYupWorkingPage;
