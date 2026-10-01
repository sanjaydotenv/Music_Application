import React, { useMemo, useState } from "react";
import {
  FaChartBar,
  FaMusic,
  FaCloudArrowUp,
  FaUser,
  FaRightFromBracket,
  FaMagnifyingGlass,
  FaHeart,
  FaEye,
  FaPen,
  FaTrash,
  FaPlus,
  FaEllipsisVertical,
  FaPlay,
  FaFilter,
} from "react-icons/fa6";
import AsideNav from "../components/AsideNav";

const songsData = [
  {
    id: 1,
    title: "Midnight Echo",
    genre: "Synthwave",
    album: "Neon Dreams",
    date: "May 12, 2026",
    plays: "1.6K",
    likes: "342",
    duration: "3:42",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    title: "Rainy Window",
    genre: "Lo-Fi",
    album: "After Hours",
    date: "Apr 28, 2026",
    plays: "3.2K",
    likes: "721",
    duration: "4:18",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    title: "Event Horizon",
    genre: "Ambient",
    album: "Deep Space",
    date: "Mar 15, 2026",
    plays: "850",
    likes: "124",
    duration: "5:04",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    title: "Neon Velocity",
    genre: "Electronic",
    album: "Cyber City",
    date: "Feb 20, 2026",
    plays: "5.4K",
    likes: "1.1K",
    duration: "3:28",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    title: "Lost In Tokyo",
    genre: "Synthwave",
    album: "Night Drive",
    date: "Jan 18, 2026",
    plays: "2.8K",
    likes: "490",
    duration: "4:02",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    title: "Ocean Lights",
    genre: "Chill",
    album: "Blue",
    date: "Dec 09, 2025",
    plays: "1.2K",
    likes: "267",
    duration: "3:51",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 7,
    title: "Silent Streets",
    genre: "Lo-Fi",
    album: "Late Nights",
    date: "Nov 21, 2025",
    plays: "980",
    likes: "183",
    duration: "3:36",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 8,
    title: "Digital Dreams",
    genre: "Electronic",
    album: "Future",
    date: "Oct 11, 2025",
    plays: "4.7K",
    likes: "932",
    duration: "4:25",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=700&q=80",
  },
];

const MySongs = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");

  // UI filtering only.
  // API/data logic tu yaha baad me laga sakta hai.
  const filteredSongs = useMemo(() => {
    return songsData.filter((song) => {
      const searchMatch =
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.album.toLowerCase().includes(search.toLowerCase());

      const genreMatch = genre === "All Genres" || song.genre === genre;

      return searchMatch && genreMatch;
    });
  }, [search, genre]);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}

        <aside className="fixed left-0 top-0 z-50 flex h-screen w-[220px] flex-col border-r border-white/10 bg-[#151516] px-4 py-6">
          {/* Logo */}

          <div className="mb-8 px-2">
            <h1 className="text-[15px] font-bold">
              Music<span className="text-violet-400">Hub</span>
            </h1>

            <p className="mt-0.5 text-[8px] text-gray-500">Artist Portal</p>
          </div>

          {/* Navigation */}

          <AsideNav />

          {/* Artist */}

          <div className="mt-auto">
            <div className="mb-5 flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-2">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="artist"
                className="h-7 w-7 rounded-full object-cover"
              />

              <div>
                <p className="text-[9px] font-semibold">Alex Rivera</p>

                <p className="text-[7px] text-gray-500">Music Artist</p>
              </div>
            </div>

            <button className="flex w-full items-center gap-2 px-2 py-2 text-[10px] text-gray-400 transition hover:text-red-400">
              <FaRightFromBracket />
              Logout
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}

        <main className="ml-[220px] min-h-screen flex-1">
          {/* TOP NAVBAR */}

          <header className="flex h-[58px] items-center justify-between border-b border-white/10 bg-[#0d0d0f] px-7">
            <div className="flex h-8 w-[270px] items-center rounded-full border border-white/5 bg-white/[0.04] px-3">
              <FaMagnifyingGlass className="mr-2 text-[9px] text-gray-600" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your songs..."
                className="w-full bg-transparent text-[9px] text-white outline-none placeholder:text-gray-600"
              />
            </div>

            <div className="flex items-center gap-5">
              <button className="text-xs text-gray-400 hover:text-white">
                🔔
              </button>

              <div className="h-7 w-7 overflow-hidden rounded-full border border-violet-400/40">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* ================= CONTENT ================= */}

          <section className="p-7">
            {/* HEADER */}

            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Artist Library
                </p>

                <h2 className="text-2xl font-bold">My Songs</h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  Manage all your uploaded music in one place.
                </p>
              </div>

              <button className="flex h-9 items-center justify-center gap-2 rounded-md bg-violet-500 px-5 text-[10px] font-bold transition hover:bg-violet-600">
                <FaPlus />
                Upload Song
              </button>
            </div>

            {/* ================= STATS ================= */}

            <div className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <MiniStat icon={<FaMusic />} title="Total Songs" value="42" />

              <MiniStat icon={<FaPlay />} title="Total Plays" value="24.8K" />

              <MiniStat icon={<FaHeart />} title="Total Likes" value="8.2K" />
            </div>

            {/* ================= TOOLBAR ================= */}

            <div className="mb-5 flex flex-col gap-3 rounded-xl border border-white/5 bg-[#151517] p-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[10px] text-gray-500">
                <FaFilter />

                <span>Filter Songs</span>
              </div>

              <div className="flex gap-2">
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="h-8 rounded-md border border-white/10 bg-[#0d0d0f] px-3 text-[9px] text-gray-400 outline-none focus:border-violet-500"
                >
                  <option>All Genres</option>

                  <option>Synthwave</option>

                  <option>Lo-Fi</option>

                  <option>Ambient</option>

                  <option>Electronic</option>

                  <option>Chill</option>
                </select>
              </div>
            </div>

            {/* ================= SONG GRID ================= */}

            {filteredSongs.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {filteredSongs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            ) : (
              /* EMPTY STATE */

              <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#121214]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                  <FaMusic />
                </div>

                <h3 className="text-sm font-semibold">No songs found</h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  Try changing your search or filter.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

/* ================================================= */
/* NAV ITEM */
/* ================================================= */

const NavItem = ({ icon, text, active }) => {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-[10px] transition ${
        active
          ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="text-[9px]">{icon}</span>

      {text}
    </button>
  );
};

/* ================================================= */
/* MINI STAT */
/* ================================================= */

const MiniStat = ({ icon, title, value }) => {
  return (
    <div className="rounded-xl border border-white/5 bg-[#151517] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
          {icon}
        </div>

        <div>
          <p className="text-[8px] text-gray-500">{title}</p>

          <p className="mt-0.5 text-base font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

/* ================================================= */
/* SONG CARD */
/* ================================================= */

const SongCard = ({ song }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/5 bg-[#151517] transition duration-300 hover:-translate-y-1 hover:border-violet-500/30">
      {/* IMAGE */}

      <div className="relative h-[190px] overflow-hidden">
        <img
          src={song.image}
          alt={song.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Genre */}

        <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/50 px-2 py-1 text-[8px] font-semibold text-violet-300 backdrop-blur-md">
          {song.genre}
        </span>

        {/* Menu */}

        <button className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-black/50 text-gray-300 backdrop-blur-md transition hover:bg-violet-500 hover:text-white">
          <FaEllipsisVertical className="text-[9px]" />
        </button>

        {/* Play Button */}

        <button className="absolute bottom-3 left-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-violet-500 text-white opacity-0 shadow-lg shadow-violet-500/30 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <FaPlay className="ml-0.5 text-[10px]" />
        </button>

        {/* Duration */}

        <span className="absolute bottom-3 right-3 text-[8px] text-white/70">
          {song.duration}
        </span>
      </div>

      {/* DETAILS */}

      <div className="p-4">
        <div className="mb-1 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold">{song.title}</h3>

            <p className="mt-1 truncate text-[9px] text-gray-500">
              {song.album}
            </p>
          </div>
        </div>

        <p className="mt-2 text-[8px] text-gray-600">Uploaded {song.date}</p>

        {/* Stats */}

        <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-3">
          <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
            <FaEye />

            {song.plays}
          </div>

          <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
            <FaHeart />

            {song.likes}
          </div>
        </div>

        {/* Actions */}

        <div className="mt-3 flex gap-2">
          <button className="flex h-8 flex-1 items-center justify-center gap-2 rounded-md border border-white/5 bg-white/[0.03] text-[9px] text-gray-400 transition hover:bg-violet-500/10 hover:text-violet-400">
            <FaPen />
            Edit
          </button>

          <button className="flex h-8 w-9 items-center justify-center rounded-md border border-white/5 bg-white/[0.03] text-[9px] text-gray-500 transition hover:bg-red-500/10 hover:text-red-400">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySongs;
