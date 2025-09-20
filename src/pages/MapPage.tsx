import DimLayout from "@/layouts/DimLayout";
import type { FC } from "react";
import { useNavigate } from "react-router";

const MapPage: FC = () => {
  const navigate = useNavigate();

  return (
    <DimLayout
      background={"#161616"}
      navigationBar={{onHomeButtonClicked: () => navigate("/home")}}
    >
      <div className="w-full h-full flex flex-row justify-center items-center">
        <div
          className="bg-black w-[308.62px] h-full"
        >

        </div>
        <div>
          <img src="/map.png" className="w-full" alt="map"/>
        </div>
      </div>
    </DimLayout>
  );
};

export default MapPage;