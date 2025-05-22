import { FaHeadphones, FaTv } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { RiHome9Line, RiPlaystationFill } from "react-icons/ri";
import { RxMobile } from "react-icons/rx";
import { Link } from "react-router-dom";

export const categoriesItems = [
  {
    label: (
      <Link
        to="/products"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <MdComputer color="FF624C" /> Computers & Tablets
      </Link>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <RxMobile color="FF624C" /> Mobile & Accessories
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <FaTv color="FF624C" />
        TV & Home Theater
      </Link>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <FaHeadphones color="FF624C" /> Audio & Headphones
      </Link>
    ),
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <IoCameraOutline color="FF624C" /> Cameras & Camcorders
      </Link>
    ),
    key: "5",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <RiPlaystationFill color="FF624C" /> Gaming Equipment
      </Link>
    ),
    key: "6",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="font-montserrat font-normal text-base text-black01 flex items-center gap-x-2 py-2"
      >
        <RiHome9Line color="FF624C" /> Home Appliances
      </Link>
    ),
    key: "7",
  },
];