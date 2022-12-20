import { AiOutlineMenu } from "react-icons/ai";
import Navbar from "../components/Navbar";

interface Props {
  setOpenModal: () => void;
}

export default function Menu({ setOpenModal }: Props) {
  const onToggleModal = () => setOpenModal((prevState) => !prevState);
  return (
    <div>
      <ul className="hidden lg:flex w-[300px] gap-2 items-center justify-between mr-4">
        <Navbar />
      </ul>
      <button
        className="lg:hidden flex justify-center items-center"
        onClick={onToggleModal}
      >
        <AiOutlineMenu className="w-6 h-6 text-secondary-200" />
      </button>
    </div>
  );
}
