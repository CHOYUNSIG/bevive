import useIdle from "@/hooks/useIdle";
import useNavigationBar from "@/hooks/useNavigationBar";
import DimLayout from "@/layouts/DimLayout";
import { useEffect, type FC } from "react";
import { useNavigate } from "react-router";

const QrPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  const isIdle = useIdle({ timeout: 5000 });

  useEffect(() => {
    if (isIdle) navigate("/home");
  }, [isIdle, navigate]);

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-[60px]">
        <span className="text-[20px]">
          <img src="/bevive.png" className="w-[61.4px] inline-block pb-2" />{" "}
          제품의 더 많은 내용은 하단의 코드를
          <br />
          인식하여 온라인 전시에서 만나보실 수 있어요.
        </span>
        <img src="/qr.png" className="w-[160px]" />
        <div className="flex flex-col items-center">
          <img src="/link.svg" className="w-[26px]" />
          <span className="text-[17px] text-[#949494]">
            온라인 전시 보러가기
          </span>
        </div>
      </div>
    </DimLayout>
  );
};

export default QrPage;
