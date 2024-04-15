"use client";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs"

function ThemeToogle() {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark")
            setDarkMode(true)

    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return <div className="text-stone-800 dark:text-stone-50"
        onClick={() => {
            setDarkMode(!darkMode)
            console.log(localStorage.getItem("theme"))
        }}
    >
        <FaMoon />
    </div>;
}

export default ThemeToogle;
