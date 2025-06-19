import { Armchair, Banknote, CreditCard, Facebook, Instagram, MailCheck, PhoneCall, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";
import Logo from '../../assets/Banner/logo.png';


const Footer = () => {
    return (
       <footer className="bg-[#dedddd] text-slate-800">
  <div className="border-t border-b border-gray-700 pt-12 pb-10">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <div className="mb-6">
            <Link to="/" className="text-2xl lg:text-3xl font-inter font-medium flex items-center gap-2 text-slate-800">
            <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>
          <p className="text-sm sm:text-base text-slate-800 font-inter mb-4 max-w-[350px]">
           At Pinaka, we craft furniture that blends style, comfort, and durability. From elegant sofas and modern tables to versatile stools, our timeless pieces are designed to elevate any living or working space.
          </p>
          <div className="flex items-center gap-3">
            <Link className="p-2 border border-[#00bfa6] rounded-full"><Facebook color="#00bfa6" /></Link>
            <Link className="p-2"><Twitter color="#00bfa6" /></Link>
            <Link className="p-2"><Instagram color="#00bfa6" /></Link>
            <Link className="p-2"><Youtube color="#00bfa6" /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl text-slate-800 font-inter font-medium uppercase mb-4">Category</h3>
          <ul className="space-y-2">
            {["Table", "Chair", "Bar Stool", "Sofa", "Booth"].map((item) => (
              <li key={item}>
                <Link className="text-sm sm:text-base text-slate-800 hover:text-[#00bfa6] font-inter capitalize">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl text-slate-800 font-inter font-medium uppercase mb-4">Quik Link</h3>
          <ul className="space-y-2">
            {["Home", "About", "Product", "Contact Us"].map((item) => (
              <li key={item}>
                <Link className="text-sm sm:text-base text-slate-800 hover:text-[#00bfa6] font-inter capitalize">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl text-slate-800 font-inter font-medium uppercase mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-3 max-w-[424px]">
            <input
              type="email"
              placeholder="Your Email.."
              className="w-full h-[44px] bg-gray-800 text-slate-800 border border-gray-600 rounded-lg px-3 placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full sm:w-[127px] h-[44px] bg-[#00bfa6] text-slate-800 rounded-lg text-sm sm:text-base font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div className="py-4 sm:py-6 border-t border-gray-700">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-slate-800 text-center">
          © 2025 Pinaka Art & Exports — Designed & Developed by <span className="text-slate-800 font-medium">Web4businesssolutions</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-slate-800 text-sm sm:text-base">
          <p className="flex items-center gap-2"><PhoneCall size={16} />+91-8070207080</p>
          <p className="flex items-center gap-2"><MailCheck size={16} />pinakainc@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;