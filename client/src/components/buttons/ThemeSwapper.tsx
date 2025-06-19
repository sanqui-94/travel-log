import { useEffect, useState } from "react";
import MoonIcon from "~icons/tabler/moon-filled";
import SunIcon from "~icons/tabler/sun-filled";

function getSystemTheme(): "dark" | "light" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeSwapper() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const storedTheme = localStorage.getItem("theme") ?? getSystemTheme();
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate mx-4">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value="default"
        onChange={(e) => {
          toggleTheme(e.target.checked);
        }}
      />
      <SunIcon className="swap-off fill-current" height={24} width={24} />
      <MoonIcon className="swap-on fill-current" height={24} width={24} />
    </label>
  );
}
