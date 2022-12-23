import plantiData from "../plantiData.json";
import { useState } from "react";
import { DataApi } from "../interfaces/API";

export function useSearch() {
  const dataPlanti: DataApi[] = plantiData;
  const [searchState, setSearchState] = useState<string>("");
  let plantFound: DataApi[] = [];
  plantFound = !(searchState.length >= 1)
    ? dataPlanti
    : dataPlanti.filter((plant) => {
        const plantData = plant.name.toLowerCase();
        const searchText: string = searchState.toLowerCase();
        return plantData.includes(searchText);
      });
  const state = {
    searchState,
    plantFound,
  };
  const stateUpdaters = { setSearchState };
  return { state, stateUpdaters };
}
