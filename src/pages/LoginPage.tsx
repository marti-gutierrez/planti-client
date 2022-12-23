import { FormEvent, useState } from "react";

export function LoginPage(): JSX.Element {
  const [userName, setUserName] = useState<string>("");
  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("entrando");
  };
  return (
    <div className="pt-[100px] w-full bg-primary-50">
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
