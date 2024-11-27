import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "tailwindcss";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@c": path.resolve(__dirname, "src/components"),
            "@contexts": path.resolve(__dirname, "src/contexts"),
            "@services": path.resolve(__dirname, "src/services"),
            "@styles": path.resolve(__dirname, "src/assets/styles"),
            "@icons": path.resolve(__dirname, "src/assets/icons"),
            "@images": path.resolve(__dirname, "src/assets/images"),
        },
    },
   
});
