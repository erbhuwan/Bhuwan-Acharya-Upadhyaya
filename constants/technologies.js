import { AiFillGithub } from "react-icons/ai";
import {
	SiDocker,
	SiExpress,
	SiFirebase,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNodedotjs,
	SiPostgresql,
	SiPostman,
	SiPython,
	SiRedis,
	SiSwagger,
	SiTypescript,
	SiSocketdotio,
	SiArduino,
	SiSequelize,
	SiDrizzle,
	SiPrisma
} from "react-icons/si";
import { FaFingerprint, FaReact } from "react-icons/fa";
import { TbBrandVite, TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiRfidFill } from "react-icons/ri";

export const TECHNOLOGIES = [
	{
		category: "Languages",
		items: [
			{
				name: "TypeScript",
				icon: <SiTypescript style={{ fontSize: 32 }} />
			},
			{
				name: "JavaScript",
				icon: <SiJavascript style={{ fontSize: 32 }} />
			},
			{
				name: "Python",
				icon: <SiPython style={{ fontSize: 32 }} />
			},
			{
				name: "C/C++",
				icon: <span style={{ fontSize: 24, fontWeight: 700 }}>C++</span>
			}
		]
	},

	{
		category: "Frontend",
		items: [
			{
				name: "React",
				icon: <FaReact style={{ fontSize: 32 }} />
			},
			{
				name: "Next.js",
				icon: <TbBrandNextjs style={{ fontSize: 32 }} />
			},
			{
				name: "Vite",
				icon: <TbBrandVite style={{ fontSize: 32 }} />
			},
			{
				name: "Tailwind CSS",
				icon: <TbBrandTailwind style={{ fontSize: 32 }} />
			}
		]
	},

	{
		category: "Backend",
		items: [
			{
				name: "Node.js",
				icon: <SiNodedotjs style={{ fontSize: 32 }} />
			},
			{
				name: "Express.js",
				icon: <SiExpress style={{ fontSize: 32 }} />
			},
			{
				name: "NestJS",
				icon: <SiNestjs style={{ fontSize: 32 }} />
			},
			{
				name: "WebSockets",
				icon: <SiSocketdotio style={{ fontSize: 32 }} />
			}
		]
	},

	{
		category: "Databases",
		items: [
			{
				name: "MongoDB",
				icon: <SiMongodb style={{ fontSize: 32 }} />
			},
			{
				name: "PostgreSQL",
				icon: <SiPostgresql style={{ fontSize: 32 }} />
			},
			{
				name: "MySQL",
				icon: <SiMysql style={{ fontSize: 38 }} />
			},
			{
				name: "Redis",
				icon: <SiRedis style={{ fontSize: 32 }} />
			}
		]
	},

	{
		category: "ORMs & Data Access",
		items: [
			{
				name: "Mongoose",
				icon: <SiMongodb style={{ fontSize: 32 }} />
			},
			{
				name: "Sequelize",
				icon: <SiSequelize style={{ fontSize: 32 }} />
			},
			{
				name: "Drizzle ORM",
				icon: <SiDrizzle style={{ fontSize: 32 }} />
			},
			{
				name: "Prisma",
				icon: <SiPrisma style={{ fontSize: 32 }} />
			}
		]
	},

	{
		category: "DevOps & Tools",
		items: [
			{
				name: "Docker",
				icon: <SiDocker style={{ fontSize: 32 }} />
			},
			{
				name: "GitHub",
				icon: <AiFillGithub style={{ fontSize: 32 }} />
			},
			{
				name: "Firebase",
				icon: <SiFirebase style={{ fontSize: 32 }} />
			},
			{
				name: "Postman",
				icon: <SiPostman style={{ fontSize: 32 }} />
			},
			{
				name: "Swagger",
				icon: <SiSwagger style={{ fontSize: 32 }} />
			}
		]
	},

	{
		category: "Embedded Systems",
		items: [
			{
				name: "ESP32",
				icon: <span style={{ fontSize: 23, fontWeight: 700 }}>ESP32</span>
			},
			{
				name: "Arduino",
				icon: <SiArduino style={{ fontSize: 32 }} />
			},
			{
				name: "RFID",
				icon: <RiRfidFill style={{ fontSize: 32 }} />
			},
			{
				name: "Biometrics",
				icon: <FaFingerprint style={{ fontSize: 32 }} />
			}
		]
	}
];
