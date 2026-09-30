import React from "react";

const Toaster = ({ color = "green", msg }) => {
  return (
    <>
      <style>
        {`
          @keyframes toasterSlideIn {
            0% {
              transform: translateX(120%);
              opacity: 0;
            }

            60% {
              transform: translateX(-8px);
              opacity: 1;
            }

            80% {
              transform: translateX(3px);
            }

            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .toaster-slide-in {
            animation: toasterSlideIn 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
      </style>

      <div
        className="
          fixed
          top-5
          right-5
          z-50
          min-w-[280px]
          max-w-[380px]
          px-5
          py-4
          rounded-lg
          border
          border-white/10
          bg-[#18181a]
          shadow-[0_10px_35px_rgba(0,0,0,0.4)]
          flex
          items-center
          gap-3
          toaster-slide-in
        "
      >
        {/* Status Dot */}
        <div
          className={`w-2.5 h-2.5 rounded-full ${
            color === "red"
              ? "bg-red-500"
              : color === "yellow"
                ? "bg-yellow-400"
                : "bg-green-500"
          }`}
        />

        {/* Message */}
        <p className="text-sm text-white/80 font-medium">{msg}</p>
      </div>
    </>
  );
};

export default Toaster;
