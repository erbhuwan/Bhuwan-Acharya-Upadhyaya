const author = "Bhuwan Acharya Upadhyaya";
const description =
	"My name is Bhuwan Acharya Upadhyaya, and I am a passionate full-stack web developer based in Pokhara, Nepal. Currently, I am pursuing my Bachelor's Degree in Electronics and Information Engineering at the Institute of Engineering (IoE), Western Regional Campus, located in Pokhara.";
const url = "https://bhuwan-acharya-upadhyaya.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://bhuwan-acharya-upadhyaya.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.ico"
	},
	keywords: [
		"Bhuwan Acharya Upadhayaya",
		"Vasile Novatchii - Web Developer",
		"Frontend developer",
		"Backend developer",
		"Full stack web developer",
		"Portfolio website",
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://vasile-novatchii.netlify.app/main.jpg",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://vasile-novatchii.netlify.app/main.jpg",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
