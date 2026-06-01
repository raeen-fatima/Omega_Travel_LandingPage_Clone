import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "./MegaMenu";

const navItemClass = `
text-[14px]
font-medium
text-[#444]
px-[15px]
py-[6px]
rounded
transition-all
duration-300
hover:text-[#0B67C2]
hover:bg-[#f3f3f3]
flex
items-center
gap-2
cursor-pointer
`;

export default function DropdownMenu({ title, data, width }) {
  return (
    <li className="relative group">
      <div className={navItemClass}>
        {title}
        <FaChevronDown className="text-[11px]" />
      </div>

      <MegaMenu {...data} width={width} />
    </li>
  );
}