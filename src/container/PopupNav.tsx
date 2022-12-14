import Navbar from "../components/Navbar";
import { FaUserAlt } from "react-icons/fa";

export default function PopupNav(): JSX.Element {
  return (
    <aside className="relative">
      <section className="bg-primary-50 mb-4 p-4 flex items-center gap-4">
        <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <FaUserAlt className="w-6 h-6" />
        </span>
        <h3 className="text-lg">Exploremos Planti</h3>
      </section>
      <ul className="grid auto-rows-[48px] items-center gap-2 mx-4">
        <Navbar />
      </ul>
      <div className="absolute w-12 h-12 bg-primary-50 -top-1 right-[60px] rotate-45"></div>
    </aside>
  );
}
