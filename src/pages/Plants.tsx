import { CardPlant } from "../components/CardPlant";
import { ListPlants } from "../container/ListPlants";
import { useSearch } from "../hooks/useSearch";
import { DataApi } from "../interfaces/types";
import { Levels } from "../components/Levels";
import { levels } from "../interfaces/types";
import { Outlet } from "react-router-dom";

export default function Plants(): JSX.Element {
  const { state } = useSearch();
  const { plantFound } = state;
  return (
    <main>
      <Outlet />
      <ListPlants plantFound={plantFound}>
        {(plant: DataApi) => (
          <CardPlant
            key={plant.name}
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
