import BestsellerLft from "./bestsellerLayout/BestsellerLft";
import BestsellerRght from "./bestsellerLayout/BestsellerRght";

const BestSeller = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
        <BestsellerLft />
        <BestsellerRght />
      </div>
    </section>
  );
};

export default BestSeller;
