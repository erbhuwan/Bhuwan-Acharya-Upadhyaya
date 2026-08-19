"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView, AnimatePresence, motion } from "framer-motion";
import { WelcomeAnimation } from "./IntroAnimation";
import { FiExternalLink } from "react-icons/fi";

export function WelcomeSection() {
	const introRef = useRef(null);
	const isInView = useInView(introRef, { once: true });

	const [count, setCount] = useState(0);
	const text = [
		"build full-stack web applications",
		"develop modern interfaces with React",
		"build scalable backends with Node.js",
		"create APIs with NestJS and Express",
		"work with SQL and NoSQL databases",
		"integrate third-party services and payments",
		"deploy production-ready web applications"
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prev) => (prev + 1) % text.length);
		}, 2500);

		return () => clearInterval(interval);
	}, [text.length]);

	const currentItem = text[count];
	const firstWord = currentItem.split(" ")[0];
	const restWords = currentItem.split(" ").slice(1).join(" ");

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section min-h-[calc(100vh-5rem)] flex items-center" ref={introRef}>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[650px]">
					<div className="py-5 md:py-10">
						<h1
							tabIndex="0"
							className="text-3xl md:text-5xl xl:text-6xl font-bold"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<p>
								Hi, I&apos;m <mark>Bhuwan</mark>, a <mark>Full-Stack Developer.</mark>
							</p>
						</h1>

						<div className="mt-3 flex items-center min-h-[36px] sm:min-h-[40px] md:min-h-[44px]">
							<p
								className="text-[17px] md:text-2xl flex flex-wrap items-center gap-x-1.5"
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
							>
								<span>I</span>
								<AnimatePresence mode="wait">
									<motion.span
										key={count}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.3, ease: [0.17, 0.55, 0.55, 1] }}
										className="inline-block"
									>
										<b>{firstWord}</b> <span>{restWords}</span>
									</motion.span>
								</AnimatePresence>
							</p>
						</div>

						<p
							tabIndex="0"
							className="mt-3 mb-10 text-gray-500 text-xl"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Stick around to see some of my work.
						</p>
						<div
							className="my-2"
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<Link
								href="https://drive.google.com/file/d/1dnAPHn3gpQyifeBU6230ILxr2HUNFTt7/view?usp=sharing"
								target="_blank"
								tabIndex="0"
								className="btn flex justify-start items-center w-fit gap-2"
								aria-label="Resume"
							>
								See my resume <FiExternalLink />
							</Link>
						</div>
						<div
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<Link
								href="#terminal-portfolio"
								onClick={(e) => {
									e.preventDefault();
									document.getElementById("terminal-portfolio")?.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
									setTimeout(() => {
										const input = document.getElementById("terminal-input");
										input?.focus({ preventScroll: true });
									}, 350);
								}}
								aria-label="Portfolio Terminal"
								className="
		group inline-flex w-fit items-center gap-2
		rounded-md border border-[#FFB000]/25 bg-[#0B0F0C]
		px-3.5 py-2 font-mono text-sm text-[#FFB000]
		transition-colors duration-200
		hover:border-[#FFB000]/50 hover:bg-[#FFB000]/[0.06] hover:text-[#FFD27A]
		focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB000]/40
			"
							>
								<style>{`
				@keyframes link-blink {
					0%, 45% { opacity: 1; }
					50%, 95% { opacity: 0; }
					100% { opacity: 1; }
				}
				.link-cursor { animation: link-blink 1s steps(1) infinite; }
				@media (prefers-reduced-motion: reduce) {
					.link-cursor { animation: none; }
				}
			`}</style>

								<span className="text-[#B8862F] group-hover:text-[#FFB000]">❯</span>
								<span>portfolio_terminal</span>
								<span className="link-cursor h-[15px] w-[7px] bg-[#FFB000] group-hover:bg-[#FFD27A]" />
							</Link>
						</div>
					</div>

					<div className="hidden md:flex items-center justify-center">
						<WelcomeAnimation />
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
