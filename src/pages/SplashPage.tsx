import { type FC } from "react";

const SplashPage: FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen bg-black text-white text-center bg-cover bg-center"
      style={{ backgroundImage: `url('/splash-background.png')` }}
    >
      <div className="flex flex-col justify-center items-center px-4">
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
        <p className="text-base tracking-tighter m-0 text-[14px] leading-[13px]">
          Feel the vibe we create. <br />
          Be the vibe we feel.
        </p>
      </div>
    </div>
  );
};

export default SplashPage;
