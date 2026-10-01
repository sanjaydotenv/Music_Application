import React from "react";
import {
  FaChartBar,
  FaCloudArrowUp,
  FaMusic,
  FaRightFromBracket,
  FaUser,
} from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router";

const AsideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const NavItem = ({ icon, text, path }) => {
    const active = location.pathname === path;

    return (
      <button
        onClick={() => navigate(path)}
        className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
          active
            ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
      >
        <span className="text-sm">{icon}</span>
        <span>{text}</span>
      </button>
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[240px] flex-col border-r border-white/10 bg-[#111113] px-5 py-7">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-bold tracking-wide text-white">
          Music<span className="text-violet-400">Hub</span>
        </h1>

        <p className="mt-1 text-xs text-gray-500">Artist Studio</p>
      </div>

      {/* Artist */}
      <div className="mb-7 rounded-xl border border-white/5 bg-white/[0.03] p-3">
        <p className="text-sm font-semibold text-white">Alex Morgan</p>

        <p className="mt-1 text-[11px] text-gray-500">Creator Account</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavItem icon={<FaChartBar />} text="Dashboard" path="/main" />

        <NavItem icon={<FaMusic />} text="My Songs" path="/main/songs" />

        <NavItem
          icon={<FaCloudArrowUp />}
          text="Upload Song"
          path="/main/uploadSong"
        />

        <NavItem icon={<FaUser />} text="Profile" path="/main/profile" />
      </nav>

      {/* Bottom Logout */}
      <div className="mt-auto">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400">
          <FaRightFromBracket className="text-xs" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AsideNav;
