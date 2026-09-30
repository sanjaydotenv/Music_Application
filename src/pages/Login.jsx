import React, { useContext, useRef, useState } from "react";
import {
  FaDesktop,
  FaMusic,
  FaEnvelope,
  FaLock,
  FaEye,
  FaArrowRight,
  FaGoogle,
  FaHeadphones,
  FaRadio,
} from "react-icons/fa6";
import musicImage from "../assets/musicImage.jpeg";
import { useNavigate } from "react-router";
import Toaster from "../layout/Toaster";
import { authContextData } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const { loginFalse, setLoginmFalse, loginTrue, setLoginTrue } =
    useContext(authContextData);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const RegisterData = JSON.parse(localStorage.getItem("userData"));

    if (
      RegisterData.email !== formState.email ||
      RegisterData.password !== formState.password
    ) {
      setLoginmFalse(true);

      setTimeout(() => {
        setLoginmFalse(false);
      }, 1500);

      return;
    }
    setLoginTrue(true);
    navigate("/main");
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white overflow-hidden relative">
      {loginFalse && (
        <Toaster color={"red"} msg={"Invalid email or password"} />
      )}
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,45,140,0.18),transparent_55%)]" />

      {/* Main Wrapper */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 py-5">
        {/* Top Header */}
        <div className="flex items-center gap-2 text-base font-semibold">
          <FaDesktop className="text-white/80" />

          <span>MusicHub</span>

          <span className="text-white/30">|</span>

          <span className="text-white/60">Login</span>
        </div>

        {/* Main Login Area */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="
              relative
              w-full
              max-w-[1100px]
              h-[78vh]
              min-h-[600px]
              rounded-xl
              border-4
              border-[#7955ff]
              bg-[#0d0d0f]/95
              shadow-[0_0_35px_rgba(100,70,255,0.18)]
              overflow-hidden
              flex
              items-center
            "
          >
            {/* LEFT SIDE */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
              {/* Floating Music Icon */}
              <FaMusic
                className="
                  absolute
                  top-10
                  right-1/2
                  translate-x-1/2
                  text-2xl
                  text-[#a77aff]/40
                "
              />

              {/* Image */}
              <div className="w-[340px] h-[190px] mb-5 flex items-center justify-center">
                <img
                  src={musicImage}
                  alt="Music"
                  className="
                    w-full
                    h-full
                    object-contain
                    rounded-lg
                    opacity-90
                  "
                />
              </div>

              {/* Brand */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <FaMusic className="text-lg text-[#c29cff]" />

                  <h1 className="text-3xl font-bold text-[#c29cff]">
                    MusicHub
                  </h1>
                </div>

                <p className="text-sm text-white/75 mt-2">
                  Experience music differently
                </p>

                <p className="text-xs text-white/45 mt-1">
                  tailored to your soul.
                </p>
              </div>

              {/* Small floating icon */}
              <FaRadio
                className="
                  absolute
                  bottom-16
                  left-12
                  text-sm
                  text-[#8064e8]/50
                "
              />

              {/* VIBE */}
              <div
                className="
                  absolute
                  bottom-2
                  right-5
                  text-[70px]
                  font-black
                  text-white/[0.025]
                  select-none
                "
              >
                VIBE
              </div>
            </div>

            {/* Divider */}
            <div className="h-[70%] w-px bg-white/[0.05]" />

            {/* RIGHT SIDE */}
            <div className="w-1/2 h-full flex items-center justify-center">
              <div
                className="
                  w-[380px]
                  rounded-lg
                  border
                  border-white/[0.04]
                  bg-[#18181a]
                  px-7
                  py-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                "
              >
                {/* Card Header */}
                <div className="mb-7">
                  <h2 className="text-xl font-bold text-white">Welcome Back</h2>

                  <p className="text-xs text-white/45 mt-1">
                    Sign in to continue your journey.
                  </p>
                </div>

                {/* FORM */}
                <form ref={formRef} onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="mb-5">
                    <label className="block text-[9px] font-semibold text-white/60 mb-2 uppercase">
                      Email Address
                    </label>

                    <div className="relative">
                      <FaEnvelope
                        className="
                          absolute
                          left-3
                          top-1/2
                          -translate-y-1/2
                          text-xs
                          text-white/30
                        "
                      />

                      <input
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="name@example.com"
                        className="
                          w-full
                          h-10
                          rounded-md
                          border
                          border-white/10
                          bg-[#101012]
                          pl-9
                          pr-3
                          text-xs
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

                  {/* Password */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[9px] font-semibold text-white/60 uppercase">
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-[8px] text-[#a985ff] hover:text-[#c2a8ff]"
                      >
                        Forgot Password?
                      </button>
                    </div>

                    <div className="relative">
                      <FaLock
                        className="
                          absolute
                          left-3
                          top-1/2
                          -translate-y-1/2
                          text-xs
                          text-white/30
                        "
                      />

                      <input
                        name="password"
                        value={formState.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="••••••••"
                        className="
                          w-full
                          h-10
                          rounded-md
                          border
                          border-white/10
                          bg-[#101012]
                          pl-9
                          pr-10
                          text-xs
                          text-white
                          placeholder:text-white/25
                          outline-none
                          focus:border-[#8144df]
                          focus:ring-1
                          focus:ring-[#8144df]/20
                        "
                      />

                      <FaEye
                        className="
                          absolute
                          right-3
                          top-1/2
                          -translate-y-1/2
                          text-xs
                          text-white/30
                          cursor-pointer
                        "
                      />
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center gap-2 mb-6">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 accent-[#7c3aed]"
                    />

                    <span className="text-[9px] text-white/50">
                      Remember Me
                    </span>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="
                      w-full
                      h-11
                      rounded-md
                      bg-gradient-to-r
                      from-[#914ff0]
                      to-[#7338d9]
                      text-xs
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-2
                      shadow-[0_8px_25px_rgba(125,60,220,0.25)]
                      hover:brightness-110
                      transition
                    "
                  >
                    Login
                    <FaArrowRight className="text-[9px]" />
                  </button>
                </form>

                {/* OR */}
                <div className="flex items-center gap-3 my-6">
                  <div className="h-px flex-1 bg-white/[0.07]" />

                  <span className="text-[8px] text-white/25">OR</span>

                  <div className="h-px flex-1 bg-white/[0.07]" />
                </div>

                {/* Register */}
                <div className="text-center mt-6">
                  <p className="text-[9px] text-white/40">
                    Don't have an account?{" "}
                    <button
                      onClick={() => navigate("/")}
                      type="button"
                      className="
                        ml-1
                        text-[#b58cff]
                        font-semibold
                        hover:text-[#d0b9ff]
                      "
                    >
                      Register
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                flex
                items-center
                gap-5
                text-white/20
              "
            >
              <FaRadio />
              <FaHeadphones />
              <FaMusic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
