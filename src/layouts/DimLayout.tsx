import NavigationBar from "@/components/NavigationBar";
import type { FC, ReactNode } from "react";

const DimLayout: FC<{
  background?: ReactNode; navigationBar?: {
    onHomeButtonClicked: () => void,
  }; children?: ReactNode;
}> = ({background, navigationBar, children}) => {
  return (
    <div className="w-[100dvw] h-[100dvh] relative bg-black text-white">
      <div className="absolute w-full h-full">
        {background}
      </div>
      <div className="absolute w-full h-full bg-[url('/background.png')] bg-cover bg-center"/>
      <div className="absolute w-full h-full">{children}</div>
      {navigationBar && (
        <div className="fixed bottom-[50px] left-[50%] -translate-x-1/2 mb-6">
          <NavigationBar {...navigationBar} />
        </div>
      )}
    </div>
  );
};

export default DimLayout;
