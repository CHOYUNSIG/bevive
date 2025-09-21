import { type FC, useState } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const EmergencyReportPage: FC = () => {
  const navigationBar = useNavigationBar();
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>();

  return <DimLayout navigationBar={navigationBar}>
    <div className="flex flex-col justify-center items-center h-full w-full pb-[60px] gap-[50px]">
      <h1 className="font-['IDGrotesk'] font-normal text-[#FF4040] text-[36px]">Emergency Report</h1>
      <div className="flex flex-col gap-[10px] items-center">
        {
          [
            {
              korean: "미아발생 / 미아찾기",
              english: "Missing Child / Lost Child Report",
              icon: "/search.svg"
            },
            {
              korean: "화재 / 구조물 안전 이상신고",
              english: "Fire / Structural Safety Hazard Report",
              icon: "/fire.svg"
            },
            {
              korean: "안전 응급상황",
              english: "Medical Emergency",
              icon: "/health_kit.svg"
            },
            {
              korean: "기타사항 (위험 물품 발견, 폭행 등 질서 위한 행위)",
              english: "Other Issues",
              icon: "/warning_bubble.svg"
            },
          ].map(({ korean, english, icon }, index) => {
            const isSelected = index === selectedButtonIndex;

            return <button
              className="bg-[#272727] rounded-[16px] transition-all duration-200 flex flex-row justify-between items-center px-[15px]"
              style={{
                width: isSelected ? "700px" : "650px",
                height: isSelected ? "73px" : "60px",
                backgroundColor: isSelected ? "#FF5656" : "#272727",
              }}
              onClick={() => setSelectedButtonIndex(index)}
            >
              <div className="flex flex-row gap-[20px] items-center">
                <div
                  className="rounded-full transition-all duration-200 flex justify-center items-center"
                  style={{
                    width: isSelected ? "34px" : "30px",
                    height: isSelected ? "34px" : "30px",
                    backgroundColor: isSelected ? "white" : "#838383"
                  }}
                >
                  <img
                    src="/check.svg"
                    alt="check"
                    className="transition-all duration-200 object-cover"
                    style={{
                      width: isSelected ? "20px" : "10px",
                      opacity: isSelected ? "1" : "0"
                    }}
                  />
                </div>
                <div
                  className="flex flex-col"
                  style={{
                    gap: isSelected ? "0px" : "20px",
                    flexDirection: isSelected ? "column" : "row",
                  }}
                >
                  <h2
                    className="transition-all duration-200"
                    style={{
                      fontSize: isSelected ? "24px" : "17px",
                      fontWeight: isSelected ? "800" : "400",
                    }}
                  >
                    {korean}
                  </h2>
                  <h2
                    className="font-normal"
                    style={{
                      color: isSelected ? "white" : "#A3A3A3",
                      fontSize: isSelected ? "12px" : "17px",
                    }}
                  >
                    {english}
                  </h2>
                </div>
              </div>
              <img
                src={icon}
                alt={icon}
                className="object-contain transition-all duration-200"
                style={{
                  width: isSelected ? "44px" : "24px",
                  filter: isSelected ? "brightness(300%)" : undefined,
              }}
              />
            </button>
          })
        }
      </div>
      <span className="text-[14px] text-[#797979] text-center">
        허위·장난 신고시 불이익(현장 퇴출, 법적 책임 등)이 발생할 수 있습니다.<br/>원활하고 안전한 페스티벌 운영을 위해 협조 부탁드립니다.
      </span>
    </div>
  </DimLayout>
}

export default EmergencyReportPage;