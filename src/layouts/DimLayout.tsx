import type { FC, ReactNode } from "react";

const DimLayout: FC<{ background: string; children: ReactNode }> = ({
  background,
  children,
}) => {
  return (
    <div
      className="w-[100dvw] h-[100dvh] bg-cover bg-center"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className="w-full h-full bg-[url('/background.png')] bg-cover bg-center">
        {children}
      </div>
    </div>
  );
};

export default DimLayout;
