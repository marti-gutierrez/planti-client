import Search from "../components/Search";
import { GiFlowerPot, GiPlantSeed } from "react-icons/gi";
import Menu from "./Menu";
import Modal from "./Modal";
import PopupNav from "./PopupNav";
import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { Link } from "react-router-dom";

export default function Header() {
  const { state, stateUpdaters } = useSearch();
  const { searchState } = state;
  const { setSearchState } = stateUpdaters;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className="fixed grid grid-cols-[48px_1fr_min-content_48px] place-items-center gap-2 w-full bg-white px-4 py-2 border-b border-primary-200">
        <Link to="/" className="hover:bg-primary-50 rounded-full">
          <GiPlantSeed className="w-6 h-6 text-secondary-200 " />
        </Link>
        <Search searchState={searchState} setSearchState={setSearchState} />
        <Menu setOpenModal={setOpenModal} />
        <Link to="/garden" className="hover:bg-primary-50 rounded-full">
          <GiFlowerPot className="w-6 h-6 text-secondary-200" />
        </Link>
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
