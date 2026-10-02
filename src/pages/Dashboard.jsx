import React, { useState } from "react";
import {
  FaMusic,
  FaHeart,
  FaCompactDisc,
  FaPen,
  FaTrash,
  FaPlus,
  FaBell,
  FaPlay,
} from "react-icons/fa6";
import AsideNav from "../components/AsideNav";

const songs = JSON.parse(localStorage.getItem("songsData")) || [];

const Dashboard = () => {
  return (
    <div className="h-full bg-[#0b0b0d] text-white">
      {/* MAIN WRAPPER */}
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
        <AsideNav />

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
              <StatCard
                icon={<FaMusic />}
                title="Total Songs"
                value={songs.length}
              />

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
              </div>

              {/* Song Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {songs.map((song) => (
                  <SongCard key={song.songTitle} song={song} />
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
  const handleDelete = (song) => {
    const filteredSongs = songs.filter(
      (sng) => sng.songTitle !== song.songTitle,
    );
    localStorage.setItem("songsData", JSON.stringify(filteredSongs));
    window.location.reload();
  };

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
        <button
          onClick={() => {
            console.log(song.audioUrl)
            window.open(song.audioUrl);
          }}
          className="absolute bottom-4 left-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-violet-500 text-white opacity-0 shadow-lg shadow-violet-500/30 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
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
          <button
            onClick={() => handleDelete(song)}
            className="flex h-10 w-11 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-sm text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
