"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_ROUTES, SITE_STRINGS } from "../constants";

export function Logo() {
	const pathname = usePathname();

	return (
		<h3 className="text-xl md:text-2xl font-bold">
			{pathname === SITE_ROUTES.projects ? (
				<Link href={SITE_ROUTES.home} aria-label="Go to home page" role="link">
					{SITE_STRINGS.textLogo}
				</Link>
			) : (
				<>{SITE_STRINGS.textLogo}</>
			)}
		</h3>
	);
}
