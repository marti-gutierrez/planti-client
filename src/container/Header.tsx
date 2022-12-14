import Search from "../components/Search";
import { GiFlowerPot, GiPlantSeed } from "react-icons/gi";
import Menu from "./Menu";
import Modal from "./Modal";
import PopupNav from "./PopupNav";
import { useState } from "react";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="grid grid-cols-[48px_1fr_min-content_48px] place-items-center gap-2 w-full bg-primary-100 px-4 py-2">
        <a href="" className="hover:bg-primary-50 rounded-full">
          <GiPlantSeed className="w-6 h-6 text-secondary-200 " />
        </a>
        <Search />
        <Menu setOpenModal={setOpenModal} />
        <a href="" className="hover:bg-primary-50 rounded-full">
          <GiFlowerPot className="w-6 h-6 text-secondary-200" />
        </a>
      </header>
      {openModal && (
        <Modal>
          <PopupNav />
        </Modal>
      )}
    </>
  );
}

const routes = [
  {
    to: "/",
    text: "home",
  },
  {
    to: "/garden",
    text: "garden",
  },
];
