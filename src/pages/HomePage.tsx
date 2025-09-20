import Carousel from "@/components/Carousel";
import DimLayout from "@/layouts/DimLayout";
import type { FC } from "react";
import { useNavigate } from "react-router";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <DimLayout navigationBar={{onHomeButtonClicked: () => navigate("/home")}}>
      <div className="flex flex-row h-full">
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <Carousel images={["/image1.png", "/image2.png", "/image3.png"]}/>
        </div>
        <div className="h-full flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[20px] group">
            {[
              {
                image: "/home-button1.png",
                title: "Map",
                description: "페스티벌의 길을 한눈에 찾을 수 있습니다.",
                onClick: () => navigate("/map"),
              },
              {
                image: "/home-button2.png",
                title: "Cooling Mist",
                description: "쿨링미스트로 열기를 잠깐 식힐 수 있습니다.",
                onClick: () => navigate("/cooling-mist"),
              },
              {
                image: "/home-button3.png",
                title: "Photo with YUPYUP!",
                description:
                  "욥욥과 페스티벌 안에서 기념 사진을 찍을 수 있습니다.",
                onClick: () => navigate("/photo-with-yupyup"),
              },
            ].map(({image, title, description, onClick}, i) => {
              return (
                <div
                  key={`button-${i}`}
                  className="peer bg-[#272727] text-[#D9D9D9] hover:bg-[#F6FC00] group-hover:opacity-50 hover:text-black hover:opacity-100 rounded-[20px] px-[14.62px] py-[13.3px] w-[370.62px] flex flex-row gap-[12.52px] items-end transition-[color_opacity] duration-300"
                  onClick={onClick}
                >
                  <img className="w-[107.7px]" src={image} alt={`button-${i}`}/>
                  <div>
                    <p className="text-[20px] font-['AlteHaasGrotesk'] leading-[40px]">
                      {title}
                    </p>
                    <p className="text-[10px] font-light">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DimLayout>
  );
};

export default HomePage;
