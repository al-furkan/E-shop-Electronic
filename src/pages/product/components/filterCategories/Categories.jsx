import { Checkbox, Dropdown } from "antd";
import { CatagoriItem } from "./catagoriItem";
import { RiArrowDropDownLine } from "react-icons/ri";

const Categories = () => {
  return (
    <>
      <div className="w-full mb-5">
        <h4 className="font-montserrat font-bold text-xl text-black01">
          Categories
        </h4>
        <div className="mt-5">
            <Dropdown menu={{ items: CatagoriItem }} trigger={["click"]}>
        <div >
          <RiArrowDropDownLine size={24} className="text-black01" />
          {(
            <span>
             
            </span>
          )}{" "}
        </div>

      </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Categories;