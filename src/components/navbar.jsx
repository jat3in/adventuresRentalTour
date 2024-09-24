import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaSuitcaseRolling,
  FaPhone,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleEmail = () => {
    const email = "Tourplnr@gmail.com";
    const subject = "Enquiry for Tour Planner Package";
    const body = "Hello,\nEnquiry for Tour Planner";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  const handleCall = () => {
    window.location.href = "tel:+91-931-995-9557";
  };
  return (
    <nav className="w-full ">
      <div className="w-full bg-gradient-to-br from-[#13253F] to-[#0F1E32] h-9 flex items-center justify-between lg:px-4 px-2">
        <div className="flex items-center h-full ">
          <FaEnvelope className="text-white"></FaEnvelope>
          <button
            className="flex items-center px-1 text-white/80"
            onClick={handleEmail}
          >
            Tourplnr@gmail.com
          </button>
        </div>
        <div className="flex items-center h-full gap-x-2">
          <div className="rounded-full border-[1px] border-white p-0.5">
            <FaFacebookF className="text-white "></FaFacebookF>
          </div>
          <div className="rounded-full border-[1px] border-white p-0.5">
            <FaInstagram className="text-white "></FaInstagram>
          </div>
        </div>
      </div>
      <div className="w-full h-9 flex items-center justify-between lg:px-4 px-2 shadow-sm">
        <div className="flex h-full items-center justify-start flex-grow">
          <FaSuitcaseRolling className="text-[#13253F]" />
          <Link to="/" className="pl-1 text-[#13253F] font-semibold">
            TourPlanner
          </Link>
        </div>
        <div className="flex h-full items-center justify-center flex-grow">
          <ul className="flex justify-center w-full">
            <li className="text-[#13253F] font-medium text-center w-full">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="flex h-full items-center justify-end flex-grow">
          <div className="flex items-center gap-x-1">
            <FaPhone className="text-[#13253F]" />
            <button
              onClick={handleCall}
              className="text-[#13253F] font-semibold"
            >
              +91-9319959557
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
