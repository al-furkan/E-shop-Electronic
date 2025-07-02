import { FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";

export default function ContactCard() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-md lg:p-8">
      <h2 className="text-xl lg:text-2xl font-bold text-black01 mb-2">
        Let’s Keep in Touch!
      </h2>
      <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">
        We would love to hear from you. Contact us for any inquiries you might
        have.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3 text-black01">
          <FaPhoneAlt className="text-orange mt-1" />
          <span className="text-sm lg:text-base">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-start gap-3 text-black01">
          <MdEmail className="text-orange mt-1" />
          <span className="text-sm lg:text-base">information@eshop.com</span>
        </div>
        <div className="flex items-start gap-3 text-black01">
          <GoLocation className="text-orange mt-1 text-lg" />
          <span className="text-sm lg:text-base">
            123 Main Street, Suite 105, Anytown USA
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-lg lg:text-xl font-semibold text-black01 border-b-2 border-orange inline-block mb-3">
          Opening Hours
        </h3>
        <div className="space-y-1 text-sm lg:text-base text-gray-700">
          <div>
            <span className="font-bold">MON to FRI:</span>{" "}
            <span>08:00 AM - 04:00 PM</span>
          </div>
          <div>
            <span className="font-bold">SAT to SUN:</span>{" "}
            <span>09:00 AM - 03:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
