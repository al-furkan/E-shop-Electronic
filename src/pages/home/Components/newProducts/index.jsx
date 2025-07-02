import { Button } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../../../globalComponents/Container";
import AllCategoryMenu from "../../../../globalComponents/HeaderComponents/menubar/AllCategories";
import ProductCard from "../../../../globalComponents/productCards";
import { FeaturedProductsData } from "../featuredProducts/featuredData";

const NewProducts = () => {
  const [initialData, setInitialData] = useState(5);
  const { t } = useTranslation();

  const loadMore = () => {
    setInitialData((prev) => prev + 5);
  };

  return (
    <section className="mt-[80px]">
      <Container>
        <div className="relative">
          {/* Top Header Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <h3 className="font-poppins text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-black01">
              {t("New_Products")}
            </h3>

            <div className="flex items-center gap-x-2 w-full lg:w-[50%] justify-start lg:justify-end">
              <span className="font-montserrat font-normal text-base whitespace-nowrap">
                {t("Sort By:")}
              </span>
              <div className="w-[70%] sm:w-[40%] md:w-[30%]">
                <AllCategoryMenu
                  className="font-montserrat font-bold text-base text-orange cursor-pointer w-full flex justify-between items-center"
                  icons={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-[30px]">
          {FeaturedProductsData?.slice(0, initialData)?.map((product) => (
            <ProductCard
              key={product.id}
              image={product?.image}
              ratings={product.ratings}
              pCategory={product.pCategory}
              pName={product.pName}
              totalRatings={product.totalRatings}
              price={product.price}
              discount={product.discount}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex items-center justify-center mt-[50px]">
          {initialData < FeaturedProductsData?.length && (
            <Button
              onClick={loadMore}
              className="!px-[40px] !h-11 !border !border-orange !font-montserrat !font-bold !text-base !text-orange hover:!bg-orange hover:!text-white transition-all duration-300"
            >
              {t("Load More")}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default NewProducts;
