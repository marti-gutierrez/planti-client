import { DataApi } from "../interfaces/types";

interface Props {
  plantFound: DataApi[];
  children: any;
}

export function ListPlants({ plantFound, children }: Props): JSX.Element {
  const renderFunc = children;
  return (
    <div className="w-full px-4 lg:px-[200px] pt-8">
      <h2 className="font-light text-2xl mb-5">Plantas de Interior</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,300px)] gap-4 place-content-center w-full overflow-hidden">
        {plantFound.map(renderFunc)}
      </ul>
    </div>
  );
}
