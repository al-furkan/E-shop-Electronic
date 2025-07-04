import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import subscribeImage from "../../../assets/images/subscribe.png";
import CommonButton from "../../../globalComponents/CommonButton";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactBody = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-x-3 items-center">
        <div>
          <h1 className="font-montserrat text-black01 my-[64px]">
            <Link className="font-normal" to="/">
              Home
            </Link>{" "}
            | <span className="font-bold"> {pageName}</span>
          </h1>
          <ContactForm />
        </div>
        <div className="mt-5 xl:mt-0">
          <ContactCard />
        </div>
      </div>
      <div>
        <section className="mt-20">
  <div className="rounded-[25px] overflow-hidden flex flex-col lg:grid lg:grid-cols-2">
    <div className="bg-gradient-to-r from-white02 to-gray py-10 xl:py-[114px] px-6 lg:pl-[100px]">
      <h3 className="font-poppins font-bold text-3xl lg:text-[40px] text-black01 leading-[60px]">
        Get Up-to-Date Gadget Technology
      </h3>
      <p className="font-montserrat text-base lg:text-xl font-normal text-black200 leading-[30px] mb-6">
        {t(
          "Browse our wide selection of electronics and find the perfect promo for you from newsletter."
        )}
      </p>

      <CommonButton className="!bg-orange !px-10 !h-12 !border-none !mt-4">
        <span className="font-montserrat font-bold text-lg text-white">
          Subscribe
        </span>
      </CommonButton>
    </div>

    <div className="bg-gray h-[300px] lg:h-auto flex items-center justify-center">
      <img
        src={subscribeImage}
        alt="subscribe"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default ContactBody;