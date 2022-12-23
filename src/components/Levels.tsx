import { TbShovel, TbTemperatureMinus, TbCloud } from "react-icons/tb";
import { FaTemperatureHigh, FaTemperatureLow, FaSun } from "react-icons/fa";
import { RiSunCloudyLine } from "react-icons/ri";
import { IoWaterOutline, IoWater } from "react-icons/io5";
import { levels } from "../interfaces/API";

export function Levels({ level, type }: levels) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="h-4 w-4 text-secondary-200 text-2xl">
        {iconTypes[type][level]}
      </span>
      <span className="capitalize text-xs font-bold">{level}</span>
    </div>
  );
}

const iconTypes = {
  temperature: {
    low: <TbTemperatureMinus />,
    medium: <FaTemperatureLow />,
    high: <FaTemperatureHigh />,
  },
  sun: {
    low: <TbCloud />,
    medium: <RiSunCloudyLine />,
    high: <FaSun />,
  },
  irrigation: {
    low: <IoWaterOutline />,
    medium: <IoWater />,
    high: <IoWater />,
  },
};
