import React, { useRef, useState } from "react";
import {
  FaCloudArrowUp,
  FaChartBar,
  FaMusic,
  FaUser,
  FaRightFromBracket,
  FaImage,
  FaMusic as FaAudio,
  FaChevronDown,
} from "react-icons/fa6";

const UploadSong = () => {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    songTitle: "",
    artistName: "",
    genre: "",
    albumCover: "",
    audioUrl: "",
    description: "",
  });

  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setAudioFile(file);
      setFormData((prev) => ({
        ...prev,
        audioUrl: file.name,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log({
        ...formData,
        audioFile,
      });
    }, 1500);
  };

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
            <NavItem icon={<FaCloudArrowUp />} text="Upload Song" active />

            <NavItem icon={<FaChartBar />} text="Dashboard" />

            <NavItem icon={<FaMusic />} text="My Songs" />

            <NavItem icon={<FaUser />} text="Profile" />
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
          {/* TOP BAR */}
          <header className="flex h-[58px] items-center justify-between border-b border-white/10 bg-[#0d0d0f] px-6">
            {/* Search */}
            <div className="flex h-8 w-[250px] items-center rounded-full border border-white/5 bg-white/[0.04] px-3">
              <span className="mr-2 text-[10px] text-gray-500">🔍</span>

              <input
                placeholder="Search track analytics..."
                className="w-full bg-transparent text-[9px] text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
              <button className="text-xs text-gray-400 hover:text-white">
                🔔
              </button>

              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-violet-400/40">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* ================= CONTENT ================= */}
          <section className="flex min-h-[calc(100vh-58px)] items-center justify-center px-5 py-8">
            {/* FORM CARD */}
            <div className="w-full max-w-[650px] rounded-2xl border border-white/5 bg-[#1b1b1d] p-7 shadow-2xl shadow-black/30">
              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">
                  Upload Song
                </h2>

                <p className="mt-1 text-[10px] text-gray-500">
                  Share your latest masterpiece with your fans worldwide.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ROW 1 */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Song Title */}
                  <InputField
                    label="SONG TITLE"
                    name="songTitle"
                    value={formData.songTitle}
                    onChange={handleChange}
                    placeholder="Midnight Sunshine"
                    icon={<FaMusic />}
                  />

                  {/* Artist */}
                  <InputField
                    label="ARTIST NAME"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    placeholder="Alex Rivera"
                    icon={<FaUser />}
                  />
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Genre */}
                  <div>
                    <label className="mb-2 block text-[8px] font-bold tracking-wider text-gray-400">
                      GENRE
                    </label>

                    <div className="relative">
                      <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className="h-10 w-full appearance-none rounded-md border border-white/5 bg-[#0d0d0e] px-3 text-[10px] text-gray-300 outline-none transition focus:border-violet-500"
                      >
                        <option value="">Select Genre</option>

                        <option value="Pop">Pop</option>

                        <option value="Rock">Rock</option>

                        <option value="Hip Hop">Hip Hop</option>

                        <option value="Lo-Fi">Lo-Fi</option>

                        <option value="Electronic">Electronic</option>

                        <option value="Classical">Classical</option>
                      </select>

                      <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[8px] text-gray-500" />
                    </div>
                  </div>

                  {/* Album Cover */}
                  <InputField
                    label="ALBUM COVER URL"
                    name="albumCover"
                    value={formData.albumCover}
                    onChange={handleChange}
                    placeholder="https://image-host.com/cover.jpg"
                    icon={<FaImage />}
                  />
                </div>

                {/* AUDIO URL */}
                <div>
                  <label className="mb-2 block text-[8px] font-bold tracking-wider text-gray-400">
                    AUDIO FILE
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-10 cursor-pointer items-center rounded-md border border-white/5 bg-[#0d0d0e] px-3 transition hover:border-violet-500/50"
                  >
                    <FaAudio className="mr-3 text-[10px] text-gray-500" />

                    <span className="truncate text-[10px] text-gray-500">
                      {audioFile
                        ? audioFile.name
                        : "Upload your audio file — MP3, WAV, FLAC"}
                    </span>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*"
                    onChange={handleAudioChange}
                    className="hidden"
                  />
                </div>

                {/* DESCRIPTION */}
                <div>
                  <label className="mb-2 block text-[8px] font-bold tracking-wider text-gray-400">
                    DESCRIPTION
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell the story behind this song..."
                    className="w-full resize-none rounded-md border border-white/5 bg-[#0d0d0e] px-3 py-3 text-[10px] text-white outline-none placeholder:text-gray-600 transition focus:border-violet-500"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-10 w-full items-center justify-center gap-3 rounded-md bg-violet-500 text-[10px] font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FaCloudArrowUp />

                  {loading ? "Uploading Song..." : "Upload Song"}

                  {!loading && <span>→</span>}
                </button>

                {/* TERMS */}
                <p className="text-center text-[7px] text-gray-600">
                  By uploading, you confirm that you own the rights to this
                  content.
                </p>
              </form>
            </div>
          </section>
        </main>
      </div>

      {/* Upload notification */}
      <div className="fixed bottom-5 right-5 flex w-[180px] items-center gap-3 rounded-lg border border-white/10 bg-[#18181a] p-3 shadow-xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-violet-500/20 text-violet-400">
          <FaAudio className="text-xs" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[9px] font-semibold">New Mastertrack</p>

          <p className="text-[7px] text-gray-500">Alex Rivera</p>
        </div>

        <span className="text-gray-500">•</span>
      </div>
    </div>
  );
};

/* ================= NAV ITEM ================= */

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

/* ================= INPUT ================= */

const InputField = ({ label, name, value, onChange, placeholder, icon }) => {
  return (
    <div>
      <label className="mb-2 block text-[8px] font-bold tracking-wider text-gray-400">
        {label}
      </label>

      <div className="flex h-10 items-center rounded-md border border-white/5 bg-[#0d0d0e] px-3 transition focus-within:border-violet-500">
        <span className="mr-3 text-[9px] text-gray-500">{icon}</span>

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-[10px] text-white outline-none placeholder:text-gray-700"
        />
      </div>
    </div>
  );
};

export default UploadSong;
