import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Icons from "unplugin-icons/vite";
import { EnvValidatePlugin } from "./vite.plugins/env-validate.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), Icons({ compiler: "jsx", jsx: "react" }), EnvValidatePlugin()],
});
