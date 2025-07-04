import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import { useTranslation } from "react-i18next";
import Banner from "./Components/Banner";
import SupportSection from "./Components/support";
import FeaturedProducts from "./Components/featuredProducts";
import Overview from './Components/OverView';
import NewProducts from './Components/newProducts/index';
import Springsale from "./Components/springsale";
import FaqSection from "./Components/FAQ";
import BestSeller from "./Components/bestseller";
import TechTalks from "./Components/teachTalks";
import Companies from "./Components/Companies";
import Subscribe from "./Components/Subscribe";

const Home = () => {
   const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
        <SupportSection />
        <FeaturedProducts />
        <Overview />
        <NewProducts />
      </Container>
      <Springsale />
      <Container>
        <BestSeller />
      </Container>
      <FaqSection />
      <Container>
        <TechTalks />
        <Companies />
         <Subscribe />
      </Container>
    </>
  );
};

export default Home;  