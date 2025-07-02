import overView02 from "../../../assets/images/products/overview02.png";
import overView01 from "../../../assets/images/products/overvire01.png";
import Container from "../../../globalComponents/Container";

const Overview = () => {
  return (
    <section className="mt-[80px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            src={overView01}
            alt="overview"
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src={overView02}
            alt="overview"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default Overview;
