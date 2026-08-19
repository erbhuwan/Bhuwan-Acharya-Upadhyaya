const author = "Bhuwan Acharya Upd.";
const fullName = "Bhuwan Acharya Upadhyaya";
const description =
	"Bhuwan Acharya Upd. is a full-stack web developer from Nepal, building modern web applications with React, Node.js, and TypeScript. Currently pursuing a Bachelor's in Electronics and Information Engineering at IOE, Western Regional Campus, Pokhara.";
const url = "https://bhuwanacharyaupadhyaya.com.np";
const siteName = `${author} — Full-Stack Developer, Nepal`;

export const AppMetadata = {
	metadataBase: new URL(url),
	title: {
		default: `${author} | Full-Stack Developer in Nepal`,
		template: `%s | ${author}`
	},
	description: description,
	icons: { icon: "/favicon.ico" },
	keywords: [
		"Bhuwan Acharya Upadhyaya",
		"full stack developer Nepal",
		"web developer Nepal",
		"software developer Nepal",
		"React developer Nepal",
		"Next.js developer Nepal",
		"freelance developer Nepal",
		"Nepali web developer",
		"IT developer Nepal"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	publisher: author,
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
	},
	alternates: { canonical: url },
	openGraph: {
		title: `${author} | Full-Stack Developer in Nepal`,
		description: description,
		url: url,
		siteName: siteName,
		images: [
			{
				url: `${url}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: `${author} — Full-Stack Developer`
			}
		],
		locale: "en_US",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: `${author} | Full-Stack Developer in Nepal`,
		description: description,
		images: [`${url}/og-image.jpg`]
	}
};

// JSON-LD structured data — inject this in your root layout inside a <script type="application/ld+json"> tag
export const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Person",
			"@id": `${url}/#person`,
			name: fullName,
			alternateName: author,
			url: url,
			image: `${url}/og-image.jpg`,
			jobTitle: "Full-Stack Developer",
			description: description,
			address: {
				"@type": "PostalAddress",
				addressCountry: "NP"
			},
			nationality: {
				"@type": "Country",
				name: "Nepal"
			},
			alumniOf: {
				"@type": "CollegeOrUniversity",
				name: "Institute of Engineering (IOE), Western Regional Campus, Pokhara"
			},
			knowsAbout: [
				"Web Development",
				"React",
				"Next.js",
				"TypeScript",
				"Full-Stack Development",
				"Frontend Development",
				"Backend Development"
			],
			sameAs: [
				"https://github.com/erbhuwan",
				"https://linkedin.com/in/bhuwanacharya",
				"https://x.com/imbhuwanacharya",
				"https://www.facebook.com/bhuwanacharya.998",
				"https://www.instagram.com/bhuvi_bhuwan"
			]
		},
		{
			"@type": "WebSite",
			"@id": `${url}/#website`,
			url: url,
			name: siteName,
			description: description,
			publisher: {
				"@id": `${url}/#person`
			},
			inLanguage: "en-US"
		}
	]
};
