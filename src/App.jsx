import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container text-xl sm:flex sm:flex-col sm:gap-28 md:gap-10 md:text-3xl lg:flex lg:flex-none">
                <h1 className="text-center text-4xl text-purple-700 sm:text-lime-600 md:text-red-500 xl:text-cyan-500">Hello Tailwind</h1>
                <div className="">This is Tailwind Css with React Vite 1 </div>
                <div className="">This is Tailwind Css with React Vite 2 </div>
                <div className="">This is Tailwind Css with React Vite 3 </div>
                <div className="">This is Tailwind Css with React Vite 4 </div>
                <div className="">This is Tailwind Css with React Vite 5 </div>
            </div>
        </>
    );
}

export default App;
