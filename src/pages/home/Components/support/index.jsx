import { supportData } from "./supportData";

const SupportSection = () => {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {supportData?.map((item, index) => {
        const Icon = item.icon;
        return (
          <div className="flex items-start gap-x-5" key={index}>
            <span className="text-black01 text-3xl">
              <Icon />
            </span>
            <div>
              <h5 className="font-montserrat font-bold text-base text-black01">
                {item.title}
              </h5>
              <p className="font-montserrat font-normal text-base text-black01">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SupportSection;
