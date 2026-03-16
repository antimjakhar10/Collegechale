import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO (2).jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isUniversityPage = location.pathname === "/universities";
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-slate-600 text-white text-sm py-2 px-4 md:px-10 flex justify-between items-center transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex gap-4 md:gap-6">
          <span>📧 info@collegechale.com</span>
          <span className="hidden md:block">📞 +91 9857002222</span>
        </div>

        <div className="hidden md:flex gap-4">
          <span>f</span>
          <span>t</span>
          <span>in</span>
          <span>🌐 English</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className={`fixed left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-black py-4"
            : isHomePage
              ? "top-[40px] bg-transparent py-6"
              : "top-[40px] bg-white py-4 shadow-md"
        }`}
      >
        <div className="relative flex items-center justify-between px-5 md:px-12">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 md:h-12" />

            <span
              className={`text-lg md:text-xl font-bold ${
                scrolled || isHomePage ? "text-white" : "text-black"
              }`}
            >
              College Chale
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div
            className={`hidden md:flex gap-10 text-lg font-semibold tracking-wide absolute left-1/2 -translate-x-1/2 ${
              scrolled || isHomePage ? "text-white" : "text-black"
            }`}
          >
            <Link
              to="/universities"
              className="hover:text-green-500 transition"
            >
              University
            </Link>

            <Link to="/colleges" className="hover:text-green-500 transition">
              College
            </Link>

            

            <Link to="/blogs"  className="hover:text-green-500 transition">Blogs</Link>

            <Link to="/contact" className="hover:text-green-500 transition">
              Contact Us
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <div
            className={`md:hidden text-2xl cursor-pointer block ml-auto ${
!isHomePage || scrolled ? "text-black" : "text-white"
}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
  <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4 text-black font-semibold transition-all duration-300">

    <Link to="/universities" onClick={() => setMenuOpen(false)}>
      University
    </Link>

    <Link to="/colleges" onClick={() => setMenuOpen(false)}>
      College
    </Link>

    

    <Link to="/blogs" onClick={() => setMenuOpen(false)}>
      Blogs
    </Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)}>
      Contact Us
    </Link>

  </div>
)}
      </div>
    </>
  );
};

export default Navbar;
