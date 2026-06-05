import {Link} from 'react-router-dom'
import {
  Rocket,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-grey relative overflow-hidden text-xs   ">

      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="space-y-4"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <Rocket size={32} className="text-[#4CAFFF] animate-pulse" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CAFFF] to-[#FF4C9A]">
                SpaceVoyage
              </span>
            </div>
            <p className="text-[#AAB4CE] hover:text-gray-300 transition-colors duration-300">
              Explore the wonders of our solar system and beyond. Your journey
              through the cosmos starts here.
            </p>
          </motion.div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-#6F323C">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Planets"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="transform transition-transform duration-300"
                >
                  
                  <Link
                    to="/"
                    className="text-[#AAB4CE] hover:text-[#4CAFFF] transition-colors duration-300 flex items-center space-x-1 group"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:animate-bounce"
                    />
                    <span>{item}</span>
                  </Link> 
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#AAB4CE]">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {[
                {
                  icon: Mail,
                  text: "info@spacevoyage.com",
                  href: "mailto:info@spacevoyage.com",
                },
                {
                  icon: Phone,
                  text: "+1 (234) 567-890",
                  href: "tel:+1234567890",
                },
                { icon: MapPin, text: "Space Center, Earth" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="transform transition-transform duration-300"
                >
                  <a
                    href={item.href}
                    className="text-[#AAB4CE] hover:text-[#4CAFFF] transition-colors duration-300 flex items-center space-x-2"
                  >
                    <item.icon size={16} className="hover:animate-spin" />
                    <span>{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="hover:-translate-y-1 transition-transform duration-300"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#AAB4CE]">
              Stay Updated
            </h3>
            <p className="text-[#AAB4CE] mb-4">
              Subscribe to our newsletter for the latest cosmic updates.
            </p>
            <form className="space-y-2 group">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#182940] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAFFF] 
                           transition-all duration-300 hover:bg-[#1A2D46]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4CAFFF] hover:text-[#FF4C9A] 
                           transition-colors duration-300"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1A2D46]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#AAB4CE] hover:text-[#4CAFFF] transition-all duration-300 transform"
                >
                  <Icon size={24} className="hover:animate-spin" />
                </motion.a>
              ))}
            </div>

            <div className="text-[#AAB4CE] text-sm hover:text-gray-300 transition-colors duration-300">
              © {new Date().getFullYear()} SpaceVoyage. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
