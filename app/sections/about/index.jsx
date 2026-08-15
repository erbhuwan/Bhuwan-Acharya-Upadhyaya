"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView, motion } from "framer-motion";
import { HeadingDivider, TerminalPortfolio } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-full flex flex-col lg:flex-row gap-3 xl:items-start justify-between">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed w-full xl:w-1/2"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I&apos;m Bhuwan Acharya Upadhyaya, a Full Stack Developer and Software Engineer based
							in Pokhara, Nepal. I&apos;m currently pursuing my Bachelor&apos;s degree in
							Electronics and Information Engineering at Western Regional Campus, IOE.
						</p>

						<p className="my-3.5">
							I love building real-world applications that solve practical problems and turn ideas
							into useful products. I enjoy working across both frontend and backend development,
							with a particular interest in backend engineering, API design, databases, system
							architecture, and building scalable and maintainable systems.
						</p>

						<p>
							I&apos;m passionate about learning, problem-solving, and continuously improving the
							way I build software. I enjoy exploring new technologies, understanding how systems
							work, and creating software that is reliable, performant, and genuinely useful.
						</p>
					</div>

					<div className="w-full xl:w-1/2" id="terminal-portfolio" ref={ref}>
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{
								duration: 0.9,
								delay: 0.5,
								ease: [0.17, 0.55, 0.55, 1]
							}}
						>
							{isInView && <TerminalPortfolio />}
						</motion.div>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
