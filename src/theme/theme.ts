export const theme = {
  colors: {
    background: "#ffffff",
    foreground: "#171717",
    backgroundDark: "#0a0a0a",
    foregroundDark: "#ededed",
  },
  cssVars: {
    background: "--background",
    foreground: "--foreground",
    colorBackground: "--color-background",
    colorForeground: "--color-foreground",
    fontSans: "--font-sans",
    fontMono: "--font-mono",
    fontPoppins: "--font-poppins",
  },
  fonts: {
    geistSans: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    geistMono: "var(--font-geist-mono), monospace",
    poppins: "var(--font-poppins), Arial, Helvetica, sans-serif",
  },
  media: {
    prefersDark: "@media (prefers-color-scheme: dark)",
  },
};
