import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { SiDjango, SiDocker, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNodedotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiRedis, SiSwagger, SiTypescript, SiVercel } from "react-icons/si";
import { DiCss3} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello, FaDocker } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";

export const TECHNOLOGIES = [
	{
		category: "Programming Languages",
		items: [
			{ name: "TypeScript", icon: <SiTypescript style={{ fontSize: 32 }} /> },
			{ name: "JavaScript", icon: <SiJavascript style={{ fontSize: 32 }} /> },
			{ name: "Python", icon: <SiPython style={{ fontSize: 32 }} /> },
			{ name: "PHP", icon: <SiPhp style={{ fontSize: 42 }} /> },
		]
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 style={{ fontSize: 32 }} /> },
			{ name: "CSS", icon: <DiCss3 style={{ fontSize: 32 }} /> },
			{ name: "JS", icon: <IoLogoJavascript style={{ fontSize: 32 }} /> },
			{ name: "React", icon: <FaReact style={{ fontSize: 32 }} /> },
			{ name: "Next", icon: <TbBrandNextjs style={{ fontSize: 32 }} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind style={{ fontSize: 32 }} /> },
			{ name: "Bootstrap", icon: <BsBootstrap style={{ fontSize: 32 }} /> },
			{ name: "Figma", icon: <FiFigma style={{ fontSize: 32 }} /> },
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "NodeJs", icon: <SiNodedotjs style={{ fontSize: 32 }} /> },
			{ name: "ExpressJs", icon: <SiExpress style={{ fontSize: 32 }} /> },
			{ name: "NestJs", icon: <SiNestjs style={{ fontSize: 32 }} /> },
			{ name: "Django", icon: <SiDjango style={{ fontSize: 32 }} /> }
		]
	},
	{
		category: "Database",
		items: [
		  { name: "MySQL", icon: <SiMysql style={{ fontSize: 42 }} /> },
		  { name: "MongoDB", icon: <SiMongodb style={{ fontSize: 32 }} /> },
		  { name: "PostgreSQL", icon: <SiPostgresql style={{ fontSize: 32 }} /> },
		]
	  },
	{
		category: "Other tools",
		items: [
			{ name: "WordPress CMS", icon: <FaWordpressSimple style={{ fontSize: 32 }} /> },
			{ name: "Github", icon: <AiFillGithub style={{ fontSize: 32 }} /> },
			{ name: "Firebase", icon: <SiFirebase style={{ fontSize: 32 }} /> },
			{ name: "Vercel", icon: <SiVercel style={{ fontSize: 32 }} /> },
			{ name: "Redis", icon: <SiRedis style={{ fontSize: 32 }} /> },
			{ name: "Docker", icon: <SiDocker style={{ fontSize: 32 }} /> },
			{ name: "Postman", icon: <SiPostman style={{ fontSize: 32 }} /> },
			{ name: "Swagger", icon: <SiSwagger style={{ fontSize: 32 }} /> },
		]
	}
];
