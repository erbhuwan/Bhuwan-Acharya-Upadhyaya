const TimeLineData = [
	{
		period: "2019",
		title: "Started with WordPress",
		description:
			"My programming journey began with WordPress, where I developed my first websites and became interested in how websites work."
	},
	{
		period: "2020",
		title: "Web Development Foundations",
		description:
			"Started working with HTML, CSS, JavaScript and PHP, building a stronger foundation in web development."
	},
	{
		period: "2021",
		title: "React & Modern Frontend",
		description:
			"Moved into React.js and modern frontend development, focusing on reusable components and interactive user interfaces."
	},
	{
		period: "2022",
		title: "Engineering Journey",
		description:
			"Started my Bachelor's degree in Electronics and Communication Engineering while continuing to grow as a software developer."
	},
	{
		period: "2023",
		title: "Python & Backend Development",
		description:
			"Explored Python and Django while becoming increasingly interested in backend development, APIs and server-side systems."
	},
	{
		period: "2024",
		title: "Full-Stack Development",
		description:
			"Expanded into Node.js, NestJS and TypeScript, working across frontend, backend, databases and complete application architecture."
	},
	{
		period: "2025",
		title: "Building Real-World Systems",
		description:
			"Focused on building production-oriented applications involving authentication, payments, background processing, real-time systems and complex business workflows."
	},
	{
		period: "2026 - Present",
		title: "Software Engineering",
		description:
			"Continuing to build scalable systems and real-world products while exploring system design, infrastructure and software engineering practices."
	}
];

export function TimeLine() {
	return (
		<div className="relative py-8">
			{/* Timeline line */}
			<div
				className="
					absolute
					left-[11px]
					top-0
					bottom-0
					w-px
					bg-current
					opacity-20
					md:left-1/2
					md:-translate-x-1/2
				"
			/>

			<div className="flex flex-col gap-12 md:gap-20">
				{TimeLineData.map((item, index) => {
					const isLeft = index % 2 === 0;

					return (
						<div
							key={item.period}
							className={`
								relative
								flex
								items-start
								pl-10
								md:pl-0
								md:w-full
								${isLeft ? "md:justify-start" : "md:justify-end"}
							`}
						>
							{/* Timeline dot */}
							<div
								className="
									absolute
									left-0
									top-2
									flex
									h-6
									w-6
									items-center
									justify-center
									rounded-full
									border
									border-current
									bg-background
									md:left-1/2
									md:-translate-x-1/2
									z-1
								"
							>
								<div className="h-2 w-2 rounded-full bg-current" />
							</div>

							{/* Content */}
							<div
								className={`
									w-full
									md:w-[42%]
									${isLeft ? "md:text-right" : "md:text-left"}
								`}
							>
								<span className="text-sm font-semibold tracking-widest opacity-50">
									{item.period}
								</span>

								<h3 className="mt-1 text-xl font-bold">
									{item.title}
								</h3>

								<p className="mt-2 text-sm leading-relaxed opacity-65">
									{item.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}