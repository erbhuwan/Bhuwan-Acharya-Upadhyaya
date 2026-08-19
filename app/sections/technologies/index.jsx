import { HeadingDivider } from "components";
import { TECHNOLOGIES } from "../../../constants";

export function TechnologiesSection() {
	return (
		<section id="tech" className="section">
			<HeadingDivider title="Technologies" />
			<p tabIndex="0" className="my-5 text-2xl">
				I work with the following technologies and tools:
			</p>

			{!!TECHNOLOGIES.length && (
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
					{TECHNOLOGIES.map((tech) => {
						return (
							<div
								key={tech.category}
								className="flex flex-col gap-4 flex-1 md:flex-auto"
							>
								<h3 tabIndex="0" className="text-2xl font-bold">
									{tech.category}
								</h3>
								<div className="flex items-center flex-wrap gap-x-5 gap-y-8">
									{tech.items.map((item) => (
										<div key={item.name} className="group relative flex">
											<span tabIndex="0" role="img">
												{item.icon}
											</span>
											<span
												className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2
-translate-x-1/2 translate-y-full opacity-0 mt-3 mx-auto px-2 w-max"
											>
												{item.name}
											</span>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
}
