import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/LogoNav.png";
import DogTracks from "../../assets/img/DogTracks.png";
import { TbDoorEnter } from "react-icons/tb";

interface NavItems {
  title: string;
  path: string;
}

const navItems: NavItems[] = [
  {
    title: "Nosotros",
    path: "/about",
  },
  {
    title: "Adopciones",
    path: "/adoptions",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 left-0 h-16 flex justify-center bg-slate-50 z-10">
      <div className="container relative flex items-center justify-between">
        <div
          className="absolute top-16"
          style={{ rotate: "30deg", right: "10%" }}
        >
          <img src={DogTracks} className="w-10" alt="Dog Tracks" />
        </div>
        <div className="flex items-center">
          <div className="w-60 cursor-pointer mr-5">
            <NavLink to="/">
              <img
                src={Logo}
                className="w-full h-full object-cover"
                alt="Firucasa"
              />
            </NavLink>
          </div>
          <ul className="flex gap-3">
            {navItems.map((item) => (
              <NavLink to={item.path} key={item.title}>
                <li className="text-xl text-stone-700 font-semibold">
                  {item.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div>
          <button className="btn-main">
            Entrar <TbDoorEnter />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
