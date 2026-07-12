import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04060C",
          900: "#070B14",
          850: "#0A101D",
          800: "#0D1424",
          700: "#141D33",
        },
        line: "rgba(148,166,204,0.14)",
        "line-strong": "rgba(148,166,204,0.28)",
        body: "#E9EEF7",
        mist: "#94A1BB",
        dim: "#5E6B85",
        pulse: "#4DA3FF",
        kawa: "#75E44B",
        alert: "#FF5C5C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        caps: "0.18em",
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
