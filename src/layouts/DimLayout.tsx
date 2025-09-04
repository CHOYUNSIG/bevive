import type { CSSProperties, FC, ReactNode } from "react";

const DimLayout: FC<{
  background?: CSSProperties["background"];
  filter?: CSSProperties["filter"];
  children: ReactNode;
}> = ({ background, filter, children }) => {
  return (
    <div className="w-[100dvw] h-[100dvh] relative bg-black text-white">
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{ background, filter }}
      />
      <div className="absolute w-full h-full bg-[url('/background.png')] bg-cover bg-center" />
      <div className="absolute w-full h-full">{children}</div>
    </div>
  );
};

export default DimLayout;
