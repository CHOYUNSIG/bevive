import Carousel from "@/components/Carousel";
import DimLayout from "@/layouts/DimLayout";
import type { FC } from "react";
import { useNavigate } from "react-router";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const navigationBar = useNavigationBar();

  return (
    <DimLayout navigationBar={navigationBar}>
      <div className="flex flex-row h-full">
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <Carousel images={["/image1.png", "/image2.png", "/image3.png"]} />
        </div>
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-10">
            <h1 className="font-['IDGrotesk'] font-medium text-[36px] text-[#F6FC00]">
              Festival Menu
            </h1>
            <div className="flex flex-col gap-[20px]">
              {[
                {
                  image: "/home_pin.svg",
                  title: "Map",
                  description: "페스티벌의 길을 쉽게 찾을 수 있어요!",
                  onClick: () => navigate("/map"),
                },
                {
                  image: "/home_mist.svg",
                  title: "Cooling Mist",
                  description: "시원한 쿨링미스트로 열기를 식힐 수 있어요!",
                  onClick: () => navigate("/cooling-mist"),
                },
                {
                  image: "/home_camera.svg",
                  title: "Photo with YUPYUP!",
                  description:
                    "YupYup과 기념 사진을 찍어보세요!",
                  onClick: () => navigate("/photo-with-yupyup"),
                },
              ].map(({ image, title, description, onClick }, i) => {
                return (
                  <div
                    key={`button-${i}`}
                    className="group bg-[#272727] text-[#D9D9D9] hover:bg-[#F6FC00] hover:text-black hover:opacity-100 rounded-[20px] w-[400px] flex flex-row gap-[12.52px] items-center transition-[color_opacity] duration-300"
                    onClick={onClick}
                  >
                    <img
                      className="w-[40.3px] mx-[30px] my-[24px] group-hover:filter-[brightness(0%)_saturate(0%)] transition-all duration-300"
                      src={image}
                      alt={`button-${i}`}
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
