import React from "react";
import {
  FaDesktop,
  FaMusic,
  FaMicrophone,
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaHeadphones,
  FaRadio,
} from "react-icons/fa6";
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate()



  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white overflow-hidden relative">
      {/* Background Dots */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Purple Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,45,140,0.22),transparent_50%)]" />

      {/* Main */}
      <div className="relative z-10 min-h-screen flex flex-col px-8 py-6">
        {/* Top Header */}
        <div className="flex items-center gap-2 text-base font-semibold">
          <FaDesktop className="text-white/80" />

          <span>MusicHub</span>

          <span className="text-white/30">|</span>

          <span className="text-white/60">Register</span>
        </div>

        {/* Center */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="
              w-[45vw]
              max-w-[620px]
              min-w-[450px]
              min-h-[78vh]
              rounded-xl
              border border-white/10
              bg-[#17151c]/95
              backdrop-blur-xl
              shadow-[0_25px_80px_rgba(0,0,0,0.65)]
              px-10
              py-8
              flex
              flex-col
            "
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2">
                <FaMusic className="text-sm text-[#b88cff]" />

                <h1 className="text-xl font-bold text-[#c29cff]">MusicHub</h1>
              </div>

              <p className="text-sm text-white/45 mt-1">
                Join the sound revolution.
              </p>
            </div>

            {/* Account Type */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Listener */}
              <button
                type="button"
                className="
                  h-20
                  rounded-lg
                  border
                  border-[#713bd0]
                  bg-[#241b36]
                  shadow-[0_0_20px_rgba(125,70,220,0.12)]
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  transition
                  hover:bg-[#2b2041]
                "
              >
                <FaMusic className="text-xl text-[#c29cff]" />

                <span className="text-xs tracking-widest font-semibold text-white/80">
                  LISTENER
                </span>
              </button>

              {/* Artist */}
              <button
                type="button"
                className="
                  h-20
                  rounded-lg
                  border
                  border-white/10
                  bg-[#111014]
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2
                  transition
                  hover:border-white/20
                "
              >
                <FaMicrophone className="text-xl text-white/55" />

                <span className="text-xs tracking-widest font-semibold text-white/55">
                  ARTIST
                </span>
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <FaUser
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-white/30
                  "
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    h-11
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b0b0d]
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-white/30
                    outline-none
                    transition
                    focus:border-[#8144df]
                    focus:ring-1
                    focus:ring-[#8144df]/30
                  "
                />
              </div>

              {/* Username */}
              <div className="relative">
                <FaUser
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-white/30
                  "
                />

                <input
                  type="text"
                  placeholder="Username"
                  className="
                    w-full
                    h-11
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b0b0d]
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-white/30
                    outline-none
                    transition
                    focus:border-[#8144df]
                    focus:ring-1
                    focus:ring-[#8144df]/30
                  "
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-white/30
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    h-11
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b0b0d]
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-white/30
                    outline-none
                    transition
                    focus:border-[#8144df]
                    focus:ring-1
                    focus:ring-[#8144df]/30
                  "
                />
              </div>

              {/* Password */}
              <div className="relative">
                <FaLock
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-white/30
                  "
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="
                    w-full
                    h-11
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b0b0d]
                    pl-11
                    pr-4
                    text-sm
                    text-white
                    placeholder:text-white/30
                    outline-none
                    transition
                    focus:border-[#8144df]
                    focus:ring-1
                    focus:ring-[#8144df]/30
                  "
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 mt-5">
              <input
                type="checkbox"
                className="
                  w-4
                  h-4
                  accent-[#7c3aed]
                  cursor-pointer
                "
              />

              <p className="text-xs text-white/45">
                I agree to the{" "}
                <span className="text-white/70 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-white/70 cursor-pointer">
                  Privacy Policy.
                </span>
              </p>
            </div>

            {/* Register Button */}
            <button
              type="button"
              className="
                w-full
                h-12
                mt-6
                rounded-full
                bg-gradient-to-r
                from-[#c4a0ff]
                via-[#985ce8]
                to-[#7138d9]
                text-sm
                font-semibold
                text-white
                flex
                items-center
                justify-center
                gap-2
                shadow-[0_8px_25px_rgba(125,60,220,0.3)]
                hover:brightness-110
                transition
              "
            >
              Register
              <FaArrowRight className="text-xs" />
            </button>

            {/* Login */}
            <div className="text-center mt-5">
              <p className="text-xs text-white/45">
                Already have an account?{" "}
                <button
                onClick={() => navigate("/login")}
                  type="button"
                  className="
                    text-white/80
                    font-semibold
                    hover:text-[#b88cff]
                    transition
                  "
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-center items-center gap-6 text-white/25 pb-1">
          <FaRadio />
          <FaHeadphones />
          <FaMusic />
        </div>
      </div>
    </div>
  );
};

export default Register;
