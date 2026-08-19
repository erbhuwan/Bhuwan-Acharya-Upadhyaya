import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata } from "components";
import Loading from "./loading";
import "styles/globals.css";
import { ThemeContext } from "context";
import { VemetricScript } from "@vemetric/react";
import { jsonLd } from "components/AppMetadata";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body>
				<ThemeContext>
					<VemetricScript token="rtmsosMFJckwa0xq" />
					<AppHeader />
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</ThemeContext>
			</body>
		</html>
	);
}
