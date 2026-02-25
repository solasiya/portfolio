import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { vitePluginErrorOverlay } from "@hiogawa/vite-plugin-error-overlay";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  base: "./",
  assetsInclude: ["**/*.glb"],
  server: {
    host: "::",
    port: 8080,
    
    allowedHosts: [
      "solomon-gqh0.onrender.com", // Your Render domain
      // "*"  // (Optional) allow all hosts
    ],
  },
  plugins: [
    react(),
    tailwindcss(),
    mode === "development" ? vitePluginErrorOverlay() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
