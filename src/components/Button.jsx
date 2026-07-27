import React from "react";

const Button = ({ text, className = "" }) => {
  return (
    <button
      className={`
        group relative flex items-center gap-3
        h-11 px-7
        rounded-full
        overflow-hidden
        border border-text-primary/20
        bg-transparent
        text-text-primary
        uppercase
        text-[16px]
        font-bold
        font-galmuri
        tracking-[0.35em]
        transition-all duration-500
        hover:border-accent-pink
        hover:text-bg-primary
        ${className}
      `}
    >
      {/* hover fill */}
      <span
        className="
          absolute inset-0
          translate-y-full
          bg-accent-pink
          transition-transform duration-500
          group-hover:translate-y-0
        "
      />

      {/* content */}
      <span className="relative z-10">{text}</span>

      <span
        className="
          relative z-10
          h-1.5 w-1.5
          rounded-full
          bg-accent-pink
          transition-all duration-500
          group-hover:bg-bg-primary
        "
      />
    </button>
  );
};

export default Button;
