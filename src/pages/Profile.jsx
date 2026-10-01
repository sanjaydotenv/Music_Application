import React from "react";
import {
  FaChartBar,
  FaMusic,
  FaCloudArrowUp,
  FaUser,
  FaRightFromBracket,
  FaPen,
  FaLocationDot,
  FaCalendar,
  FaLink,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHeart,
  FaPlay,
  FaEye,
} from "react-icons/fa6";

const recentSongs = [
  {
    id: 1,
    title: "Midnight Echo",
    genre: "Synthwave",
    plays: "1.6K",
    likes: "342",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Rainy Window",
    genre: "Lo-Fi",
    plays: "3.2K",
    likes: "721",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Neon Velocity",
    genre: "Electronic",
    plays: "5.4K",
    likes: "1.1K",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=500&q=80",
  },
];

const Profile = () => {
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

          <nav className="space-y-2">
            <NavItem icon={<FaChartBar />} text="Dashboard" />

            <NavItem icon={<FaMusic />} text="My Songs" />

            <NavItem icon={<FaCloudArrowUp />} text="Upload Song" />

            <NavItem icon={<FaUser />} text="Profile" active />
          </nav>

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
              <span className="mr-2 text-[9px] text-gray-600">🔍</span>

              <input
                placeholder="Search your profile..."
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

          {/* ================= PROFILE CONTENT ================= */}

          <section className="p-7">
            {/* PAGE TITLE */}

            <div className="mb-6">
              <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-violet-400">
                Artist Account
              </p>

              <h2 className="text-2xl font-bold">My Profile</h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Manage your artist profile and public information.
              </p>
            </div>

            {/* ================= PROFILE HERO ================= */}

            <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/5 bg-[#171719]">
              {/* Background */}

              <div className="h-[150px] bg-gradient-to-r from-violet-950/80 via-[#241d35] to-[#111113]">
                <div className="absolute right-20 top-[-80px] h-[230px] w-[230px] rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              {/* Profile Content */}

              <div className="relative px-7 pb-6">
                {/* Avatar */}

                <div className="-mt-[55px] mb-4">
                  <div className="relative inline-block">
                    <img
                      src="https://i.pravatar.cc/200?img=12"
                      alt="Alex Rivera"
                      className="h-[105px] w-[105px] rounded-full border-4 border-[#171719] object-cover"
                    />

                    <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-[#171719] bg-green-500" />
                  </div>
                </div>

                {/* Info */}

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-xl font-bold">Alex Rivera</h1>

                      <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2 py-1 text-[7px] font-bold uppercase text-violet-400">
                        Pro Artist
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] text-gray-500">
                      @alexrivera
                    </p>

                    <p className="mt-3 max-w-xl text-[10px] leading-5 text-gray-400">
                      Independent music artist creating atmospheric electronic
                      sounds, dreamy synths and late-night melodies.
                    </p>

                    {/* Meta */}

                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                        <FaLocationDot className="text-violet-400" />
                        Los Angeles, CA
                      </div>

                      <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                        <FaCalendar className="text-violet-400" />
                        Joined March 2024
                      </div>

                      <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                        <FaLink className="text-violet-400" />
                        alexrivera.music
                      </div>
                    </div>
                  </div>

                  {/* Edit */}

                  <button className="flex h-9 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 text-[9px] font-semibold text-gray-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400">
                    <FaPen />
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* ================= STATS ================= */}

            <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              <ProfileStat title="Total Songs" value="42" icon={<FaMusic />} />

              <ProfileStat
                title="Total Plays"
                value="24.8K"
                icon={<FaPlay />}
              />

              <ProfileStat
                title="Total Likes"
                value="8.2K"
                icon={<FaHeart />}
              />

              <ProfileStat title="Followers" value="3.7K" icon={<FaUser />} />
            </div>

            {/* ================= TWO COLUMN ================= */}

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_320px]">
              {/* LEFT */}

              <div className="rounded-xl border border-white/5 bg-[#151517] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold">Recent Songs</h3>

                    <p className="mt-1 text-[9px] text-gray-500">
                      Your latest published tracks
                    </p>
                  </div>

                  <button className="text-[9px] font-semibold text-violet-400 hover:text-violet-300">
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {recentSongs.map((song) => (
                    <RecentSong key={song.id} song={song} />
                  ))}
                </div>
              </div>

              {/* RIGHT */}

              <div className="space-y-5">
                {/* SOCIALS */}

                <div className="rounded-xl border border-white/5 bg-[#151517] p-5">
                  <h3 className="text-sm font-bold">Social Links</h3>

                  <p className="mt-1 text-[9px] text-gray-500">
                    Connect with your audience
                  </p>

                  <div className="mt-5 space-y-3">
                    <SocialLink
                      icon={<FaInstagram />}
                      name="Instagram"
                      username="@alexrivera"
                    />

                    <SocialLink
                      icon={<FaTwitter />}
                      name="Twitter"
                      username="@alexrivera"
                    />

                    <SocialLink
                      icon={<FaYoutube />}
                      name="YouTube"
                      username="Alex Rivera Music"
                    />
                  </div>
                </div>

                {/* ABOUT */}

                <div className="rounded-xl border border-white/5 bg-[#151517] p-5">
                  <h3 className="text-sm font-bold">About Artist</h3>

                  <p className="mt-3 text-[10px] leading-5 text-gray-500">
                    Music producer and independent artist focused on electronic,
                    synthwave and ambient music. Every track is created
                    independently from my home studio.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag text="Synthwave" />
                    <Tag text="Electronic" />
                    <Tag text="Ambient" />
                    <Tag text="Lo-Fi" />
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
/* PROFILE STAT */
/* ================================================= */

const ProfileStat = ({ title, value, icon }) => {
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
/* RECENT SONG */
/* ================================================= */

const RecentSong = ({ song }) => {
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-transparent p-2 transition hover:border-white/5 hover:bg-white/[0.02]">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={song.image}
          alt={song.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
          <FaPlay className="text-[9px]" />
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[10px] font-semibold">{song.title}</h4>

        <p className="mt-1 text-[8px] text-gray-600">{song.genre}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-[8px] text-gray-600">
          <FaEye />
          {song.plays}
        </div>

        <div className="flex items-center gap-1 text-[8px] text-gray-600">
          <FaHeart />
          {song.likes}
        </div>
      </div>
    </div>
  );
};

/* ================================================= */
/* SOCIAL LINK */
/* ================================================= */

const SocialLink = ({ icon, name, username }) => {
  return (
    <button className="flex w-full items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left transition hover:border-violet-500/30 hover:bg-violet-500/5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-semibold">{name}</p>

        <p className="mt-0.5 text-[8px] text-gray-600">{username}</p>
      </div>
    </button>
  );
};

/* ================================================= */
/* TAG */
/* ================================================= */

const Tag = ({ text }) => {
  return (
    <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-2.5 py-1 text-[7px] text-violet-400">
      {text}
    </span>
  );
};

export default Profile;
