import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dns from "dns";
import open, { apps } from "open";
import path from "path";
// https://vite.dev/config/

// re-enable this later
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
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler", // or "modern"
                silenceDeprecations: ["legacy-js-api"],
               
            },
        },
    },
});

// dns.setDefaultResultOrder("verbatim");
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         port: 3000,
//     },
//     resolve: {
//         alias: {
//             "@": path.resolve(__dirname, "src"),
//             "@c": path.resolve(__dirname, "src/components"),
//             "@contexts": path.resolve(__dirname, "src/contexts"),
//             "@services": path.resolve(__dirname, "src/services"),
//             "@styles": path.resolve(__dirname, "src/assets/styles"),
//             "@icons": path.resolve(__dirname, "src/assets/icons"),
//             "@images": path.resolve(__dirname, "src/assets/images"),
//         },
//     },
//     css: {
//         preprocessorOptions: {
//             scss: {
//                 api: "modern-compiler", // or "modern"
//                 silenceDeprecations: ["legacy-js-api"],
//             },
//         },
//     },
// });
// await open("http://localhost:3000/", {
//     app: {
//         name: "chrome",
//         arguments: ["--user-data-dir=C:\\Users\\meiizyyyy\\AppData\\Local\\Google\\Chrome\\User Data", "--profile-directory=Profile 5"],
//     },
// });
