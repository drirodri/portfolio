import { useTheme } from "@/theme/ThemeProvider";

// Example usage of the ThemeToggle component
export default function ThemeToggle() {
  const { mode, setMode, isDark } = useTheme();

  return (
    <div>
      <button onClick={() => setMode(isDark ? "light" : "dark")}>
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
      <button onClick={() => setMode("system")}>System</button>
      <div>Current mode: {mode}</div>
    </div>
  );
}
