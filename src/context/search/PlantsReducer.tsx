import {
  actionPlants,
  actionPayloadPlant,
  actionTypesPlants,
  statePlants,
} from "../type";

const reducerObject = (state: statePlants, payload: actionPayloadPlant) => ({
  [actionTypesPlants.get_plants]: {
    ...state,
    plants: payload,
  },
  [actionTypesPlants.get_profile]: {
    ...state,
    selectedPlant: payload,
  },
  [actionTypesPlants.plant_search]: {
    ...state,
    plants: payload,
  },
});

export const plantsReducer = (state: statePlants, action: actionPlants) =>
  reducerObject(state, action.payload)[action.type] || state;
