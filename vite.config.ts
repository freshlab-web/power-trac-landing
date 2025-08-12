import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "https://cdn.jsdelivr.net/gh/freshlab-web/power-trac-landing@main/dist/",
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index-C85uXXcI.js`,
        chunkFileNames: `assets/[name]-C84uXXcI.js`,
        assetFileNames: `assets/[name]-BNSLrcrC[extname]`,
      },
    },
 },
}));
