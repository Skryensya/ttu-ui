import { useState } from "react";
import { slugify } from "../lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-black text-white py-3">
      <div className="mx-auto sm:max-w-6xl px-4">
        <div className="flex justify-between">
          <a href="/" className="text-2xl">
            TTU
          </a>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 30V27.2221H35V30H5ZM5 21.3888V18.6112H35V21.3888H5ZM5 12.7779V10H35V12.7779H5Z"
                fill="#E8EAED"
              />
            </svg>
          </button>
        </div>

        {/* Animated dropdown */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-10"
          }`}
        >
          <div className="pt-12 pb-20 flex justify-between transform">
            <div>
              <label htmlFor="#Menu">Menú</label>
              <ul id="Menu" className="flex flex-col gap-y-3 mt-3">
                {MenuLink.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="text-3xl">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex gap-x-8">
                {Shortcut.map((shortcut, index) => (
                  <div key={index} className="flex flex-col gap-y-2">
                    <label
                      htmlFor={`#${slugify(shortcut.name)}`}
                      className="uppercase"
                    >
                      {shortcut.section}
                    </label>
                    <a href={shortcut.link}>{shortcut.name}</a>
                  </div>
                ))}
              </div>
              <div className="mt-24 flex justify-end">
                <div>
                  <label htmlFor="#Social" className="uppercase">
                    Social
                  </label>
                  <ul id="Social" className="flex flex-row gap-x-4 mt-3">
                    {SocialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.link} className="w-10 h-10">
                          <img src={`/${link.img}`} alt={link.name} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SocialLinks: Array<{ img: string; name: string; link: string }> = [
  {
    img: "instagram.svg",
    name: "Instagram",
    link: "https://www.instagram.com/ttu.es/",
  },
  {
    img: "tiktok.svg",
    name: "TikTok",
    link: "https://www.tiktok.com/@ttu.es",
  },
  {
    img: "youtube.svg",
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC-0-p1u3-i-3x4-9-6-4",
  },
  {
    img: "x.svg",
    name: "Twitter",
    link: "https://x.com/ttu_es",
  },
  {
    img: "facebook.svg",
    name: "Facebook",
    link: "https://www.facebook.com/ttu.es",
  },
];
const Shortcut: Array<{ section: string; name: string; link: string }> = [
  {
    section: "Festival",
    name: "Inscripción Talleres",
    link: "/",
  },
  {
    section: "Escuela",
    name: "Postula",
    link: "/residencias",
  },
  {
    section: "RESIDENCIAS",
    name: "Postula",
    link: "/escuela",
  },
];
const MenuLink: Array<{ name: string; link: string }> = [
  {
    name: "Festival",
    link: "/festival",
  },
  {
    name: "Residencias",
    link: "/residencias",
  },
  {
    name: "Escuela",
    link: "/escuela",
  },
  {
    name: "Radiovisual",
    link: "/radiovisual",
  },
  {
    name: "Editorial",
    link: "/editorial",
  },
  {
    name: "Indice",
    link: "/indice",
  },
  {
    name: "TTU",
    link: "/ttu",
  },
];
