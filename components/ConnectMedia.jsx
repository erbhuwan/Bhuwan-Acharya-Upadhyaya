import { SOCIAL_MEDIA } from "../constants";

export function ConnectMedia() {
	return (
		<nav role="menu">
			<ul className="flex items-center gap-5">
				{SOCIAL_MEDIA.map((item) => (
					<li key={item.id}>
						<a
							href={item.url}
							target="_blank"
							aria-label={item.title}
							title={item.title}
							className="text-2xl"
						>
							{item.icon}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
