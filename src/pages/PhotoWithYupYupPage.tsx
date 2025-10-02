import type { FC } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import { useNavigate } from "react-router";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const PhotoWithYupYupPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  return (
    <DimLayout
      background={
        <div className="w-full h-full bg-[url('/background-photo.png')] bg-cover bg-no-repeat bg-center"></div>
      }
      navigationBar={navigationBar}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-[60px]">
        <div className="flex flex-col items-center gap-[45px] text-center">
          <div className="flex flex-col gap-[15px] text-[#F6FC00] font-medium font-['IDGrotesk'] items-center">
            <h1 className="text-[15px]">Photo with</h1>
            <img src="/yupyup.svg" alt="yupyup" className="w-[160px]" />
          </div>
          <span className="text-white font-medium text-[16px]">
            드론(YUPYUP)을 통해 멋진 항공 사진을 남겨보세요!
          </span>
        </div>
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
              navigate("/photo-with-yupyup/working", { replace: true })
            }
          >
            <i className="bg-no-repeat bg-[url('/check.png')] bg-contain bg-center w-[20px] h-[20px]" />
            <span className="text-[17px] font-medium text-white group-hover:text-[#020103]">
              실행하기
            </span>
          </button>
        </div>
      </div>
    </DimLayout>
  );
};

export default PhotoWithYupYupPage;
