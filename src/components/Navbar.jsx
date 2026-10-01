import React from "react";
import { FaDesktop, FaBell } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/main",
    },
    {
      name: "Favorites",
      path: "/main/favorite",
    },
  ];

  return (
    <header
      className="
        h-[76px]
        px-7
        md:px-10
        border-b
        border-white/[0.06]
        flex
        items-center
        justify-between
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaDesktop className="text-lg text-white/80" />

        <h1 className="text-xl md:text-2xl font-bold text-[#c29cff]">
          MusicHub
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `
                text-sm
                font-semibold
                pb-2
                border-b-2
                transition
                ${
                  isActive
                    ? "text-white border-[#a47aff]"
                    : "text-white/50 border-transparent hover:text-white"
                }
              `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="text-white/60 hover:text-white transition">
          <FaBell />
        </button>

        <div
          className="
            w-9
            h-9
            rounded-full
            border
            border-white/10
            bg-[#242126]
            flex
            items-center
            justify-center
            text-sm
          "
        >
          👤
        </div>
      </div>
    </header>
  );
};

export default Navbar;
