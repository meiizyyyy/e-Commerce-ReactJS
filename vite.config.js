import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dns from "dns";
import open, { apps } from "open";
// https://vite.dev/config/

// re-enable this later
// export default defineConfig({
//   plugins: [react()],
// })
dns.setDefaultResultOrder("verbatim");
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
});
await open("http://localhost:3000/", {
    app: {
        name: "chrome",
        arguments: ["--user-data-dir=C:\\Users\\meiizyyyy\\AppData\\Local\\Google\\Chrome\\User Data", "--profile-directory=Profile 5"],
    },
});
