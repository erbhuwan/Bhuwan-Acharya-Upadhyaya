"use client";

import { HeadingDivider, TerminalPortfolio } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	return (
		<section id="about" className="section">
			<HeadingDivider title="About me" />
			<div className="pt-10 pb-16 max-w-full flex flex-col lg:flex-row gap-3 xl:items-start justify-between">
				<div
					tabIndex="0"
					className="text-xl font-light leading-relaxed w-full xl:w-1/2"
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

				<div className="relative w-full xl:w-1/2">
					<div
						id="terminal-portfolio"
						className="absolute -top-24 xl:-top-28"
						aria-hidden="true"
					/>
					<div>
						<TerminalPortfolio />
					</div>
				</div>
			</div>

			<TimeLine />
		</section>
	);
}
