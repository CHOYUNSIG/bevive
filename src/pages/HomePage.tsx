import Carousel from "@/components/Carousel";
import DimLayout from "@/layouts/DimLayout";
import { useCallback, useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";
import useNavigationBar from "@/hooks/useNavigationBar.ts";
import useIdle from "@/hooks/useIdle";

const buttons = [
  {
    image: "/home_pin.svg",
    title: "Map",
    description: "페스티벌의 길을 쉽게 찾을 수 있어요!",
    destination: "/map",
  },
  {
    image: "/home_mist.svg",
    title: "Cooling Mist",
    description: "시원한 쿨링미스트로 열기를 식힐 수 있어요!",
    destination: "/cooling-mist",
  },
  {
    image: "/home_camera.svg",
    title: "Photo with YUPYUP!",
    description: "YupYup과 기념 사진을 찍어보세요!",
    destination: "/photo-with-yupyup",
  },
];

const HomePage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  const [currentPointer, setCurrentPointer] = useState<{
    x: number;
    y: number;
  }>();

  const [index, setIndex] = useState<number>();
  const isIdle = useIdle({ timeout: 10 * 1000 });

  const onButtonClicked = useCallback(
    (i: number) => {
      setIndex(i);
      navigate(buttons[i].destination);
    },
    [navigate]
  );

  useEffect(() => {
    const onPointerCaptured = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setCurrentPointer({ x, y });
    };

    const onPointerUp = () => {
      setCurrentPointer(undefined);
    };

    document.addEventListener("pointerenter", onPointerCaptured);
    document.addEventListener("pointermove", onPointerCaptured);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerUp);

    return () => {
      document.addEventListener("pointerenter", onPointerCaptured);
      document.removeEventListener("pointermove", onPointerCaptured);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  useEffect(() => {
    if (isIdle) navigate(-1);
  }, [isIdle, navigate]);

  useEffect(() => {
    if (!currentPointer) {
      if (index !== undefined) {
        onButtonClicked(index);
      } else {
        setIndex(undefined);
      }

      return;
    }

    let isIncluded = false;
    for (let i = 0; i < buttons.length; i++) {
      const button = document.getElementById(`button-${i}`);
      if (!button) continue;

      const rect = button.getBoundingClientRect();
      if (
        rect.left <= currentPointer.x &&
        currentPointer.x <= rect.right &&
        rect.top <= currentPointer.y &&
        currentPointer.y <= rect.bottom
      ) {
        setIndex(i);
        isIncluded = true;
      }
    }

    if (!isIncluded) {
      setIndex(undefined);
    }
  }, [currentPointer, index, onButtonClicked]);

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="flex flex-row h-full">
        <div className="h-full flex-1 flex flex-col justify-center items-center pb-[60px]">
          <Carousel images={["/image1.png", "/image2.png", "/image3.png"]} />
        </div>
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10 pr-[40px]">
            <h1 className="font-['IDGrotesk'] font-medium text-[36px] text-[#F6FC00]">
              Festival Menu
            </h1>
            <div className="flex flex-col gap-[20px]">
              {buttons.map(({ image, title, description }, i) => {
                return (
                  <button
                    key={`button-${i}`}
                    id={`button-${i}`}
                    className="group bg-[#272727] text-[#D9D9D9] rounded-[20px] w-[400px] flex flex-row gap-[12.52px] items-center transition-[color_opacity] duration-300"
                    onClick={() => onButtonClicked(i)}
                    style={{
                      backgroundColor: index === i ? "#F6FC00" : undefined,
                      color: index === i ? "black" : undefined,
                    }}
                  >
                    <img
                      className="w-[40.3px] mx-[30px] my-[24px] transition-all duration-300"
                      src={image}
                      alt={`button-${i}`}
                      style={{
                        filter:
                          index === i
                            ? "brightness(0%) saturate(0%)"
                            : undefined,
                      }}
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-[24px] font-['AlteHaasGrotesk'] font-se leading-[36px]">
                        {title}
                      </p>
                      <p className="text-[12px] font-light">{description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DimLayout>
  );
};

export default HomePage;
