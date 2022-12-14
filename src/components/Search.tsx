import { RiSearch2Line } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";

export default function Search(): JSX.Element {
  return (
    <form className="w-full max-w-[550px] h-12 justify-self-start">
      <input
        type="text"
        placeholder="Buscar planta"
        className="w-12 h-full rounded-lg bg-search-icon bg-[10px_10px] bg-no-repeat pl-12 focus:border-primary-200 focus:border-2 focus:w-full outline-none transition-[width] duration-[0.4s] ease-in-out"
      />
    </form>
  );
}
