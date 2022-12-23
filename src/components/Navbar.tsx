import { NavLink } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <>
      {routes.map((route) => (
        <li key={route.to} className="text-lg lg:text-sm">
          <NavLink
            to={route.to}
            className={({ isActive }) =>
              isActive ? "linkActive" : "font-light"
            }
          >
            {route.text}
          </NavLink>
        </li>
      ))}
    </>
  );
}

const routes = [
  {
    to: "/",
    text: "Inicio",
  },
  {
    to: "/plants",
    text: "Plantas",
  },
  {
    to: "/trees",
    text: "Arboles",
  },
  {
    to: "/newPlant",
    text: "Nueva Planta",
  },
  {
    to: "/login",
    text: "Log in",
  },
  {
    to: "/logout",
    text: "Log out",
  },
];
