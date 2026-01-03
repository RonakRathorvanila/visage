module.exports = {
    theme: {
      extend: {
        keyframes: {
          fadeUp: {
            "0%": { opacity: "0", transform: "translateY(24px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          float: {
            "0%,100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-8px)" },
          },
          pulseSoft: {
            "0%,100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.05)" },
          },

          /* 🔥 Typing cursor blink */
          blink: {
            "0%,50%,100%": { opacity: "1" },
            "25%,75%": { opacity: "0" },
          },
        },
        animation: {
          fadeUp: "fadeUp 0.9s ease-out forwards",
          float: "float 4s ease-in-out infinite",
          pulseSoft: "pulseSoft 2.6s ease-in-out infinite",

          /* 🔥 Cursor animation */
          blink: "blink 1s infinite",
        },
      },
    },
  };
