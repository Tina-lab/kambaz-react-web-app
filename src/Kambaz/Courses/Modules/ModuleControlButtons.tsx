import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
export default function ModuleControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <GreenCheckmark />
      <BsPlus className="fs-2 mx-2" />
      <IoEllipsisVertical className="fs-3" />
    </div>
  );
}
