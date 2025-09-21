import { type FC, useEffect, useState } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const CoolingMistWorkingPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown < 0) navigate("/home");
  }, [countdown, navigate]);

  return <DimLayout navigationBar={navigationBar}>
    <div className="w-full h-full flex flex-col gap-[10px] justify-center items-center">
      <div className="relative w-[500px] h-[342px]">
        <motion.div
          className="absolute top-0 left-0 w-full"
          variants={{
            initial: {
              maskImage: 'radial-gradient(circle, white 0%, transparent 0%)',
            },
            animate: {
              maskImage: 'radial-gradient(circle, white 10%, transparent 100%)',
            },
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          initial="initial"
          animate="animate"
        >
          <img src="/mist_particle.png" alt="mist-machine-particle" className="object-cover filter-[sepia(50%)_brightness(80%)]"/>
        </motion.div>
        <div className="absolute top-0 left-0 w-full">
          <img src="/mist_machine.png" alt="mist-machine" className="object-cover"/>
        </div>
      </div>
      <span className="text-[14px] font-medium">
        ⁘ 로봇의 측면으로 이동하면 10초간 미스트가 분사됩니다.
      </span>
      <span className="font-normal font-['DS-DIGI'] text-[33px] text-[#F6FC00] [text-shadow:0px_0px_10px_#F6FC0055]">
        {Math.max(Math.trunc(countdown / 60), 0).toString().padStart(2, '0')}:{Math.max(countdown % 60, 0).toString().padStart(2, '0')}
      </span>
    </div>
  </DimLayout>
}

export default CoolingMistWorkingPage;