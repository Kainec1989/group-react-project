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

        Hello Peeps{page === "Galaxy" ? "!" : `, from ${page}`}
      </h1>

      <div className=" absolute right-10 z-1 flex  space-x-9">
        <Link to="/">Home</Link>
        <Link to="/earth#earth-weather">Earth Weather</Link>
        <Link to="/mars#mars-weather">Mars Weather</Link>

        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            Planets

            <motion.div
              className="inline-block mx-1"
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon className="ml-1" icon={faChevronDown} />
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
      </div>
     
    </nav>
  );
}

export default Navbar;
