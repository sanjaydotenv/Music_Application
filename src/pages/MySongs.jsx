import React, { useState } from "react";
import {
  FaMusic,
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

const songsData = JSON.parse(localStorage.getItem("songsData")) || [];

console.log(songsData);

const MySongs = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}

        <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/10 bg-[#151516] px-5 py-7">
          {/* Logo */}

          <div className="mb-10 px-2">
            <h1 className="text-xl font-bold tracking-tight">
              Music<span className="text-violet-400">Hub</span>
            </h1>

            <p className="mt-1 text-xs text-gray-500">Artist Portal</p>
          </div>

          {/* Navigation */}

          <AsideNav />

          {/* Artist */}

          <div className="mt-auto">
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-3">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="artist"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold">Alex Rivera</p>

                <p className="mt-0.5 text-xs text-gray-500">Music Artist</p>
              </div>
            </div>

            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400">
              <FaRightFromBracket />
              Logout
            </button>
          </div>
        </aside>

        {/* ================= MAIN ================= */}

        <main className="ml-[260px] min-h-screen flex-1">
          {/* ================= TOP NAVBAR ================= */}

          <header className="flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0d0d0f] px-8">
            {/* Search */}

            <div className="flex h-10 w-[340px] items-center rounded-full border border-white/10 bg-white/[0.04] px-4">
              <FaMagnifyingGlass className="mr-3 text-sm text-gray-600" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your songs..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {/* Right */}

            <div className="flex items-center gap-6">
              <button className="text-lg text-gray-400 transition hover:text-white">
                🔔
              </button>

              <div className="h-9 w-9 overflow-hidden rounded-full border border-violet-400/40">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* ================= CONTENT ================= */}

          <section className="p-8 xl:p-10">
            {/* HEADER */}

            <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Artist Library
                </p>

                <h2 className="text-4xl font-bold tracking-tight">My Songs</h2>

                <p className="mt-2 text-sm text-gray-500">
                  Manage all your uploaded music in one place.
                </p>
              </div>

              <button className="flex h-11 items-center justify-center gap-2 rounded-lg bg-violet-500 px-6 text-sm font-bold shadow-lg shadow-violet-500/10 transition hover:bg-violet-600">
                <FaPlus />
                Upload Song
              </button>
            </div>

            {/* ================= STATS ================= */}

            <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              <MiniStat
                icon={<FaMusic />}
                title="Total Songs"
                value={songsData.length}
              />

              <MiniStat icon={<FaPlay />} title="Total Plays" value="24.8K" />

              <MiniStat icon={<FaHeart />} title="Total Likes" value="8.2K" />
            </div>

            {/* ================= TOOLBAR ================= */}

            <div className="mb-7 flex flex-col gap-4 rounded-xl border border-white/5 bg-[#151517] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <FaFilter />
                <span>Filter Songs</span>
              </div>

              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="h-10 rounded-lg border border-white/10 bg-[#0d0d0f] px-4 text-sm text-gray-400 outline-none transition focus:border-violet-500"
              >
                <option>All Genres</option>
                <option>Synthwave</option>
                <option>Lo-Fi</option>
                <option>Ambient</option>
                <option>Electronic</option>
                <option>Chill</option>
              </select>
            </div>

            <div className="grid grid-cols-4 gap-5">
              {songsData.map((song) => {
                return <SongCard key={song.songTitle} song={song} />;
              })}
            </div>

            {/* ================= SONG GRID ================= */}
          </section>
        </main>
      </div>
    </div>
  );
};

/* ================================================= */
/* MINI STAT */
/* ================================================= */

const MiniStat = ({ icon, title, value }) => {
  return (
    <div className="rounded-xl border border-white/5 bg-[#151517] p-5 transition hover:border-violet-500/20">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-400">
          {icon}
        </div>

        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <p className="mt-1 text-2xl font-bold">{value}</p>
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
    <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#151517] transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5">
      {/* IMAGE */}
      <div className="relative h-[230px] overflow-hidden">
        <img
          src={song.albumCover}
          alt={song.songTitle}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

        {/* Genre */}
        <span className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-semibold text-violet-300 backdrop-blur-md">
          {song.genre}
        </span>

        {/* Play Button */}
        <button className="absolute bottom-4 left-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-violet-500 text-white opacity-0 shadow-lg shadow-violet-500/30 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <FaPlay className="ml-0.5 text-sm" />
        </button>
      </div>

      {/* DETAILS */}
      <div className="p-5">
        {/* Title + Artist */}
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-white">
            {song.songTitle}
          </h3>

          <p className="mt-1 truncate text-sm text-gray-400">
            {song.artistName}
          </p>
        </div>

        {/* Description */}
        {song.description && (
          <p className="mt-3 line-clamp-2 text-sm text-gray-500">
            {song.description}
          </p>
        )}

        {/* Genre */}
        <div className="mt-4 flex items-center">
          <span className="rounded-md bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-400">
            {song.genre}
          </span>
        </div>

        {/* Audio URL */}
        <div className="mt-4 border-t border-white/5 pt-4">
          <p className="truncate text-xs text-gray-600">
            Audio: {song.audioUrl}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <button className="flex h-10 w-11 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-sm text-gray-500 transition hover:bg-red-500/10 hover:text-red-400">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySongs;
