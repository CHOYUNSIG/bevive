import { useId, type CSSProperties, type FC } from "react";

const ProgressiveStatusBar: FC<{
  currentStep: number;
  steps: string[];
  width?: number;
  lineColor?: CSSProperties["color"];
  anchorColor?: CSSProperties["color"];
}> = ({
  currentStep,
  width = 260,
  steps = ["호출 완료", "이동중", "도착 예정"],
  lineColor = "#FCFF81",
  anchorColor = "#F6FC00",
}) => {
  const id = useId();

  return (
    <div className="relative">
      <div
        className="absolute h-[1px] top-0 left-0 -translate-x-[50%]"
        style={{ width: width, backgroundColor: lineColor }}
      />
      {steps.map((step, index) => {
        return (
          <div
            key={`${id}-${index}`}
            className="absolute rounded-full bg-white w-[10px] h-[10px] top-0 -translate-y-[50%] -translate-x-[50%]"
            style={{
              left:
                ((width / 2) * ((index - (steps.length - 1) / 2) * 2)) /
                (steps.length - 1),
            }}
          >
            <div className="absolute top-[-25px] text-[#A9A9A9] text-[10px] font-medium w-[100px] -translate-x-[calc(50%-5px)] text-center">
              {step}
            </div>
          </div>
        );
      })}
      <div
        className="absolute rounded-full w-[12px] h-[12px] top-0 -translate-y-[50%] -translate-x-[50%] transition-all ease-in-out duration-[1.5s]"
        style={{
          backgroundColor: anchorColor,
          left:
            ((width / 2) * ((currentStep - (steps.length - 1) / 2) * 2)) /
            (steps.length - 1),
        }}
      />
    </div>
  );
};

export default ProgressiveStatusBar;
