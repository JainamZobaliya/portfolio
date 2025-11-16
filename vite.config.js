import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// Important for GitHub Pages: repository is served from /portfolio/
	base: "/portfolio/",
});
