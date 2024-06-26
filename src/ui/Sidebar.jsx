import { Link } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";

function Sidebar() {
  return (
    <div
      className="flex flex-col bg-lightBlue pl-[34px] pr-[34px] pt-[34px]"
      // style={{ gridRow: "1/-1" }}
    >
      <SidebarLinks />
      <Link to={"create-contract"}>
      <button className="mt-[50px] self-center rounded-full bg-primaryColor px-[30px] py-3 text-base font-semibold leading-default text-black">
        Draft Contract
      </button>
      </Link>
    </div>
  );
}

export default Sidebar;
