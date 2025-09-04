import DimLayout from "@/layouts/DimLayout";
import { type FC } from "react";

const SplashPage: FC = () => {
  return (
    <DimLayout background="/splash-background.png">
      <div className="w-full h-full flex flex-col justify-center items-center px-4">
        <div className="relative mb-[30px]">
          <img
            src="/splash-logo.png"
            alt="Bevive Logo"
            className="w-[257.92px]"
          />
          <img
            src="/splash-logo-outer.png"
            alt="Bevive Logo"
            className="w-full absolute top-0 left-0"
          />
          <img
            src="/splash-logo-star.png"
            alt="Bevive Logo"
            className="w-full absolute top-0 left-0"
          />
        </div>
        <p className="text-base tracking-tighter m-0 text-[14px] leading-[13px] text-center">
          Feel the vibe we create. <br />
          Be the vibe we feel.
        </p>
      </div>
    </DimLayout>
  );
};

export default SplashPage;
