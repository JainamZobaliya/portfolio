import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// Important for GitHub Pages: repository is served from /portfolio/
	base: "/portfolio/",
	// Build to "docs" so GitHub Pages can serve from /docs on the main branch
	build: {
		outDir: "docs",
	},
});
