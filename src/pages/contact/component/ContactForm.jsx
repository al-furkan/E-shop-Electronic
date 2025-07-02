import { useFormik } from "formik";
import { contactSchema, initialValues } from "./schema";

const ContactForm = () => {
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("submitted", values);
      resetForm(); // optional: reset form on success
    },
  });

  return (
    <div>
      <h2 className="font-poppins font-semibold text-4xl text-black01">
        Contact Us
      </h2>
      <p className="font-montserrat text-xl text-black01 font-normal mt-3 mb-[48px]">
        Have any questions for us? Don’t hesitate to contact us.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label className="block font-montserrat text-xl font-bold text-black01 mb-2">
            Name
          </label>
          <input
            placeholder="Md Al Furkan"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="w-full border border-black100 p-5 rounded-[10px] outline-none"
          />
          {touched.name && errors.name && (
            <p className="font-montserrat text-red text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-2 gap-x-4 my-8">
          <div>
            <label className="block font-montserrat text-xl font-bold text-black01 mb-2">
              Phone Number
            </label>
            <input
              placeholder="+880 1726014276"
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className="w-full border border-black100 p-5 rounded-[10px] outline-none"
            />
            {touched.phone && errors.phone && (
              <p className="font-montserrat text-red text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label className="block font-montserrat text-xl font-bold text-black01 mb-2">
              Email Address
            </label>
            <input
              placeholder="furkan@gmail.com"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-full border border-black100 p-5 rounded-[10px] outline-none"
            />
            {touched.email && errors.email && (
              <p className="font-montserrat text-red text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block font-montserrat text-xl font-bold text-black01 mb-2">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className="w-full border border-black100 p-5 rounded-[10px] outline-none resize-none h-[241px]"
          />
          {touched.message && errors.message && (
            <p className="font-montserrat text-red text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="!bg-orange !px-10 !h-12 !border-none !mt-[16px] cursor-pointer"
        >
          <span className="font-montserrat font-bold text-lg text-white">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
