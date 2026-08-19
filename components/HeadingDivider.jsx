export function HeadingDivider({ title = "" }) {
	return (
		<header className="flex items-center mb-10">
			<h2 tabIndex="0" className="heading-divider">
				{title}
			</h2>
		</header>
	);
}
