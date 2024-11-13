import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, navStyles } from "../../utils/constants";
import { useContext, useState } from "react";
import { MyContext } from "../components/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { page } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={navStyles[page]}>
      <h1 className="text-white text-2xl ">
        Hello Peeps{page === "Earth" ? "!" : `, from ${page}`}
      </h1>

     <div className=" absolute right-10 z-1 flex flex-rowitems-center space-x-9">
      <div className="group relative inline-block">
      <Link to="/Apod">
          <button className=" text-black py-2 px-4 rounded cursor-wait " >
            Apod
          </button>
        </Link>
        <span className="absolute left-0 top-full mt-2 w-full text-center text-white  py-1 px-2 rounded opacity-0 group-hover:opacity-50">
        Astronomy Picture of the Day
        </span>

        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          Planets{" "}
          <motion.div
            className="inline-block"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`text-white rounded-xl p-5 mt-10 absolute z-10 ${navStyles[
                page
              ]
                .split(" ")
                .slice(0, 3)
                .join(" ")}`}
              initial={{ x: "200%" }}
              animate={{ x: "0" }}
              transition={{ duration: 0.5 }}
              exit={{ x: "200%" }}
            >
              <ul className={`flex flex-col gap-7`}>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
     
    </nav>
  );
}

export default Navbar;
