"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
	SiTypescript,
	SiNodedotjs,
	SiNestjs,
	SiMongodb,
	SiPostgresql,
	SiDocker,
	SiJavascript
} from "react-icons/si";

import { FaReact } from "react-icons/fa";

export function WelcomeAnimation() {
	const ref = useRef(null);

	const isInView = useInView(ref, {
		once: true,
		margin: "-100px"
	});

	const technologies = [
		{
			name: "React",
			icon: <FaReact />,
			color: "text-[#61DAFB]"
		},
		{
			name: "JavaScript",
			icon: <SiJavascript />,
			color: "text-[#F7DF1E]"
		},
		{
			name: "TypeScript",
			icon: <SiTypescript />,
			color: "text-[#3178C6]"
		},
		{
			name: "Node.js",
			icon: <SiNodedotjs />,
			color: "text-[#339933]"
		},
		{
			name: "NestJS",
			icon: <SiNestjs />,
			color: "text-[#E0234E]"
		},
		{
			name: "MongoDB",
			icon: <SiMongodb />,
			color: "text-[#47A248]"
		},
		{
			name: "PostgreSQL",
			icon: <SiPostgresql />,
			color: "text-[#4169E1]"
		},
		{
			name: "Docker",
			icon: <SiDocker />,
			color: "text-[#2496ED]"
		}
	];

	return (
		<div
			ref={ref}
			className="
				pointer-events-none
				relative
				flex
				h-[620px]
				w-[620px]
				items-center
				justify-center
				sm:h-[680px]
				sm:w-[680px]
				lg:h-[760px]
				lg:w-[760px]
			"
		>
			{/* Technology orbit */}
			<div className="pointer-events-none absolute inset-0 z-[4]">
				{technologies.map((tech, index) => {
					/*
					 * Orbit is based on the actual portrait circle.
					 *
					 * Portrait:
					 * 520px → mobile
					 * 580px → sm
					 * 650px → lg
					 *
					 * We use a percentage of the container width
					 * so the orbit scales with the portrait.
					 */

					const angle =
						(index / technologies.length) * Math.PI * 2 -
						Math.PI / 2;

					/*
					 * 32% of the outer container gives an orbit
					 * that sits around the actual portrait circle.
					 */
					const radius = 48;

					const x = 50 + Math.cos(angle) * radius;
					const y = 50 + Math.sin(angle) * radius;

					return (
						// Plain positioning wrapper — NOT a motion.div.
						// Framer Motion takes over the `transform` property
						// on any element it animates, so the centering
						// translate has to live outside of it or it gets
						// silently dropped once the animation runs.
						<div
							key={tech.name}
							className="absolute left-0 top-0"
							style={{
								left: `${x}%`,
								top: `${y}%`,
								transform: "translate(-50%, -50%)"
							}}
						>
							<motion.div
								initial={{
									opacity: 0,
									scale: 0
								}}
								animate={
									isInView
										? {
												opacity: 1,
												scale: 1
										  }
										: {}
								}
								transition={{
									duration: 0.7,
									delay: 0.4 + index * 0.12,
									ease: [0.17, 0.55, 0.55, 1]
								}}
							>
								<motion.div
									animate={
										isInView
											? {
													y: [0, -8, 0]
											  }
											: {}
									}
									transition={{
										duration: 3.5 + index * 0.2,
										delay: index * 0.15,
										repeat: Infinity,
										ease: "easeInOut"
									}}
									className="
										flex
										h-14
										w-14
										items-center
										justify-center
										rounded-2xl
										border
										border-black/10
										bg-white/80
										shadow-lg
										backdrop-blur-md
										dark:border-white/10
										dark:bg-black/50
									"
									title={tech.name}
								>
									<span
										className={`text-[30px] ${tech.color}`}
									>
										{tech.icon}
									</span>
								</motion.div>
							</motion.div>
						</div>
					);
				})}
			</div>

			{/* Main circular portrait */}
			<motion.div
				initial={{
					opacity: 0,
					scale: 0.85,
					y: 40
				}}
				animate={
					isInView
						? {
								opacity: 1,
								scale: 1,
								y: 0
						  }
						: {}
				}
				transition={{
					duration: 1,
					delay: 0.2,
					ease: [0.17, 0.55, 0.55, 1]
				}}
				className="
					relative
					z-[1]
					h-[520px]
					w-[520px]
					sm:h-[580px]
					sm:w-[580px]
					lg:h-[650px]
					lg:w-[650px]
				"
			>
				{/* Soft glow */}
				<div
					className="
						absolute
						inset-[-25px]
						rounded-full
						bg-black/[0.025]
						dark:bg-white/[0.025]
						blur-3xl
					"
				/>

				{/* Circular image frame */}
				<motion.div
					animate={
						isInView
							? {
									y: [0, -6, 0]
							  }
							: {}
					}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "easeInOut"
					}}
					className="
						relative
						h-full
						w-full
						overflow-hidden
						rounded-full
						bg-gradient-to-br
						from-black/[0.10]
						via-black/[0.05]
						to-transparent
						ring-1
						ring-black/10
						dark:from-white/[0.10]
						dark:via-white/[0.05]
						dark:to-transparent
						dark:ring-white/10
					"
				>
					{/* Inner frame */}
					<div
						className="
							pointer-events-none
							absolute
							inset-[10px]
							z-[1]
							rounded-full
							border
							border-black/[0.08]
							dark:border-white/[0.08]
						"
					/>

					{/* Person */}
					<div
						className="
							absolute
							inset-0
							flex
							items-end
							justify-center
							pt-8
						"
					>
						<Image
							src="/bhuwan acharya.png"
							alt="Bhuwan Acharya"
							width={500}
							height={650}
							priority
							className="
								p-2
								h-[104%]
								w-auto
								max-w-none
								pointer-events-none
								object-contain
								object-bottom
								sm:h-[106%]
								lg:h-[108%]
							"
						/>
					</div>
				</motion.div>
			</motion.div>

			{/* Rotating dashed frame */}
			<motion.div
				initial={{
					opacity: 0,
					scale: 0.8
				}}
				animate={
					isInView
						? {
								opacity: 1,
								scale: 1,
								rotate: 360
						  }
						: {}
				}
				transition={{
					opacity: {
						duration: 0.8,
						delay: 0.5
					},
					scale: {
						duration: 1,
						delay: 0.3,
						ease: [0.17, 0.55, 0.55, 1]
					},
					rotate: {
						duration: 30,
						repeat: Infinity,
						ease: "linear"
					}
				}}
				className="
					pointer-events-none
					absolute
					z-[2]
					h-[550px]
					w-[550px]
					rounded-full
					border
					border-dashed
					border-black/[0.14]
					sm:h-[610px]
					sm:w-[610px]
					lg:h-[680px]
					lg:w-[680px]
					dark:border-white/[0.14]
				"
			/>

			{/* Subtle outer ring */}
			<motion.div
				initial={{
					opacity: 0,
					scale: 0.9
				}}
				animate={
					isInView
						? {
								opacity: 1,
								scale: 1
						  }
						: {}
				}
				transition={{
					duration: 1,
					delay: 0.5
				}}
				className="
					pointer-events-none
					absolute
					z-[1]
					h-[535px]
					w-[535px]
					rounded-full
					border
					border-black/[0.05]
					sm:h-[595px]
					sm:w-[595px]
					lg:h-[665px]
					lg:w-[665px]
					dark:border-white/[0.05]
				"
			/>
		</div>
	);
}