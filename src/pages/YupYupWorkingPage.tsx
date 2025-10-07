import ProgressiveStatusBar from "@/components/ProgressiveStatusBar";
import useNavigationBar from "@/hooks/useNavigationBar";
import DimLayout from "@/layouts/DimLayout";
import { motion } from "framer-motion";
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
    if (currentStep > 2) navigate("/qr", { replace: true });
  }, [currentStep, navigate]);

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-[72px] pb-[10%]">
        <div className="relative">
          <motion.img
            src="/drone.png"
            className="w-[540px]"
            animate={{
              y: [0, -10, 0], // 0px -> -20px -> 0px 순으로 y축 이동
            }}
            // transition: 애니메이션의 전환 효과를 설정
            transition={{
              duration: 2, // 애니메이션 총 소요 시간
              ease: "easeInOut", // 시작과 끝을 부드럽게
              repeat: Infinity, // 무한 반복
              repeatType: "mirror", // 갔다가 되돌아오는 움직임 (yoyo와 유사)
            }}
          />
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
