import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#0B0F19" }, maxWidth: { "screen-xl": "1280px" } } },
  plugins: [],
} satisfies Config;
