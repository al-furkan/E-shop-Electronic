import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import { categoriesItems } from "./categoriesItems";

const AllCategory = () => {
  const { t } = useTranslation();

  return (
    <>
      <Dropdown menu={{ items: categoriesItems }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="font-montserrat font-bold text-base text-white cursor-pointer">
            <FaBars /> {t("AllCategory")}
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default AllCategory;