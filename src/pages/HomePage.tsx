import Carousel from "@/components/Carousel";
import DimLayout from "@/layouts/DimLayout";
import { useEffect, useState, type FC } from "react";
import { useNavigate } from "react-router";
import useNavigationBar from "@/hooks/useNavigationBar.ts";
import useIdle from "@/hooks/useIdle";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  const [index, setIndex] = useState<number>();
  const isIdle = useIdle({ timeout: 10 * 1000 });

  useEffect(() => {
    if (isIdle) navigate(-1);
  }, [isIdle, navigate]);

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="flex flex-row h-full">
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <Carousel images={["/image1.png", "/image2.png", "/image3.png"]} />
        </div>
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10 pr-[40px]">
            <h1 className="font-['IDGrotesk'] font-medium text-[36px] text-[#F6FC00]">
              Festival Menu
            </h1>
            <div className="flex flex-col gap-[20px]">
              {[
                {
                  image: "/home_pin.svg",
                  title: "Map",
                  description: "페스티벌의 길을 쉽게 찾을 수 있어요!",
                  onClick: () => {
                    if (index !== undefined) return;
                    setIndex(0);
                    setTimeout(() => navigate("/map"), 300);
                  },
                },
                {
                  image: "/home_mist.svg",
                  title: "Cooling Mist",
                  description: "시원한 쿨링미스트로 열기를 식힐 수 있어요!",
                  onClick: () => {
                    if (index !== undefined) return;
                    setIndex(1);
                    setTimeout(() => navigate("/cooling-mist"), 300);
                  },
                },
                {
                  image: "/home_camera.svg",
                  title: "Photo with YUPYUP!",
                  description: "YupYup과 기념 사진을 찍어보세요!",
                  onClick: () => {
                    if (index !== undefined) return;
                    setIndex(2);
                    setTimeout(() => navigate("/photo-with-yupyup"), 300);
                  },
                },
              ].map(({ image, title, description, onClick }, i) => {
                return (
                  <div
                    key={`button-${i}`}
                    className="group bg-[#272727] text-[#D9D9D9] active:bg-[#F6FC00] active:text-black rounded-[20px] w-[400px] flex flex-row gap-[12.52px] items-center transition-[color_opacity] duration-300"
                    onClick={onClick}
                    style={{
                      backgroundColor: index === i ? "#F6FC00" : undefined,
                      color: index === i ? "black" : undefined,
                    }}
                  >
                    <img
                      className="w-[40.3px] mx-[30px] my-[24px] group-active:filter-[brightness(0%)_saturate(0%)] transition-all duration-300"
                      src={image}
                      alt={`button-${i}`}
                      style={{
                        filter:
                          index === i
                            ? "brightness(0%) saturate(0%)"
                            : undefined,
                      }}
                    />
                    <div>
                      <p className="text-[24px] font-['AlteHaasGrotesk'] font-se leading-[36px]">
                        {title}
                      </p>
                      <p className="text-[12px] font-light">{description}</p>
                    </div>
                  </div>
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
