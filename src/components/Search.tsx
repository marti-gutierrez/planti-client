import { ChangeEvent, useContext } from "react";
import { FiFilter } from "react-icons/fi";
import { PlantsContext } from "../context/search/PlantState";

type HandleInputChange = ChangeEvent<HTMLInputElement>;

export default function Search(): JSX.Element {
  const { value, onWrite } = useContext(PlantsContext);
  const handleChange = ({ target }: HandleInputChange) => onWrite(target.value);
  return (
    <form className="w-full max-w-[550px] h-12 justify-self-start">
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Buscar planta"
        className="w-12 h-full rounded-lg bg-search-icon bg-[10px_10px] bg-no-repeat pl-12 focus:border-primary-200 focus:border-2 focus:w-full outline-none transition-[width] duration-[0.4s] ease-in-out"
      />
    </form>
  );
}
