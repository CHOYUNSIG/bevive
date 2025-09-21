import type { FC } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import { useNavigate } from "react-router";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const PhotoWithYupYupPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  return <DimLayout navigationBar={navigationBar}>
    <div className="w-full h-full flex flex-col justify-center items-center gap-[60px]">
      <div className="flex flex-col items-center gap-[20px] text-center">
        <div className="flex flex-row gap-[20px] text-[#F6FC00] font-medium font-['IDGrotesk'] items-baseline">
          <h1 className="text-[30px]">Photo with</h1>
          <span className="text-[48px]">YUPYUP!</span>
        </div>
        <span className="text-white font-medium text-[16px]">드론(YUPYUP)을 통해<br/>멋진 항공 사진을 남겨보세요!</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-row gap-[50px]">
          <button
            className="bg-[#272727] rounded-[6px] w-[160px] hover:scale-105 h-[44.5px] flex flex-row justify-center items-center gap-[12px] transition-all"
            onClick={() => navigate(-1)}
          >
            <i className="bg-no-repeat bg-[url('/x.png')] bg-contain bg-center w-[20px] h-[20px]"/>
            <span className="text-[17px] font-medium">취소하기</span>
          </button>
          <button
            className="bg-[#F6FC00] rounded-[6px] w-[160px] hover:scale-105 h-[44.5px] flex flex-row justify-center items-center gap-[12px] transition-all"
            onClick={() => { /* ignore */ }}
          >
            <i className="bg-no-repeat bg-[url('/check.png')] bg-contain bg-center w-[20px] h-[20px]"/>
            <span className="text-[17px] font-medium text-[#020103]">실행하기</span>
          </button>
        </div>
      </div>
    </div>
  </DimLayout>;
}

export default PhotoWithYupYupPage;