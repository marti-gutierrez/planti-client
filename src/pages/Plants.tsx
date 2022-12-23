import { CardPlant } from "../components/CardPlant";
import { ListPlants } from "../container/ListPlants";
import { DataApi } from "../interfaces/API";
import { Levels } from "../components/Levels";
import { levels } from "../interfaces/API";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlantsContext } from "../context/search/PlantState";
import Data from "../plantiData.json";

export default function Plants(): JSX.Element {
  const { getPlants, plants } = useContext(PlantsContext);
  useEffect(() => {
    getPlants();
  }, []);
  return (
    <main>
      <Outlet />
      <ListPlants plantFound={plants}>
        {(plant: DataApi) => (
          <CardPlant
            key={plant.name}
            id={plant.id}
            namePlant={plant.name}
            care={plant.levels[0].level}
            urlImage={plant.urlImage}
            uso={plant.uso}
            levels={plant.levels}
            renderLevels={(level: levels["level"], type: levels["type"]) => (
              <Levels level={level} type={type} key={`${level}-${type}`} />
            )}
          />
        )}
      </ListPlants>
    </main>
  );
}
