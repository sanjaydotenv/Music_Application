import React from "react";
import { FaDesktop, FaBell, FaPlay, FaChevronRight } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const songs = [
  {
    title: "Midnight City",
    artist: "M83",
    image: "/songs/midnight-city.jpg",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    image: "/songs/after-hours.jpg",
  },
  {
    title: "Coffee & Rain",
    artist: "Lofi Girl",
    image: "/songs/coffee-rain.jpg",
  },
  {
    title: "Blue in Green",
    artist: "Miles Davis",
    image: "/songs/blue-in-green.jpg",
  },
  {
    title: "Ghost Voices",
    artist: "Virtual Self",
    image: "/songs/ghost-voices.jpg",
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    image: "/songs/night-we-met.jpg",
  },
];

const Favorites = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white relative overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      <div
        className="fixed inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(102,55,180,0.12),transparent_45%)]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 min-h-screen p-4 md:p-6">
        <div
          className="
            min-h-[calc(100vh-48px)]
            rounded-xl
            border-[3px]
            border-[#7955ff]
            bg-[#0d0d0f]/95
            shadow-[0_0_35px_rgba(100,70,255,0.15)]
            overflow-hidden
            flex
            flex-col
          "
        >
          {/* ================= NAVBAR ================= */}

          <Navbar />

          {/* ================= CONTENT ================= */}

          <main className="flex-1 px-7 md:px-10 py-10">
            {/* Heading */}

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Your Favorite Songs
                </h2>

                <p className="text-sm text-white/40 mt-2">
                  12 tracks saved to your library
                </p>
              </div>

              {/* Shuffle */}

              <button
                className="
                  self-start
                  md:self-auto
                  px-7
                  py-3
                  rounded-full
                  bg-[#c7a9ff]
                  text-[#20122f]
                  text-sm
                  font-semibold
                  flex
                  items-center
                  gap-3
                  shadow-[0_8px_25px_rgba(160,120,255,0.22)]
                  hover:brightness-110
                  transition
                "
              >
                <FaPlay className="text-[10px]" />
                Shuffle Play
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>

            {/* ================= SONG GRID ================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
            >
              {songs.map((song, index) => (
                <div
                  key={index}
                  className="
                    group
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-[#171719]
                    p-3
                    hover:bg-[#1c1b1f]
                    hover:border-[#7045b8]/40
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  {/* Image */}

                  <div
                    className="
                      relative
                      w-full
                      aspect-square
                      rounded-lg
                      overflow-hidden
                      bg-[#111114]
                    "
                  >
                    <img
                      src={song.image}
                      alt={song.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    {/* Play Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/40
                        opacity-0
                        group-hover:opacity-100
                        transition
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <button
                        className="
                          w-12
                          h-12
                          rounded-full
                          bg-[#a477ff]
                          text-white
                          flex
                          items-center
                          justify-center
                          shadow-lg
                        "
                      >
                        <FaPlay className="text-sm ml-0.5" />
                      </button>
                    </div>
                  </div>

                  {/* Song Details */}

                  <div className="px-2 pt-4 pb-2">
                    <h3 className="text-base font-bold text-white truncate">
                      {song.title}
                    </h3>

                    <p className="text-sm text-white/45 mt-1 truncate">
                      {song.artist}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* ================= FOOTER ================= */}

          <footer
            className="
              min-h-[65px]
              px-7
              md:px-10
              border-t
              border-white/[0.06]
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-3
              py-4
            "
          >
            <p className="text-xs text-white/40">
              © 2024 MusicHub. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs text-white/40">
              <button className="hover:text-white transition">
                Privacy Policy
              </button>

              <button className="hover:text-white transition">
                Terms of Service
              </button>

              <button className="hover:text-white transition">
                Help Center
              </button>

              <button className="hover:text-white transition">Contact</button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
