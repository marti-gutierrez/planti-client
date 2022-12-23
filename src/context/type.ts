import { DataApi } from "../interfaces/API";

export enum actionTypesPlants {
  get_plants = "GET_PLANTS",
  plant_search = "PLANT_SEARCH",
  get_profile = "GET_PROFILE",
}

export type actionPayloadPlant = DataApi[] | DataApi;

export type actionPlants = {
  type: actionTypesPlants;
  payload: actionPayloadPlant;
};

export type statePlants = {
  plants: DataApi[];
  selectedPlant: DataApi | null;
};
