import React from "react";
import {
  FaChartBar,
  FaMusic,
  FaCloudArrowUp,
  FaUser,
  FaRightFromBracket,
  FaHeart,
  FaCompactDisc,
  FaPen,
  FaTrash,
  FaEye,
  FaPlus,
  FaBell,
} from "react-icons/fa6";
import { useNavigate } from "react-router";

const songs = [
  {
    id: 1,
    title: "Midnight Echo",
    genre: "Synthwave",
    date: "May 12, 2026",
    plays: "1.6k",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Rainy Window",
    genre: "Lo-Fi",
    date: "Apr 28, 2026",
    plays: "3.2k",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Event Horizon",
    genre: "Ambient",
    date: "Mar 15, 2026",
    plays: "850",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Neon Velocity",
    genre: "Techno",
    date: "Feb 20, 2026",
    plays: "5.4k",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80",
  },
  
];

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className="h-full bg-[#0b0b0d] text-white">
      {/* MAIN WRAPPER */}
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
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
            <NavItem icon={<FaChartBar />} text="Dashboard" active />

            <NavItem icon={<FaMusic />} text="My Songs" />

            <div onClick={() => navigate("/main/uploadSong")}>
                <NavItem icon={<FaCloudArrowUp />} text="Upload Song" />
            </div>

            <NavItem icon={<FaUser />} text="Profile" />
          </nav>

          {/* Bottom Logout */}
          <div className="mt-auto">
            <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400">
              <FaRightFromBracket className="text-xs" />
              Logout
            </button>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="ml-[240px] flex-1">
          {/* TOP NAVBAR */}
          <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0b0b0d]/90 px-8 backdrop-blur-xl">
            {/* Search */}
            <div className="flex h-10 w-[300px] items-center rounded-lg border border-white/10 bg-white/[0.03] px-4">
              <span className="mr-3 text-gray-500">🔍</span>

              <input
                type="text"
                placeholder="Search analytics or tracks..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
              <button className="text-gray-400 transition hover:text-white">
                <FaBell />
              </button>

              <div className="flex items-center gap-3">
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-semibold">Alex Morgan</p>

                  <p className="text-[10px] text-violet-400">PRO ARTIST</p>
                </div>

                <div className="h-9 w-9 overflow-hidden rounded-full border border-violet-400/50">
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* DASHBOARD CONTENT */}
          <section className="p-8">
            {/* Welcome */}
            <div className="relative mb-6 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#302e34] to-[#242227] p-7">
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-violet-400">
                  Artist Dashboard
                </p>

                <h2 className="text-3xl font-bold">Welcome Back, Alex</h2>

                <p className="mt-2 max-w-xl text-sm text-gray-400">
                  Your music reached{" "}
                  <span className="font-semibold text-violet-300">
                    12.4k new listeners
                  </span>{" "}
                  this week. Keep up the rhythm!
                </p>

                <div className="mt-5 flex gap-3">
                  <button className="rounded-lg bg-violet-500 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-600">
                    View Trends
                  </button>

                  <button className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-gray-300 transition hover:bg-white/10">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* ================= STATS ================= */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard icon={<FaMusic />} title="Total Songs" value="42" />

              <StatCard icon={<FaHeart />} title="Total Likes" value="8.2k" />

              <StatCard
                icon={<FaCompactDisc />}
                title="Total Albums"
                value="5"
              />
            </div>

            {/* ================= SONGS ================= */}
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">My Songs</h3>

                  <p className="text-xs text-gray-500">
                    Manage your published discography
                  </p>
                </div>

                <button className="text-xs font-semibold text-violet-400 transition hover:text-violet-300">
                  View All
                </button>
              </div>

              {/* Song Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {songs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="flex flex-col gap-3 border-t border-white/10 px-8 py-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 MusicHub. All rights reserved.</p>

            <div className="flex gap-5">
              <span className="cursor-pointer hover:text-gray-300">
                Privacy Policy
              </span>

              <span className="cursor-pointer hover:text-gray-300">
                Terms of Service
              </span>

              <span className="cursor-pointer hover:text-gray-300">
                Cookies
              </span>

              <span className="cursor-pointer hover:text-gray-300">
                Help Center
              </span>
            </div>
          </footer>
        </main>
      </div>

      {/* ================= FLOATING UPLOAD ================= */}
      <button className="fixed bottom-7 right-8 z-50 flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold shadow-xl shadow-violet-500/20 transition hover:scale-105 hover:bg-violet-600">
        <FaPlus />
        Upload Song
      </button>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const NavItem = ({ icon, text, active }) => {
  return (
    <button
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

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="group rounded-xl border border-white/10 bg-[#151517] p-5 transition hover:border-violet-500/30 hover:bg-[#19191c]">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/20">
          {icon}
        </div>

        <div>
          <p className="text-xs text-gray-500">{title}</p>

          <p className="mt-1 text-xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

const SongCard = ({ song }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#151517] transition duration-300 hover:-translate-y-1 hover:border-violet-500/30">
      {/* Image */}
      <div className="relative h-[190px] overflow-hidden">
        <img
          src={song.image}
          alt={song.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Genre */}
        <span className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/50 px-2 py-1 text-[9px] font-semibold uppercase text-violet-300 backdrop-blur-md">
          {song.genre}
        </span>

        {/* Play */}
        <button className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 opacity-0 shadow-lg shadow-violet-500/30 transition group-hover:opacity-100">
          ▶
        </button>
      </div>

      {/* Details */}
      <div className="p-4">
        <h4 className="truncate text-sm font-bold">{song.title}</h4>

        <p className="mt-1 text-[10px] text-gray-500">Uploaded {song.date}</p>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
          <div className="flex gap-3">
            <button className="text-gray-500 transition hover:text-violet-400">
              <FaPen className="text-xs" />
            </button>

            <button className="text-gray-500 transition hover:text-red-400">
              <FaTrash className="text-xs" />
            </button>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            <FaEye />
            {song.plays}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
