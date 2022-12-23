import { FormEvent } from "react";

export function LogoutPage(): JSX.Element {
  const logout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("salir");
  };
  return (
    <div className="pt-[100px] w-full bg-primary-50">
      <h1>Login</h1>
      <form onSubmit={logout}>
        <label>¿Segura de que quieres salir?</label>
        <button type="submit">Salir</button>
      </form>
    </div>
  );
}
