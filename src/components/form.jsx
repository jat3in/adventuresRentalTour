import { useState } from "react";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {["name", "phoneNumber", "email", "date"].map((field) => (
        <div key={field} className="w-full">
          <label className="block mb-2 text-sm text-[#0F1E32]" htmlFor={field}>
            {field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
          <input
            type={
              field === "date" ? "date" : field === "email" ? "email" : "text"
            }
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full bg-white text-[#0F1E32] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#7BBCB0] focus:ring-1 focus:ring-[#7BBCB0]"
            placeholder={`Your ${
              field.charAt(0).toUpperCase() +
              field.slice(1).replace(/([A-Z])/g, " $1")
            }`}
            required
          />
        </div>
      ))}
      <button
        className="mt-4 w-full rounded-md bg-[#FFDA32] py-2 px-4 text-[#1C2B38] font-medium transition-all hover:bg-[#FFE566] focus:bg-[#FFE566] focus:outline-none focus:ring-2 focus:ring-[#FFDA32] focus:ring-offset-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
