import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../assets/logo.png';

const Footer = () => {
  const { isDarkMode } = useContext(AuthContext);

  const footerClass = isDarkMode ? "bg-gray-400 text-base-100" : "bg-[#333] text-base-content";
  const titleClass = isDarkMode ? "text-black" : "text-white";
  const linkClass = isDarkMode ? "link link-hover text-emerald-600" : "link link-hover text-blue-600";

  return (
    <div>
      <footer className={footerClass + " mt-28"}>
        <div className="footer justify-around p-10 px-32">
          <div className="flex items-center"> 
            <img  src={logo} alt="" className="w-10" />
            <p className={`text-2xl font-extrabold ${titleClass}`}>Tech<span className="text-emerald-600">Fleet</span></p>
          </div> 
          <nav>
            <header className={`footer-title ${titleClass}`}>Services</header>
            <a className={`link link-hover ${linkClass}`}>Products</a>
            <a className={`link link-hover ${linkClass}`}>Upcoming</a>
            <a className={`link link-hover ${linkClass}`}>Marketing</a>
            <a className={`link link-hover ${linkClass}`}>Advertisement</a>
          </nav>
          <nav>
            <header className={`footer-title ${titleClass}`}>Company</header>
            <a className={`link link-hover ${linkClass}`}>About us</a>
            <a className={`link link-hover ${linkClass}`}>Contact</a>
            <a className={`link link-hover ${linkClass}`}>Jobs</a>
            <a className={`link link-hover ${linkClass}`}>Press kit</a>
          </nav>
          <nav>
            <header className={`footer-title ${titleClass}`}>Legal</header>
            <a className={`link link-hover ${linkClass}`}>Terms of use</a>
            <a className={`link link-hover ${linkClass}`}>Privacy policy</a>
            <a className={`link link-hover ${linkClass}`}>Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
