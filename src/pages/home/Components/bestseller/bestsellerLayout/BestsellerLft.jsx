import { useTranslation } from "react-i18next";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ProductCard from "../../../../../globalComponents/productCards";
import { FeaturedProductsData } from "../../featuredProducts/featuredData";

const BestsellerLft = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header with title and "View All" link */}
      <div className="flex items-center justify-between flex-wrap gap-y-4 mb-8 sm:mb-10">
        <h3 className="font-poppins text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-black01">
          {t("Best seller")}
        </h3>
        <Link
          to="/product"
          className="flex items-center gap-x-2 font-montserrat font-bold text-base text-orange group"
        >
          {t("View_All")}
          <span className="group-hover:translate-x-2 transition-transform duration-300">
            <HiArrowLongRight size={24} />
          </span>
        </Link>
      </div>

      {/* Responsive Grid for Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {FeaturedProductsData?.slice(0, 6).map((product) => (
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
    </div>
  );
};

export default BestsellerLft;
