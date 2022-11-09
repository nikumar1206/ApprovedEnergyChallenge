import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		open: true,
		proxy: {
			"/api/": "http://localhost:5001",
		},
	},
	plugins: [react()],
});
