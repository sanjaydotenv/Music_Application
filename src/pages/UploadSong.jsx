import React, { useRef, useState } from "react";
import {
  FaCloudArrowUp,
  FaMusic,
  FaUser,
  FaImage,
  FaMusic as FaAudio,
  FaChevronDown,
} from "react-icons/fa6";

import AsideNav from "../components/AsideNav";

const UploadSong = () => {
  const [formData, setFormData] = useState({
    songTitle: "",
    artistName: "",
    genre: "",
    albumCover: "",
    audioUrl: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingSongs = JSON.parse(localStorage.getItem("songsData")) || [];

    localStorage.setItem(
      "songsData",
      JSON.stringify([...existingSongs, formData]),
    );
  };

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
                placeholder="Search track analytics..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            {/* Right */}

            <div className="flex items-center gap-6">
              <button className="text-lg text-gray-400 transition hover:text-white">
                🔔
              </button>

              <div className="h-10 w-10 overflow-hidden rounded-full border border-violet-400/40">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* ================================================= */}
          {/* CONTENT */}
          {/* ================================================= */}

          <section className="min-h-[calc(100vh-72px)] px-8 py-10">
            {/* Page heading */}

            <div className="mx-auto mb-8 max-w-[900px]">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
                Artist Studio
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white">
                Upload Song
              </h1>

              <p className="mt-2 text-base text-gray-500">
                Share your latest masterpiece with your fans worldwide.
              </p>
            </div>

            {/* ================================================= */}
            {/* FORM CARD */}
            {/* ================================================= */}

            <div className="mx-auto w-full max-w-[900px] rounded-2xl border border-white/10 bg-[#18181b] p-8 shadow-2xl shadow-black/30">
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* ================================================= */}
                {/* SONG TITLE + ARTIST */}
                {/* ================================================= */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <InputField
                    label="SONG TITLE"
                    name="songTitle"
                    value={formData.songTitle}
                    onChange={handleChange}
                    placeholder="Midnight Sunshine"
                    icon={<FaMusic />}
                  />

                  <InputField
                    label="ARTIST NAME"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    placeholder="Alex Rivera"
                    icon={<FaUser />}
                  />
                </div>

                {/* ================================================= */}
                {/* GENRE + ALBUM COVER */}
                {/* ================================================= */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Genre */}

                  <div>
                    <label className="mb-2.5 block text-sm font-semibold tracking-wide text-gray-300">
                      GENRE
                    </label>

                    <div className="relative">
                      <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className="h-[52px] w-full appearance-none rounded-lg border border-white/10 bg-[#0d0d0f] px-4 pr-10 text-sm text-gray-300 outline-none transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30"
                      >
                        <option value="">Select Genre</option>

                        <option value="Pop">Pop</option>

                        <option value="Rock">Rock</option>

                        <option value="Hip Hop">Hip Hop</option>

                        <option value="Lo-Fi">Lo-Fi</option>

                        <option value="Electronic">Electronic</option>

                        <option value="Classical">Classical</option>
                      </select>

                      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500" />
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

                {/* ================================================= */}
                {/* AUDIO FILE */}
                {/* ================================================= */}

                <div>
                  <label className="mb-2.5 block text-sm font-semibold tracking-wide text-gray-300">
                    AUDIO FILE
                  </label>

                  <div className="flex h-[52px] cursor-pointer items-center rounded-lg border border-white/10 bg-[#0d0d0f] px-4 transition hover:border-violet-500/60 hover:bg-white/[0.02]">
                    <FaAudio className="mr-4 text-base text-violet-400" />
                    <input
                      name="audioUrl"
                      onChange={handleChange}
                      className="h-[80%] w-full outline-none"
                      type="text"
                    />
                  </div>

                  <p className="mt-2 text-xs text-gray-600">
                    Supported formats: MP3, WAV and FLAC
                  </p>
                </div>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <div>
                  <label className="mb-2.5 block text-sm font-semibold tracking-wide text-gray-300">
                    DESCRIPTION
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell the story behind this song..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#0d0d0f] px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-gray-600 transition focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30"
                  />
                </div>

                {/* ================================================= */}
                {/* BUTTON */}
                {/* ================================================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[54px] w-full items-center justify-center gap-3 rounded-lg bg-violet-500 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-600 hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FaCloudArrowUp className="text-base" />

                  {loading ? "Uploading Song..." : "Upload Song"}

                  {!loading && <span className="text-lg">→</span>}
                </button>

                {/* Terms */}

                <p className="text-center text-xs text-gray-600">
                  By uploading, you confirm that you own the rights to this
                  content.
                </p>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

/* ================================================= */
/* INPUT FIELD */
/* ================================================= */

const InputField = ({ label, name, value, onChange, placeholder, icon }) => {
  return (
    <div>
      <label className="mb-2.5 block text-sm font-semibold tracking-wide text-gray-300">
        {label}
      </label>

      <div className="flex h-[52px] items-center rounded-lg border border-white/10 bg-[#0d0d0f] px-4 transition focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500/30">
        <span className="mr-4 text-sm text-violet-400">{icon}</span>

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
        />
      </div>
    </div>
  );
};

export default UploadSong;
