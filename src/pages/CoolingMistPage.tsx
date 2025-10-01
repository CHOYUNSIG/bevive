import type { FC } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import { useNavigate } from "react-router";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const CoolingMistPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  return (
    <DimLayout
      background={
        <div className="w-full h-full bg-[url('/background-cooling-mist.png')] bg-no-repeat bg-center bg-cover" />
      }
      navigationBar={navigationBar}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-[60px]">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <img src="/dupdup.svg" alt="dupdup" className="w-[85px]" />
          <h1 className="text-[#F6FC00] text-[36px] font-medium font-['IDGrotesk']">
            Cooling Mist
          </h1>
          <span className="text-white font-medium text-[16px]">
            쿨링미스트 기능을 실행하시겠습니까?
            <br />
            미스트를 통해 시원한 페스티벌을 즐겨보세요.
          </span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-row gap-[50px]">
            <button
              className="bg-[#272727] rounded-[6px] w-[160px] h-[44.5px] flex flex-row justify-center items-center gap-[12px] transition-all"
              onClick={() => navigate(-1)}
            >
              <i className="bg-no-repeat bg-[url('/x.png')] bg-contain bg-center w-[20px] h-[20px]" />
              <span className="text-[17px] font-medium">취소하기</span>
            </button>
            <button
              className="group bg-[linear-gradient(#272727,#272727),linear-gradient(to_right,#F6FC00,#5AC200)] hover:bg-[linear-gradient(#F6FC00,#F6FC00),linear-gradient(to_right,#F6FC00,#5AC200)] rounded-[6px] w-[160px] h-[44.5px] flex flex-row justify-center items-center gap-[12px] transition-all duration-200"
              style={{
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
                border: "1px solid transparent",
              }}
              onClick={() =>
                navigate("/cooling-mist/working", { replace: true })
              }
            >
              <i className="bg-no-repeat bg-[url('/check.png')] bg-contain bg-center w-[20px] h-[20px]" />
              <span className="text-[17px] font-medium text-white group-hover:text-[#020103]">
                실행하기
              </span>
            </button>
          </div>
          <span className="text-[#BEBEBE] text-[14px] font-medium">
            ⁘ 분사시 주변 사용자를 확인하고 안전에 유의해주세요.
          </span>
        </div>
      </div>
    </DimLayout>
  );
};

export default CoolingMistPage;
