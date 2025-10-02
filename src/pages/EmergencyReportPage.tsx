import { type FC, useEffect, useState } from "react";
import DimLayout from "@/layouts/DimLayout.tsx";
import useNavigationBar from "@/hooks/useNavigationBar.ts";
import BackdropModal from "@/components/BackdropModal";
import ProgressiveStatusBar from "@/components/ProgressiveStatusBar";
import { useNavigate } from "react-router";

const highlightedIndex = 2;

const EmergencyReportPage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>();
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (selectedButtonIndex === highlightedIndex) {
      const timeout = setTimeout(() => setIsCountdownStarted(true), 1000);
      return () => clearTimeout(timeout);
    }

    setIsCountdownStarted(false);
  }, [selectedButtonIndex]);

  useEffect(() => {
    if (!isCountdownStarted) {
      setCountdown(10);
      return;
    }

    const interval = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [isCountdownStarted]);

  useEffect(() => {
    setCurrentStep(Math.round(2 - (countdown * 2) / 10));
    if (countdown === 0) navigate("/qr");
  }, [countdown, navigate]);

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="flex flex-col justify-center items-center h-full w-full pb-[60px] gap-[50px]">
        <h1 className="font-['IDGrotesk'] font-normal text-[#FF4040] text-[36px]">
          Emergency Report
        </h1>
        <div className="flex flex-col gap-[12px] items-center">
          {[
            {
              korean: "미아발생 / 미아찾기",
              english: "Missing Child / Lost Child Report",
              icon: "/search.svg",
            },
            {
              korean: "화재 / 구조물 안전 이상신고",
              english: "Fire / Structural Safety Hazard Report",
              icon: "/fire.svg",
            },
            {
              korean: "안전 응급상황",
              english: "Medical Emergency",
              icon: "/health_kit.svg",
            },
            {
              korean: "기타사항 (위험 물품 발견, 폭행 등 질서 위한 행위)",
              english: "Other Issues",
              icon: "/warning_bubble.svg",
            },
          ].map(({ korean, english, icon }, index) => {
            const isSelected = index === selectedButtonIndex;

            return (
              <button
                className="bg-[#272727] rounded-[16px] transition-all duration-200 flex flex-row justify-between items-center px-[18px] border-[1px]"
                style={{
                  width: isSelected ? "700px" : "650px",
                  height: isSelected ? "73px" : "61px",
                  backgroundColor: isSelected ? "#FF5656" : "#272727",
                  borderColor:
                    index === highlightedIndex && !isSelected
                      ? "#878787"
                      : "transparent",
                }}
                onClick={() => setSelectedButtonIndex(index)}
              >
                <div className="flex flex-row gap-[20px] items-center">
                  <div
                    className="rounded-full transition-all duration-200 flex justify-center items-center"
                    style={{
                      width: isSelected ? "34px" : "30px",
                      height: isSelected ? "34px" : "30px",
                      backgroundColor: isSelected ? "white" : "#838383",
                    }}
                  >
                    <img
                      src="/check.svg"
                      alt="check"
                      className="transition-all duration-200 object-cover"
                      style={{
                        width: isSelected ? "20px" : "10px",
                        opacity: isSelected ? "1" : "0",
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
                      className="transition-all duration-200 whitespace-nowrap leading-[28px]"
                      style={{
                        fontSize: isSelected ? "24px" : "17px",
                        fontWeight: isSelected ? "800" : "400",
                        marginTop: isSelected ? "10px" : "0px",
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
                <div className="flex flex-row gap-[20px] items-center">
                  {index === highlightedIndex &&
                    (isSelected ? (
                      <span className="text-[10px] mt-[12px]">
                        <span className="font-semibold text-[10px] text-white">
                          긴급 의료 지원이 필요한 모든 상황(예: 의식 소실, 골절,
                          호흡 장애 등)을 신고할 수 있습니다.
                        </span>
                        <br />
                        <span className="font-semibold text-[9px] text-[#FFD4D4] tracking-[-0.5px]">
                          Use this option for all urgent medical needs (e.g.,
                          unconsciousness, fractures, breathing problems, etc.).
                        </span>
                      </span>
                    ) : (
                      <span className="text-[12px] text-[#C4C4C4] font-medium">
                        이 블럭을 눌러 상황을 알려보세요!
                      </span>
                    ))}
                  <img
                    src={icon}
                    alt={icon}
                    className="object-contain transition-all duration-200"
                    style={{
                      width: isSelected ? "44px" : "24px",
                      filter: isSelected ? "brightness(300%)" : undefined,
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
        <span className="text-[14px] text-[#797979] text-center">
          허위·장난 신고시 불이익(현장 퇴출, 법적 책임 등)이 발생할 수 있습니다.
          <br />
          원활하고 안전한 페스티벌 운영을 위해 협조 부탁드립니다.
        </span>
      </div>
      {isCountdownStarted && (
        <BackdropModal>
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <span className="font-medium text-[20px]">
              {countdown}초 뒤 현재 로봇의 위치로 스탭이 호출됩니다.
            </span>
            <div className="rounded-[18px] bg-[#272727] border-[#787878] border-[1.6px] w-[600px] p-[12px] flex flex-col items-center">
              <div className="w-full bg-[#FF5656] rounded-[15px] flex flex-row justify-between items-center">
                <div className="px-[22px] py-[15px] flex flex-row items-center gap-[18px]">
                  <div className="rounded-full bg-white transition-all duration-200 flex justify-center items-center w-[31px] h-[31px]">
                    <img
                      src="/check.svg"
                      alt="check"
                      className="transition-all duration-200 object-cover w-[17px] pr-[1px] pt-[1px]"
                    />
                  </div>
                  <span className="font-extrabold text-[24px]">
                    안전 응급상황
                  </span>
                </div>
                <div className="font-['Pirulen'] px-[15px] flex flex-row gap-1 items-baseline">
                  <span className="text-[44px]">{countdown}</span>
                  <span className="text-[18px]">s</span>
                </div>
              </div>
              <span className="mt-[20px] text-[13px] font-semibold text-[#F0F0F0]">
                긴급 의료 지원이 필요한 모든 상황 (예: 의식 소실, 골절, 호흡
                장애 등)을 신고할 수 있습니다.
              </span>
              <div className="mt-[40px] h-[50px] flex flex-col justify-center scale-[1.5]">
                <ProgressiveStatusBar
                  width={280}
                  steps={["좌표 전송", "이동중", "도착 예정"]}
                  currentStep={currentStep}
                  lineColor="#FF5656"
                  anchorColor="#FF5656"
                />
              </div>
              <button
                className="mt-[8px] bg-[#505050] rounded-[6px] w-[160px] h-[44.5px] flex flex-row justify-center items-center gap-[12px] transition-all"
                onClick={() => setSelectedButtonIndex(undefined)}
              >
                <i className="bg-no-repeat bg-[url('/x.png')] bg-contain bg-center w-[20px] h-[20px]" />
                <span className="text-[17px] font-medium">호출 취소</span>
              </button>
            </div>
          </div>
        </BackdropModal>
      )}
    </DimLayout>
  );
};

export default EmergencyReportPage;
