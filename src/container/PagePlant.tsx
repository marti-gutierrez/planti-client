import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useContext } from "react";
import { PlantsContext } from "../context/search/PlantState";

export function PagePlant() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { plants } = useContext(PlantsContext);
  const pagePlant = plants.find((plant) => plant.id === slug);

  const returnToPlans = () => navigate(-1);

  return (
    <div className="fixed grid place-content-center w-full px-4 h-screen bg-secondary-50">
      <main className="w-full max-w-[400px] h-max bg-white rounded-lg p-4">
        <div className="flex items-center gap-6 mb-5 border-b-2">
          <button
            className="flex items-center justify-center w-12 h-12"
            onClick={returnToPlans}
          >
            <HiOutlineArrowNarrowLeft className="w-8 h-8 text-3xl" />
          </button>
          <h4>{pagePlant?.nameLarge}</h4>
        </div>
        <div className="flex items-center gap-5 my-4">
          <figure className="w-16 h-16">
            <img
              src={pagePlant?.urlImage}
              alt={`imagen de plante ${pagePlant?.name}`}
              className="rounded-full"
            />
          </figure>
          <div>
            <h5 className="font-light">{pagePlant?.provenance}</h5>
            <h5 className="font-bold">Origen</h5>
          </div>
        </div>
        <h3>{pagePlant?.name}</h3>
        <h6 className="text-sm font-thin">Planta de interior</h6>
        <p className="mt-4">{pagePlant?.description}</p>
      </main>
    </div>
  );
}
