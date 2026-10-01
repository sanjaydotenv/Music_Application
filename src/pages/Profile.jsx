import React from "react";
import {
  FaChartBar,
  FaMusic,
  FaCloudArrowUp,
  FaUser,
  FaRightFromBracket,
  FaPen,
  FaLocationDot,
  FaCalendarDays,
  FaLink,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
  FaPlay,
  FaEye,
  FaHeadphones,
  FaArrowTrendUp,
} from "react-icons/fa6";

import AsideNav from "../components/AsideNav";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="flex min-h-screen">
        {/* ================================================= */}
        {/* SIDEBAR */}
        {/* ================================================= */}

        <AsideNav />

        {/* ================================================= */}
        {/* MAIN */}
        {/* ================================================= */}

        <main className="ml-[260px] min-h-screen flex-1">
          {/* ================================================= */}
          {/* TOP BAR */}
          {/* ================================================= */}

          <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0d0d0f]/95 px-8 backdrop-blur-xl">
            {/* Search */}

            <div className="flex h-11 w-[360px] items-center rounded-full border border-white/10 bg-white/[0.04] px-4">
              <span className="mr-3 text-sm text-gray-500">🔍</span>

              <input
                type="text"
                placeholder="Search your music..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {/* Right */}

            <div className="flex items-center gap-6">
              <button className="text-lg text-gray-400 transition hover:text-white">
                🔔
              </button>

              <div className="h-10 w-10 overflow-hidden rounded-full border border-violet-400/50">
                <img
                  src="https://i.pravatar.cc/200?img=12"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* ================================================= */}
          {/* PAGE */}
          {/* ================================================= */}

          <section className="px-8 py-10">
            {/* PAGE TITLE */}

            <div className="mb-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Artist Account
              </p>

              <h1 className="text-4xl font-bold tracking-tight">My Profile</h1>

              <p className="mt-2 text-base text-gray-500">
                Manage your artist identity and public information.
              </p>
            </div>

            {/* ================================================= */}
            {/* PROFILE HERO */}
            {/* ================================================= */}

            <div className="relative mb-7 overflow-hidden rounded-2xl border border-white/10 bg-[#171719]">
              {/* COVER */}

              <div className="relative h-[230px] overflow-hidden bg-gradient-to-r from-[#241348] via-[#3a2067] to-[#111114]">
                {/* Decorative circles */}

                <div className="absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute left-[40%] top-[20px] h-[220px] w-[220px] rounded-full bg-fuchsia-500/10 blur-3xl" />

                {/* Music waves */}

                <div className="absolute bottom-0 left-0 right-0 flex h-28 items-end justify-center gap-1 opacity-20">
                  {Array.from({ length: 70 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-[3px] rounded-full bg-white"
                      style={{
                        height: `${20 + ((index * 17) % 70)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* PROFILE BODY */}

              <div className="relative px-9 pb-8">
                {/* AVATAR */}

                <div className="-mt-[76px] flex items-end justify-between">
                  <div className="relative">
                    <div className="h-[150px] w-[150px] rounded-full border-[6px] border-[#171719] bg-[#171719] p-1">
                      <img
                        src="https://i.pravatar.cc/300?img=12"
                        alt="Alex Rivera"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>

                    {/* ONLINE */}

                    <div className="absolute bottom-5 right-5 h-5 w-5 rounded-full border-[3px] border-[#171719] bg-green-500" />
                  </div>

                  {/* EDIT */}

                  <button className="mb-2 flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-gray-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400">
                    <FaPen />
                    Edit Profile
                  </button>
                </div>

                {/* NAME */}

                <div className="mt-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-bold">Alex Rivera</h2>

                    <span className="rounded-full bg-violet-500/15 px-3 py-1.5 text-xs font-semibold text-violet-400">
                      PRO ARTIST
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-gray-500">@alexrivera</p>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                    Independent music artist creating atmospheric electronic
                    sounds, dreamy synths and late-night melodies. I create
                    music that feels like a journey through another world.
                  </p>

                  {/* META */}

                  <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                    <MetaItem
                      icon={<FaLocationDot />}
                      text="Los Angeles, California"
                    />

                    <MetaItem
                      icon={<FaCalendarDays />}
                      text="Joined March 2024"
                    />

                    <MetaItem icon={<FaLink />} text="alexrivera.music" />
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* STATS */}
            {/* ================================================= */}

            <div className="mb-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <BigStat
                icon={<FaMusic />}
                title="Total Songs"
                value="42"
                change="+6 this month"
              />

              <BigStat
                icon={<FaHeadphones />}
                title="Total Plays"
                value="24.8K"
                change="+18.4%"
              />

              <BigStat
                icon={<FaHeart />}
                title="Total Likes"
                value="8.2K"
                change="+12.7%"
              />

              <BigStat
                icon={<FaUser />}
                title="Followers"
                value="3.7K"
                change="+8.3%"
              />
            </div>

            {/* ================================================= */}
            {/* CONTENT GRID */}
            {/* ================================================= */}

            <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1fr_380px]">
              {/* ================================================= */}
              {/* LEFT */}
              {/* ================================================= */}

              <div className="space-y-7">
                {/* RECENT SONGS */}

                <div className="rounded-2xl border border-white/10 bg-[#151517] p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Recent Songs</h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Your latest published tracks
                      </p>
                    </div>

                    <button className="text-sm font-semibold text-violet-400 hover:text-violet-300">
                      View All
                    </button>
                  </div>

                  <div className="space-y-3">
                    <SongRow
                      image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80"
                      title="Midnight Echo"
                      genre="Synthwave"
                      plays="1.6K"
                      likes="342"
                    />

                    <SongRow
                      image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80"
                      title="Rainy Window"
                      genre="Lo-Fi"
                      plays="3.2K"
                      likes="721"
                    />

                    <SongRow
                      image="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=500&q=80"
                      title="Event Horizon"
                      genre="Ambient"
                      plays="850"
                      likes="124"
                    />

                    <SongRow
                      image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80"
                      title="Neon Velocity"
                      genre="Electronic"
                      plays="5.4K"
                      likes="1.1K"
                    />
                  </div>
                </div>

                {/* ABOUT */}

                <div className="rounded-2xl border border-white/10 bg-[#151517] p-7">
                  <h3 className="text-xl font-bold">About Me</h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    I'm an independent artist and music producer passionate
                    about creating immersive electronic experiences. My music
                    combines atmospheric textures, synthwave melodies and modern
                    electronic production.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    My goal is to create songs that people can connect with
                    whether they're working late at night, travelling or simply
                    looking for something different to listen to.
                  </p>

                  {/* GENRES */}

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-semibold text-gray-300">
                      Music Genres
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <GenreTag text="Synthwave" />
                      <GenreTag text="Electronic" />
                      <GenreTag text="Ambient" />
                      <GenreTag text="Lo-Fi" />
                      <GenreTag text="Chill" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* RIGHT */}
              {/* ================================================= */}

              <div className="space-y-7">
                {/* SOCIAL */}

                <div className="rounded-2xl border border-white/10 bg-[#151517] p-7">
                  <h3 className="text-xl font-bold">Social Links</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Connect with your audience
                  </p>

                  <div className="mt-6 space-y-3">
                    <SocialCard
                      icon={<FaInstagram />}
                      name="Instagram"
                      username="@alexrivera"
                    />

                    <SocialCard
                      icon={<FaTwitter />}
                      name="Twitter"
                      username="@alexrivera"
                    />

                    <SocialCard
                      icon={<FaYoutube />}
                      name="YouTube"
                      username="Alex Rivera Music"
                    />
                  </div>
                </div>

                {/* TOP SONG */}

                <div className="rounded-2xl border border-white/10 bg-[#151517] p-7">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <FaArrowTrendUp />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">Top Track</h3>

                      <p className="text-xs text-gray-500">
                        Your most played song
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <div className="relative h-[210px]">
                      <img
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                        alt="Neon Velocity"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      <button className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 shadow-lg shadow-violet-500/30">
                        <FaPlay className="ml-0.5 text-sm" />
                      </button>
                    </div>

                    <div className="bg-[#101012] p-4">
                      <h4 className="text-base font-bold">Neon Velocity</h4>

                      <p className="mt-1 text-xs text-gray-500">
                        Electronic • Cyber City
                      </p>

                      <div className="mt-4 flex gap-5 text-xs text-gray-500">
                        <span className="flex items-center gap-2">
                          <FaEye />
                          5.4K
                        </span>

                        <span className="flex items-center gap-2">
                          <FaHeart />
                          1.1K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

/* ================================================= */
/* META ITEM */
/* ================================================= */

const MetaItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span className="text-violet-400">{icon}</span>

      {text}
    </div>
  );
};

/* ================================================= */
/* BIG STAT */
/* ================================================= */

const BigStat = ({ icon, title, value, change }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#151517] p-5 transition hover:border-violet-500/30">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
          {icon}
        </div>

        <span className="text-xs font-semibold text-green-400">{change}</span>
      </div>

      <p className="mt-5 text-sm text-gray-500">{title}</p>

      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
};

/* ================================================= */
/* SONG ROW */
/* ================================================= */

const SongRow = ({ image, title, genre, plays, likes }) => {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/[0.025]">
      {/* IMAGE */}

      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
          <FaPlay className="text-sm" />
        </div>
      </div>

      {/* INFO */}

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-semibold">{title}</h4>

        <p className="mt-1 text-xs text-gray-500">{genre}</p>
      </div>

      {/* STATS */}

      <div className="hidden items-center gap-6 sm:flex">
        <span className="flex items-center gap-2 text-xs text-gray-500">
          <FaEye />
          {plays}
        </span>

        <span className="flex items-center gap-2 text-xs text-gray-500">
          <FaHeart />
          {likes}
        </span>
      </div>
    </div>
  );
};

/* ================================================= */
/* SOCIAL CARD */
/* ================================================= */

const SocialCard = ({ icon, name, username }) => {
  return (
    <button className="flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition hover:border-violet-500/40 hover:bg-violet-500/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-lg text-violet-400">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold">{name}</p>

        <p className="mt-1 text-xs text-gray-500">{username}</p>
      </div>
    </button>
  );
};

/* ================================================= */
/* GENRE TAG */
/* ================================================= */

const GenreTag = ({ text }) => {
  return (
    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
      {text}
    </span>
  );
};

export default Profile;
