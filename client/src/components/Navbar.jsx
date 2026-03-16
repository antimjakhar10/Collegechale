import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO (2).jpeg";

const API = "http://localhost:5000/api";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [streams, setStreams] = useState([]);
  const [megaData, setMegaData] = useState({});
  const [activeStream, setActiveStream] = useState("");
  const [showMega, setShowMega] = useState(false);
  const [popularColleges, setPopularColleges] = useState([]);
  const [topColleges, setTopColleges] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setShowMega(false);
  }, [location]);

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

  const loadStream = async (stream) => {

setActiveStream(stream);

const res = await fetch(`${API}/megamenu/${stream}`);

const data = await res.json();

setMegaData(data.locations);
setPopularColleges(data.popular);
setTopColleges(data.top);

};

  useEffect(() => {
    fetch(`${API}/streams`)
      .then((res) => res.json())
      .then((data) => {
        setStreams(data);

        if (data.length > 0) {
          loadStream(data[0].name);
        }
      });
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

            <Link to="/blogs" className="hover:text-green-500 transition">
              Blogs
            </Link>

            <Link to="/contact" className="hover:text-green-500 transition">
              Contact Us
            </Link>

            <div
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
              className="relative cursor-pointer"
            >
              <span>Locations</span>

              {showMega && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] bg-white shadow-2xl rounded-xl flex text-black border mt-3 p-2">
                  {/* LEFT STREAMS */}

                  <div className="w-[260px] bg-gray-50 border-r max-h-[450px] overflow-y-auto rounded-l-xl">
                    {streams.map((s) => (
                      <div
                        key={s._id}
                        onMouseEnter={() => loadStream(s.name)}
                        className="px-5 py-3 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all duration-200 font-medium"
                      >
                        {s.name}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT COLLEGES */}

                  <div className="flex-1 p-8 grid grid-cols-3 gap-10">
                    {/* STATE WISE */}

                    <div>
                      <h3 className="font-bold mb-3">Colleges By Location</h3>

                      {Object.keys(megaData).map((state) => (
                        <div key={state} className="mb-4">
                          <p className="font-semibold text-gray-700">{state}</p>

                          {megaData[state].slice(0, 3).map((c) => (
                            <Link
                              key={c._id}
                              to={
                                c.type === "University"
                                  ? `/universities/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                                  : `/colleges/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                              }
                              className="block text-sm text-gray-600 hover:text-green-600"
                            >
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* POPULAR */}

                    <div>
                      <h3 className="font-bold mb-3">Popular Colleges</h3>

                      {popularColleges.map((c) => (
                        <Link
                          key={c._id}
                          to={
                            c.type === "University"
                              ? `/universities/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                              : `/colleges/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="block text-sm text-gray-600 hover:text-green-600"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* TOP */}

                    <div>
                      <h3 className="font-bold mb-3">Top Colleges</h3>

                      {topColleges.map((c) => (
                        <Link
                          key={c._id}
                          to={
                            c.type === "University"
                              ? `/universities/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                              : `/colleges/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="block text-sm text-gray-600 hover:text-green-600"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
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

            <div
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
              className="relative cursor-pointer"
            >
              <span>Locations</span>

              {showMega && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] bg-white shadow-2xl rounded-xl flex text-black border mt-3 p-2">
                  {/* LEFT STREAMS */}

                  <div className="w-[260px] bg-gray-50 border-r max-h-[450px] overflow-y-auto rounded-l-xl">
                    {streams.map((s) => (
                      <div
                        key={s._id}
                        onMouseEnter={() => loadStream(s.name)}
                        className="px-5 py-3 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all duration-200 font-medium"
                      >
                        {s.name}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT COLLEGES */}

                  <div className="flex-1 p-8 grid grid-cols-3 gap-10">
                    {/* STATE WISE */}

                    <div>
                      <h3 className="font-bold mb-3">Colleges By Location</h3>

                      {Object.keys(megaData).map((state) => (
                        <div key={state} className="mb-4">
                          <p className="font-semibold text-gray-700">{state}</p>

                          {megaData[state].slice(0, 3).map((c) => (
                            <Link
                              key={c._id}
                              to={
                                c.type === "University"
                                  ? `/universities/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                                  : `/colleges/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                              }
                              className="block text-sm text-gray-600 hover:text-green-600"
                            >
                              {c.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* POPULAR */}

                    <div>
                      <h3 className="font-bold mb-3">Popular Colleges</h3>

                      {popularColleges.map((c) => (
                        <Link
                          key={c._id}
                          to={
                            c.type === "University"
                              ? `/universities/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                              : `/colleges/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="block text-sm text-gray-600 hover:text-green-600"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>

                    {/* TOP */}

                    <div>
                      <h3 className="font-bold mb-3">Top Colleges</h3>

                      {topColleges.map((c) => (
                        <Link
                          key={c._id}
                          to={
                            c.type === "University"
                              ? `/universities/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                              : `/colleges/${c.name.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="block text-sm text-gray-600 hover:text-green-600"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
