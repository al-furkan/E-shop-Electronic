import Container from "../../../../globalComponents/Container";
import SpringLeft from "./SpringLeft";
import SpringRight from "./SpringRight";

const SpringSale = () => {
  return (
    <section className="bg-white02 py-16 mt-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <SpringLeft />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <SpringRight />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpringSale;
