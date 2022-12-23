import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../../plantiData.json";
import { DataApi } from "../../interfaces/API";

type PlantsContexProviderProps = {
  children: React.ReactNode;
};
type Reducer<State, Action> = (state: State, action: Action) => State;

type State = {
  value: string;
  plants: DataApi[];
  selectedPlant: DataApi | null;
};

const initialState: State = {
  value: "",
  plants: [],
  selectedPlant: null,
};

enum ActionKind {
  get_plants = "GET_PLANTS",
  get_profile = "GET_PROFILE",
  on_write = "ON_WRITE",
}
type ActionPayload = DataApi[] | DataApi | string;

type Action = {
  type: ActionKind;
  payload: ActionPayload;
};

const reducerObject = (state: State, payload: ActionPayload) => ({
  [ActionKind.get_plants]: {
    ...state,
    plants: payload,
  },
  [ActionKind.get_profile]: {
    ...state,
    selectedPlant: payload,
  },
  [ActionKind.on_write]: {
    ...state,
    value: payload,
  },
});

const plantsReducer = (state: State, action: Action): State =>
  reducerObject(state, action.payload)[action.type] || state;

export const PlantsContext = createContext();
export const PlantsContextProvider = ({
  children,
}: PlantsContexProviderProps) => {
  const [state, dispatch] = useReducer(plantsReducer, initialState);
  const onFilterName = () => {
    const searchPlants = state.plants.filter((plant) => {
      const plantaGet = plant.name.toLowerCase();
      const searchPlant = state.value.toLowerCase();
      return plantaGet.includes(searchPlant);
    });
    dispatch({ type: ActionKind.get_plants, payload: searchPlants });
  };
  const getPlants = () =>
    dispatch({ type: ActionKind.get_plants, payload: data });
  const getProfile = (id: string) => {
    const profile = state.plants.find((plant) => plant.id === id);
    dispatch({ type: ActionKind.get_profile, payload: profile });
  };
  const onWrite = (text: string) =>
    dispatch({ type: ActionKind.on_write, payload: text });
  useEffect(() => {
    state.value.length > 1 ? onFilterName() : getPlants();
  }, [state.value]);
  return (
    <PlantsContext.Provider
      value={{
        getPlants,
        getProfile,
        onWrite,
        plants: state.plants,
        selectedPlant: state.selectedPlant,
        value: state.value,
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};
