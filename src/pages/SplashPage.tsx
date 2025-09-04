import DimLayout from "@/layouts/DimLayout";
import { motion } from "framer-motion";
import { type FC } from "react";

const SplashPage: FC = () => {
  return (
    <DimLayout
      background="url('/background-splash.png') no-repeat center/cover"
      filter="blur(8px)"
    >
      <div className="w-full h-full flex flex-col justify-center items-center px-4">
        <div className="relative mb-[30px]">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/splash-logo.png"
              alt="Bevive Logo"
              className="w-[257.92px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.2 }}
          >
            <img
              src="/splash-logo-outer.png"
              alt="Bevive Logo"
              className="w-full absolute top-0 left-0"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            <img
              src="/splash-logo-star.png"
              alt="Bevive Logo"
              className="w-full absolute top-0 left-0"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.1 }}
        >
          <p className="text-base tracking-tighter m-0 text-[14px] leading-[13px] text-center">
            Feel the vibe we create. <br />
            Be the vibe we feel.
          </p>
        </motion.div>
      </div>
    </DimLayout>
  );
};

export default SplashPage;
