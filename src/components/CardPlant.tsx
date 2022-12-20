import { MdOutlineBookmarkAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { levels } from "../interfaces/types";

interface Props {
  namePlant: string;
  care: string;
  urlImage: string;
  uso: string;
  levels: levels[];
  renderLevels: any;
}

export function CardPlant({
  namePlant,
  care,
  urlImage,
  uso,
  renderLevels,
  levels,
}: Props) {
  return (
    <div className="w-[300px] bg-white rounded-lg border border-primary-200">
      <Link to={`${namePlant}`}>
        <section className="flex items-center gap-2 px-4 py-3">
          <div className=" flex justify-center items-center w-9 h-9 bg-secondary-200 rounded-full">
            <div className="w-7 h-7 bg-primary-50 rounded-full"></div>
          </div>
          <div>
            <h3>{namePlant}</h3>
            <p className="font-light text-xs leading-[0.5] capitalize">
              Nivel {care}
            </p>
          </div>
        </section>
      </Link>
      <figure className="w-full h-[180px]">
        <img src={urlImage} alt="" className="w-full h-full object-cover" />
      </figure>
      <footer className="mx-4 pb-2">
        <header className="flex justify-between items-center mt-4">
          <div className="grid grid-cols-[repeat(3,56px)]">
            {levels
              .filter((item) => item.type != "care")
              .map((item) => renderLevels(item.level, item.type))}
          </div>
          <button onClick={() => console.log("añadir a jardin")}>
            <MdOutlineBookmarkAdd className="w-6 h-6 mb-4 text-secondary-200" />
          </button>
        </header>
        <p
          className="font-light text-sm mb-4 mt-4
        "
        >
          <strong className="font-semibold">{namePlant}</strong> {uso}
        </p>
      </footer>
    </div>
  );
}
