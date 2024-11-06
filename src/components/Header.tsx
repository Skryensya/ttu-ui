import { useState, useEffect, useCallback, FC } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { slugify } from "../lib/utils";
import { LaunchIcon } from "../lib/icons";
import { HeaderDummyProps } from "../data-dummy/header";
import { Menu, X } from "lucide-react";

// Types for Header props
interface Link {
  name: string;
  link: string;
}

interface Shortcut {
  section: string;
  name: string;
  link: string;
}

interface HeaderProps {
  menuLinks?: Link[];
  socialLinks?: Link[];
  shortcuts?: Shortcut[];
}

const Header: FC<HeaderProps> = ({
  menuLinks = HeaderDummyProps.menuLinks,
  socialLinks = HeaderDummyProps.socialLinks,
  shortcuts = HeaderDummyProps.shortcuts,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Debounced toggleMenu function
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const containerVariants = {
    open: {
      transition: prefersReducedMotion
        ? {}
        : {
            staggerChildren: 0.05,
            delayChildren: 0.1,
          },
    },
    closed: {},
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: { opacity: 0, y: -10 },
  };

  // Define TopBar component inside Header
  const TopBar: FC = () => (
    <div className="sticky top-0 z-50 border-gray-700 w-full bg-black border-b">
      <div className="flex justify-between p-4 max-w-6xl mx-auto text-white">
        <a href="/" className="text-2xl font-headings">
          <svg
            width="80"
            height="32"
            viewBox="0 0 108 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.248 34H13.336V13.936C13.336 10.624 12.568 9.616 9.544 10.144L7.768 10.528C2.824 11.584 0.952 10.48 0.952 6.4C0.952 2.032 3.496 0.399998 10.36 0.399998H32.2V7.408L5.896 4.288C3.592 4.192 2.584 4.624 2.584 5.872C2.584 7.264 3.64 8.032 6.376 7.936L14.488 8.272C19 8.224 20.248 9.52 20.248 12.592V34ZM53.8668 34H46.9548V13.936C46.9548 10.624 46.1868 9.616 43.1628 10.144L41.3868 10.528C36.4428 11.584 34.5708 10.48 34.5708 6.4C34.5708 2.032 37.1148 0.399998 43.9788 0.399998H65.8188V7.408L39.5148 4.288C37.2108 4.192 36.2028 4.624 36.2028 5.872C36.2028 7.264 37.2588 8.032 39.9948 7.936L48.1068 8.272C52.6188 8.224 53.8668 9.52 53.8668 12.592V34ZM91.1815 34.72H86.8615C75.1975 34.72 70.3015 30.352 70.3015 17.2V0.399998H77.2135V17.2C77.2135 25.696 79.3255 28.624 87.1015 28.624H90.9895C98.7655 28.624 100.878 25.696 100.878 17.2V0.399998H107.742V17.2C107.742 30.352 102.846 34.72 91.1815 34.72Z"
              fill="white"
            />
          </svg>
        </a>
        <button onClick={toggleMenu}>
          {isOpen ? <X size="32" /> : <Menu size="32" />}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <TopBar />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col lg:overflow-y-visible overflow-y-auto"
          >
            <TopBar />

            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="pt-12 pb-4 flex flex-col lg:flex-row lg:justify-between w-full max-w-6xl mx-auto p-4 
                         lg:h-auto lg:max-h-full"
            >
              <div className="pb-8 lg:pb-0">
                <label htmlFor="#Menu">MENÚ</label>
                <ul id="Menu" className="flex flex-col gap-y-3 mt-3">
                  {menuLinks.map((link, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <a href={link.link} className="text-3xl">
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col lg:flex-row gap-x-20">
                  {shortcuts.map((shortcut, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex flex-col gap-y-2 group mb-3 lg:mb-0"
                    >
                      <label
                        htmlFor={`#${slugify(shortcut.name)}`}
                        className="uppercase text-sm"
                      >
                        {shortcut.section}
                      </label>
                      <a
                        href={shortcut.link}
                        className="text-xl font-[400] flex items-start gap-1"
                      >
                        {shortcut.name}
                        <LaunchIcon
                          size={20}
                          className="group-hover:scale-125 transition-all duration-150 group-hover:font-bold"
                        />
                      </a>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 lg:mt-24 flex justify-end items-end ">
                  <div>
                    <ul
                      id="Social"
                      className="flex flex-col flex-wrap gap-3 my-2 items-end"
                    >
                      {socialLinks.map((link, index) => (
                        <motion.li key={index} variants={itemVariants}>
                          <a
                            href={link.link}
                            className="w-10 min-w-fit hover:underline focus:underline flex gap-1 items-center justify-end group"
                          >
                            {link.name}
                            <LaunchIcon
                              size={16}
                              className="w-0 group-hover:w-fit group-hover:scale-125 transition-all duration-75 group-hover:font-bold"
                            />
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
