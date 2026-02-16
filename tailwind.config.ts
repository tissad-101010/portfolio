import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./src/app/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        "background-start-rgb": "rgb(var(--background-start-rgb) / <alpha-value>)",
        "background-end-rgb": "rgb(var(--background-end-rgb) / <alpha-value>)",
      },
      borderRadius: {
        base: "var(--radius-base)",
      }
    }
  }
}

export default config
