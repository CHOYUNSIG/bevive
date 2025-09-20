import DimLayout from "@/layouts/DimLayout";
import { motion } from "framer-motion";
import { type FC } from "react";
import { useNavigate } from "react-router";

const SplashPage: FC = () => {
  const navigate = useNavigate();

  const onTap = () => {
    navigate("/home");
  };

  return (
    <DimLayout
      background={"url('/background-splash.png') no-repeat center/cover"}
    >
      <div
        className="w-full h-full flex flex-col justify-center items-center px-4"
        onClick={onTap}
      >
        <div className="relative mb-[30px]">
          <motion.div
            className="w-[257.92px]"
            initial={{opacity: 0, filter: "blur(8px)"}}
            animate={{opacity: 1, filter: "blur(0px)"}}
            transition={{duration: 0.5}}
          >
            <img src="/splash-logo.png" alt="Bevive Logo"/>
          </motion.div>
          <motion.div
            className="w-full absolute top-0 left-0"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 3, delay: 0.2}}
          >
            <img src="/splash-logo-outer.png" alt="Bevive Logo"/>
          </motion.div>
          <motion.div
            className="w-full absolute top-0 left-0"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2, delay: 0.3}}
          >
            <img src="/splash-logo-star.png" alt="Bevive Logo"/>
          </motion.div>
        </div>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2, delay: 0.1}}
        >
          <p className="text-base tracking-tighter m-0 text-[14px] leading-[13px] text-center font-['AlteHaasGrotesk']">
            Feel the vibe we create. <br/>
            Be the vibe we feel.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-[64px] left-1/2 -translate-x-1/2 text-white text-[16px] font-light opacity-[62%]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, delay: 1}}
      >
        <p>Tap</p>
      </motion.div>
    </DimLayout>
  );
};

export default SplashPage;
