"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
			aria-label="Toggle theme"
		>
			{currentTheme === "dark" ? <BsSun /> : <BsMoon />}
		</button>
	);
};
