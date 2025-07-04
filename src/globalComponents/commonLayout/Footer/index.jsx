import { useTranslation } from "react-i18next";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import applePay from "../../../assets/images/applePay.png";
import masterCard from "../../../assets/images/mastercard.png";
import paypal from "../../../assets/images/paypal.png";
import visa from "../../../assets/images/visa.png";
import { Logo } from "../../../assets/svg/Logo";
import Container from "../../Container";
import { footerLinkList } from "./data";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <footer className="mt-20">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-10 md:gap-x-8 h-full">
    {/* Left Section: Logo + Contact */}
    <div className="flex flex-col justify-between h-full">
      <Link to="/">
        <Logo />
      </Link>
      <div className="mt-6 md:mt-0">
        <ul>
          <li className="flex items-center gap-x-2 font-montserrat text-black01 mb-3">
            <FaPhoneAlt color="#828282" />
            <span>+1 (555) 123-4567</span>
          </li>
          <li className="flex items-center gap-x-2 font-montserrat text-black01 mb-3">
            <BsEnvelopeFill color="#828282" />
            <span>information@eshop.com</span>
          </li>
          <li className="flex items-center gap-x-2 font-montserrat text-black01">
            <FaMapMarkerAlt color="#828282" />
            <span>123 Main Street, Suite 105, Anytown USA</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Right Section: Links */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4">
      {footerLinkList.map((item, index) => (
        <div key={index}>
          <h4 className="font-poppins font-semibold text-xl text-black01">
            {t(item.title)}
          </h4>
          <ul className="mt-6 space-y-3">
            {item.linkTitle.map((data) => (
              <li key={data.linkTopic}>
                <Link
                  to={data.to}
                  className="font-montserrat text-base text-black200 hover:text-orange transition-all"
                >
                  {data.linkTopic}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Payments & Social */}
      <div>
        <h4 className="font-poppins font-semibold text-xl text-black01">
          Payments
        </h4>
        <div className="flex flex-wrap gap-2 mt-6">
          <img src={visa} alt="visa" className="h-6" />
          <img src={masterCard} alt="masterCard" className="h-6" />
          <img src={applePay} alt="applePay" className="h-6" />
          <img src={paypal} alt="paypal" className="h-6" />
        </div>

        <div className="mt-10">
          <h4 className="font-poppins font-semibold text-xl text-black01">
            Follow us
          </h4>
          <ul className="mt-6 space-y-3">
            {["Twitter", "Instagram", "Facebook"].map((social) => (
              <li key={social}>
                <Link
                  to=""
                  className="font-montserrat text-base text-black200 hover:text-orange transition-all"
                >
                  {social}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="mt-16 border-t border-black100 flex flex-col md:flex-row justify-between items-center py-4 gap-y-3">
    <span className="font-montserrat text-sm text-black200 text-center md:text-left">
      © 2025 E-Shop. All Rights Reserved.
    </span>
    <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 text-sm text-black200">
      <Link to="" className="hover:text-orange transition">Privacy Policy</Link>
      <span>|</span>
      <Link to="" className="hover:text-orange transition">Terms & Condition</Link>
      <span>|</span>
      <Link to="" className="hover:text-orange transition">Sitemap</Link>
    </div>
  </div>
</footer>

    </Container>
  );
};

export default Footer;