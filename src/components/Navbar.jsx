import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, navStyles } from "../constants";
import { useContext, useState, useRef, useEffect } from "react";
import { PlanetContext } from "../context/PlanetContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Menu, X } from "lucide-react";

const navLinkClass =
  "text-white/90 hover:text-white transition-colors whitespace-nowrap";

function Navbar() {
  const { page } = useContext(PlanetContext);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`${navStyles[page] ?? navStyles.Galaxy} relative flex-wrap gap-4`}
    >
      <h1 className="text-white text-xl md:text-2xl">
        Hello Peeps{page === "Galaxy" ? "!" : `, from ${page}`}
      </h1>

      <button
        className="md:hidden text-white ml-auto"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="hidden md:flex absolute right-10 items-center gap-6 lg:gap-9">
        <Link to="/" className={navLinkClass}>
          Home
        </Link>
        <Link to="/apod" className={navLinkClass}>
          APOD
        </Link>
        <Link to="/earth#earth-weather" className={navLinkClass}>
          Earth Weather
        </Link>
        <Link to="/mars#mars-weather" className={navLinkClass}>
          Mars Weather
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${navLinkClass} flex items-center`}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            Planets
            <motion.span
              className="inline-block ml-1"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.span>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={`text-white rounded-xl p-5 mt-3 absolute right-0 z-20 min-w-[160px] ${navStyles[page]
                  ?.split(" ")
                  .slice(0, 3)
                  .join(" ")}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={navLinkClass}
                        onClick={closeMenus}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="w-full md:hidden flex flex-col gap-4 py-4 border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Link to="/" className={navLinkClass} onClick={closeMenus}>
              Home
            </Link>
            <Link to="/apod" className={navLinkClass} onClick={closeMenus}>
              APOD
            </Link>
            <Link
              to="/earth#earth-weather"
              className={navLinkClass}
              onClick={closeMenus}
            >
              Earth Weather
            </Link>
            <Link
              to="/mars#mars-weather"
              className={navLinkClass}
              onClick={closeMenus}
            >
              Mars Weather
            </Link>
            <p className="text-white/60 text-sm uppercase tracking-wide">
              Planets
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${navLinkClass} pl-2`}
                onClick={closeMenus}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
