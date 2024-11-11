import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      <h1 className="text-white ">
        Hello Wold{page === "Earth" ? "!" : `, from ${page}`}
      </h1>
      <div className="absolute right-10 z-1">
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
        {isOpen && (
          <motion.div
            className="text-white mt-10 absolute z-10"
            initial={{ x: "200%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-7">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
