import type { FC, ReactNode } from "react";

const BackdropModal: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <div
      className="fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-[#1F1F1F80] flex justify-center items-center z-10"
      style={{ backdropFilter: "blur(5px)" }}
    >
      {children}
    </div>
  );
};

export default BackdropModal;
