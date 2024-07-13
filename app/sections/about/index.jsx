"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Bhuwan Acharya Upadhyaya (born 2004), and I am a passionate full-stack web developer
							based in Pokhara, Nepal. Currently, I am pursuing my Bachelor&apos;s Degree in Electronics
							and Information Engineering at the Institute of Engineering (IoE), Western Regional
							Campus, located in Pokhara.
						</p>
						<p>So, officially, my programming journey began in 2019 as a WordPress developer.</p>

						<p className="my-3.5">
							With a strong emphasis on creating both front-end and back-end solutions, I have
							developed a comprehensive skill set that allows me to build responsive and interactive
							web applications. My expertise in SEO further ensures that the websites I develop are
							optimized for search engines, enhancing their visibility and performance.
						</p>
						<p>
							On the front-end, I specialize in using technologies such as React, Next.js, and
							Tailwind CSS to craft modern, user-friendly interfaces. These tools enable me to
							transform design prototypes into functional, visually appealing websites that provide
							a seamless user experience. On the back-end, I leverage the power of NestJS, Node.js,
							and Django to build robust and scalable server-side applications. My proficiency in
							TypeScript, JavaScript, and Python allows me to write clean and efficient code,
							ensuring the reliability and maintainability of the applications I develop.
						</p>
						<p className="my-3.5">
							In addition to my programming skills, I have experience working with various
							databases, including MongoDB, MySQL, and PostgreSQL. This diverse knowledge enables me
							to design and manage databases effectively, supporting the complex data needs of
							modern web applications.
						</p>
						<p className="my-3.5">
							My professional goals revolve around leveraging my skills in web development and SEO
							to build high-performance, scalable web applications. I am committed to continuous
							learning and staying updated with the latest technological advancements to deliver
							state-of-the-art solutions. By combining my technical knowledge with a passion for
							creating innovative web applications, I aim to make a significant impact in the field
							of web development.
						</p>
					</div>
				</div>
				<TimeLine />
			</section>
		</LazyMotion>
	);
}
