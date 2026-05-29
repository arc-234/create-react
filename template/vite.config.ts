import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

const chunkMap = [
	{ name: "router", match: ["react-router"] },
	{ name: "rtk", match: ["@reduxjs/toolkit", "react-redux"] },
	{ name: "react", match: ["react"] },
];

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [
		react(),
		tailwindcss(),
		...(process.env.CI === "true"
			? []
			: [
					visualizer({
						filename: "dist/stats.html",
						open: true,
						gzipSize: true,
						brotliSize: true,
					}),
				]),
	],
	build: {
		// Browsers in `package.json#browserslist` → esbuild/oxc targets (Vite
		// does not read Browserslist by default: https://vitejs.dev/config/build-options.html#build-target)
		outDir: "dist",
		sourcemap: false,
		target: browserslistToEsbuild(),
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("node_modules")) {
						for (const chunk of chunkMap) {
							if (chunk.match.some((m) => id.includes(m))) {
								return chunk.name;
							}
						}
					}
				},
			},
		},
	},
});
