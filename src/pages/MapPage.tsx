import DimLayout from "@/layouts/DimLayout";
import { type FC, useState } from "react";
import useNavigationBar from "@/hooks/useNavigationBar.ts";

const mapOptions: {
  name: string;
}[] = [
  { name: "화장실" },
  { name: "물품보관함" },
  { name: "F&B" },
  { name: "안내소" },
  { name: "메인 무대" },
  { name: "셔틀 승하차" },
  { name: "흡연부스" },
  { name: "굿즈부스" },
  { name: "응급실" },
  { name: "게이트" },
  { name: "입장 대기줄" },
];

const MapPage: FC = () => {
  const navigationBar = useNavigationBar();
  const [searchWord, setSearchWord] = useState("");

  return (
    <DimLayout
      background={
        <div className="w-full h-full bg-[#161616]">
          <div className="w-[308.62px] h-full bg-black"/>
        </div>
      }
      navigationBar={navigationBar}
    >
      <div className="w-full h-full flex flex-row">
        <div className="w-[308.62px] h-full flex flex-col justify-center items-center gap-[50px]">
          <div className="w-full flex flex-col gap-2 items-center">
            <span className="font-['IDGrotesk'] text-[#F6FC00] text-[36px] font-normal leading-[60px]">
              Festival Map
            </span>
            <div className="w-[246px] h-[38.4px] rounded-full bg-[#4B4B4B] flex flex-row gap-2 items-center px-2">
              <div className="px-2">
                <input
                  type="text"
                  className="w-full"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                />
              </div>
              <img src="/search.png" className="w-[22.3px] h-[22.3px]" alt="search"/>
            </div>
          </div>
          <div className="w-full px-[30px] flex flex-col gap-[20px]">
            <span className="text-[#C4C4C4] text-[16px]">주요 카테고리</span>
            <div className="group max-w-full flex flex-row flex-wrap gap-[6.5px]">
              {mapOptions.map(({ name }) => {
                return <button
                  key={`button-${name}`}
                  className="peer rounded-full text-[12px] font-medium h-[24.5px] flex justify-center items-center px-[22px] transition-all duration-200"
                  onClick={() => setSearchWord(name)}
                  style={{
                    color: searchWord === name ? "black" : "#AEAEAE",
                    backgroundColor: searchWord === name ? "#F6FC00" : "#272727",
                  }}
                >
                  {name}
                </button>;
              })}
            </div>
          </div>
        </div>
        <div className="flex-1 p-20 h-full flex flex-col justify-center">
          <img src="/map.png" alt="map" className="w-full h-full object-contain"/>
        </div>
      </div>
    </DimLayout>
  );
};

export default MapPage;