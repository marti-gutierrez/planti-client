import { FormEvent, useState } from "react";
import imagen from "../assets/login.svg";

export function LoginPage(): JSX.Element {
  const [userName, setUserName] = useState<string>("");
  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("entrando");
  };
  return (
    <section className="grid grid-rows-[max-content_1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-[repeat(8,1fr)] pt-[65px] min-h-[600px] h-screen bg-white">
      <figure className="relative flex items-center md:col-start-5 col-start-1 col-end-[-1] row-start-1 row-end-2 md:row-end-[-1] before:block before:w-full before:h-full before:absolute before:bg-primary-200 before:top-0 before:left-0 md:before:clip-path-myPolygon before:clip-path-polygonPhone">
        <img src={imagen} alt="" className="z-20 w-11/12 min-w-lg" />
      </figure>
      <form
        onSubmit={login}
        className="grid auto-rows-max gap-8 col-start-1 col-end-[-1] md:col-end-5 row-start-2 md:row-start-1 row-end-3 md:row-end-[-1] place-self-center md:w-4/6 w-11/12 py-10"
      >
        <h2 className="text-5xl text-secondary-200 after:block after:w-[80px] after:h-1 after:bg-primary-200 after:mt-5">
          Login
        </h2>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="ingresa tu nombre"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="px-2 py-5 w-full outline-none border border-secondary-200 rounded-sm focus:border-4 focus:border-info"
        />
        <input
          type="email"
          placeholder="ingresa ti email"
          className="px-2 py-5 w-full outline-none border border-secondary-200 rounded-sm focus:border-4 focus:border-info"
        />
        <button
          type="submit"
          className="block w-[200px] bg-secondary-200 text-white py-5 outline-none border-none rounded-md font-semibold shadow-lg hover:bg-primary-200"
        >
          Enviar ahora
        </button>
      </form>
    </section>
  );
}
