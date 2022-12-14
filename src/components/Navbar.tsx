export default function Navbar({ style }): JSX.Element {
  return (
    <>
      {routes.map((route) => (
        <li
          key={route.to}
          className={`text-lg lg:text-sm ${
            route.isActive ? "linkActive" : "font-light"
          }`}
        >
          {route.text}
        </li>
      ))}
    </>
  );
}

const routes = [
  {
    to: "/",
    text: "Inicio",
    isActive: true,
  },
  {
    to: "/plants",
    text: "Plantas",
    isActive: false,
  },
  {
    to: "/tree",
    text: "Arboles",
    isActive: false,
  },
  {
    to: "/newPlant",
    text: "Nueva Planta",
    isActive: false,
  },
];
