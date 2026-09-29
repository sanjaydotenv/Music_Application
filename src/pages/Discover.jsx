import React from "react";
import {
  FaDesktop,
  FaBell,
  FaPlay,
//   FaSearch,
  FaChevronRight,
  FaCrown,
} from "react-icons/fa6";
import { useNavigate } from "react-router";

const trendingSongs = [
  {
    title: "Midnight City",
    artist: "M83",
    image: "/songs/midnight-city.jpg",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "/songs/blinding-lights.jpg",
  },
  {
    title: "After Hours",
    artist: "The Weeknd",
    image: "/songs/after-hours.jpg",
  },
  {
    title: "Violet Dreams",
    artist: "Lana Del Rey",
    image: "/songs/violet-dreams.jpg",
  },
];

const Discover = () => {

  const nvigate = useNavigate()


  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white relative overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      <div
        className="fixed inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div
        className="
          fixed
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_35%,rgba(105,55,180,0.20),transparent_48%)]
        "
      />

      {/* ================= OUTER CONTAINER ================= */}

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
              <button
                className="
                  text-sm
                  font-semibold
                  text-white
                  border-b-2
                  border-[#a47aff]
                  pb-2
                "
              >
                Home
              </button>

              <button className="text-sm text-white/50 hover:text-white transition">
                Search
              </button>

              <button className="text-sm text-white/50 hover:text-white transition">
                Favorites
              </button>
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

          {/* ================= MAIN ================= */}

          <main className="flex-1 px-7 md:px-10 py-10">
            {/* ================= HERO ================= */}

            <section
              className="
                min-h-[330px]
                rounded-xl
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-5
                relative
                overflow-hidden
              "
            >
              {/* Hero glow */}

              <div
                className="
                  absolute
                  w-[500px]
                  h-[300px]
                  rounded-full
                  bg-[#693db5]/10
                  blur-[100px]
                "
              />

              <div className="relative z-10 max-w-3xl">
                <h2
                  className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    tracking-tight
                  "
                >
                  Discover Your{" "}
                  <span className="text-[#b58cff]">Next Favorite Song</span>
                </h2>

                <p className="text-sm md:text-base text-white/45 mt-5 leading-relaxed">
                  Stream millions of tracks and discover your next favorite
                  artists with high-quality audio and personalized
                  recommendations.
                </p>

                {/* Search */}

                <div
                  className="
                    relative
                    w-full
                    max-w-[520px]
                    mx-auto
                    mt-8
                  "
                >
                  {/* <FaSearch
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-sm
                      text-white/30
                    "
                  /> */}

                  <input
                    type="text"
                    placeholder="Search songs, artists, or albums..."
                    className="
                      w-full
                      h-12
                      rounded-full
                      border
                      border-white/10
                      bg-[#111113]
                      pl-11
                      pr-5
                      text-sm
                      text-white
                      placeholder:text-white/25
                      outline-none
                      focus:border-[#8144df]
                      focus:ring-1
                      focus:ring-[#8144df]/20
                    "
                  />
                </div>
              </div>
            </section>

            {/* ================= TRENDING ================= */}

            <section className="mt-8">
              {/* Heading */}

              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl md:text-2xl font-bold">
                  Trending Songs
                </h3>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-[#b58cff]
                    hover:text-white
                    transition
                  "
                >
                  View all
                  <FaChevronRight className="text-[9px]" />
                </button>
              </div>

              {/* Cards */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-4
                  gap-6
                "
              >
                {trendingSongs.map((song, index) => (
                  <div
                    key={index}
                    className="
                      group
                      rounded-xl
                      border
                      border-white/[0.06]
                      bg-[#171719]
                      p-3
                      hover:bg-[#1d1c20]
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
                          bg-black/45
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

                    {/* Details */}

                    <div className="px-2 pt-4 pb-2">
                      <h4 className="text-base font-bold truncate">
                        {song.title}
                      </h4>

                      <p className="text-sm text-white/40 mt-1">
                        {song.artist}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= PREMIUM BANNER ================= */}

            <section
              className="
                mt-10
                min-h-[210px]
                rounded-xl
                border
                border-white/[0.06]
                bg-[#181719]
                relative
                overflow-hidden
                flex
                items-center
              "
            >
              {/* Purple Glow */}

              <div
                className="
                  absolute
                  right-20
                  w-[250px]
                  h-[250px]
                  rounded-full
                  bg-[#936cff]/10
                  blur-[60px]
                "
              />

              {/* Content */}

              <div className="relative z-10 px-7 md:px-10 max-w-[620px]">
                <div className="flex items-center gap-2 mb-3">
                  <FaCrown className="text-[#c2a1ff]" />

                  <span className="text-sm font-semibold text-[#b58cff]">
                    MusicHub Premium
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold">
                  Support the creators you love
                </h3>

                <p className="text-sm text-white/40 mt-3 leading-relaxed">
                  Get ad-free listening, unlimited skips, high-quality audio and
                  exclusive features with MusicHub Premium.
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    className="
                      px-5
                      py-2.5
                      rounded-full
                      bg-[#c3a4ff]
                      text-[#24152f]
                      text-xs
                      font-semibold
                      hover:brightness-110
                      transition
                    "
                  >
                    Go Premium
                  </button>

                  <button
                    className="
                      px-5
                      py-2.5
                      rounded-full
                      border
                      border-white/10
                      text-xs
                      text-white/60
                      hover:text-white
                      hover:border-white/20
                      transition
                    "
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Premium Icon */}

              <div
                className="
                  absolute
                  right-16
                  hidden
                  md:flex
                  w-24
                  h-24
                  rounded-full
                  border-2
                  border-[#c1a1ff]
                  items-center
                  justify-center
                  shadow-[0_0_35px_rgba(180,140,255,0.35)]
                "
              >
                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#c1a1ff]/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaPlay className="text-[#c1a1ff] ml-1" />
                </div>
              </div>
            </section>
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

export default Discover;
