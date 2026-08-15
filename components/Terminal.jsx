"use client";

import { useEffect, useRef, useState } from "react";

const PROJECTS = [
	{
		name: "Farm2HomeNepal",
		description:
			"Grocery and distribution platform with customer, rider, distributor, inventory, branch, barcode, and order management."
	},
	{
		name: "Sajilo Attendance System",
		description:
			"Multi-office attendance and workforce management system with profiles, positions, work rules, and branch support."
	},
	{
		name: "Electronic Voting System",
		description:
			"Hardware-integrated voting platform with ESP32, RFID, fingerprint authentication, real-time device communication, and centralized management."
	},
	{
		name: "Faiths Word",
		description:
			"Backend and integration development for a subscription-based application, including RevenueCat, Firebase, authentication, APIs, and production deployment."
	}
];

const PROFILE = {
	name: "Bhuwan Acharya Upadhyaya",
	handle: "bhuwan",
	host: "pokhara",
	role: "Full-Stack Developer",
	location: "Pokhara, Nepal",
	email: "v1acharya34@gmail.com",
	github: "github.com/erbhuwan",
	linkedin: "linkedin.com/in/bhuwanacharya",
	resumeUrl: "https://drive.google.com/file/d/1dnAPHn3gpQyifeBU6230ILxr2HUNFTt7/view?usp=sharing"
};

const EXPERIENCE = [
	{
		company: "Freelance / Personal Projects",
		role: "Full-Stack Developer",
		duration: "Mar 2026 — Present",
		summary:
			"Building and maintaining web applications, APIs, and embedded systems for various clients and personal projects. Focused on delivering scalable and maintainable solutions using modern technologies."
	}
];

const BOOT_SEQUENCE = [
	"initializing shell ...",
	`loading profile: ${PROFILE.name} ...`,
	"mounting /skills /experience /projects /contact ...",
	"type 'help' to see available commands",
	""
];

/* ---------------------------------------------------------------------- */
/*  Command handlers — each returns the output lines                      */
/* ---------------------------------------------------------------------- */

const COMMANDS = {
	help: {
		description: "list available commands",
		run: () => [
			"available commands:",
			"",
			"  whoami       who am i",
			"  about        short bio",
			"  skills       technical stack, by category",
			"  experience   companies i've worked at",
			"  education    academic background",
			"  projects     selected work",
			"  contact      how to reach me",
			"  socials      links",
			"  resume       download my resume",
			"  neofetch     system specs, engineer edition",
			"  ls           list sections",
			"  cat <file>   read a file",
			"  history      show command history",
			"  date         current date/time",
			"  echo <text>  print text back",
			"  clear        clear the screen",
			"",
			"tip: press Tab to autocomplete, ↑ / ↓ to browse history"
		]
	},

	whoami: {
		description: "who am i",
		run: () => [
			`${PROFILE.handle} — ${PROFILE.role.toLowerCase()}, ${PROFILE.location.toLowerCase()}`
		]
	},

	about: {
		description: "short bio",
		run: () => [
			`${PROFILE.name}`,
			`${PROFILE.role} based in ${PROFILE.location}, with a background`,
			"in Electronics, Communication and Information Engineering — currently pursuing a",
			"Bachelor's in the same field.",
			"",
			"Works across the full stack: TypeScript, React and Next.js on the",
			"frontend, Node.js and NestJS on the backend, with production",
			"deployment on Docker, Nginx and Cloudflare. The electronics",
			"background shows up in occasional detours into ESP32, Arduino,",
			"RFID and biometric systems."
		]
	},

	skills: {
		description: "technical stack, by category",
		run: () => [
			"languages",
			"  TypeScript · JavaScript · Python · C/C++",
			"",
			"frontend",
			"  React · Next.js · Vite · Tailwind CSS · shadcn/ui",
			"",
			"backend",
			"  Node.js · Express.js · NestJS · REST APIs · WebSockets",
			"",
			"databases",
			"  PostgreSQL · MySQL · MongoDB · Redis",
			"",
			"orm / odm",
			"  Prisma · Drizzle · Sequelize · Mongoose",
			"",
			"devops & tools",
			"  Docker · Nginx · Cloudflare · Firebase · GitHub · GitHub Actions · Postman · Swagger",
			"",
			"embedded",
			"  ESP32 · Arduino · RFID · Fingerprint/Biometrics · IoT",
			"",
			"other",
			"  Authentication · API Integration · Real-time Systems · Database Design · Performance Optimization · Production Deployment"
		]
	},

	experience: {
		description: "companies i've worked at",
		run: () => {
			const hasReal = EXPERIENCE.some((e) => e.company !== "Company Name");
			if (!hasReal) {
				return [
					"no company details added yet.",
					"",
					"run 'skills' or 'education' in the meantime."
				];
			}
			return EXPERIENCE.flatMap((job, i) => [
				`${job.role} — ${job.company}`,
				`  ${job.duration}`,
				`  ${job.summary}`,
				...(i < EXPERIENCE.length - 1 ? [""] : [])
			]);
		}
	},

	education: {
		description: "academic background",
		run: () => [
			"Bachelor's in Electronics, Communication and Information Engineering | Western Regional Campus, IOE",
			"currently in progress — Pokhara, Nepal"
		]
	},

	projects: {
		description: "selected work",
		run: () =>
			PROJECTS.flatMap((p, i) => [
				`${String(i + 1).padStart(2, "0")}  ${p.name}`,
				`    ${p.description}`,
				...(i < PROJECTS.length - 1 ? [""] : [])
			])
	},

	contact: {
		description: "how to reach me",
		run: () => [
			`email     ${PROFILE.email}`,
			`github    ${PROFILE.github}`,
			`linkedin  ${PROFILE.linkedin}`
		]
	},

	socials: {
		description: "links",
		run: () => [`github    ${PROFILE.github}`, `linkedin  ${PROFILE.linkedin}`]
	},

	resume: {
		description: "download my resume",
		run: (_args, ctx) => {
			ctx.openUrl(PROFILE.resumeUrl);
			return [`opening resume: ${PROFILE.resumeUrl}`];
		}
	},

	neofetch: {
		description: "system specs, engineer edition",
		run: () => [
			"      ▄▄▄▄▄▄▄▄        " + `${PROFILE.handle}@${PROFILE.host}`,
			"    ██        ██      " + "-----------------",
			"   ██  ▄▄  ▄▄  ██     " + `OS       PokharaOS 1.0`,
			"   ██  ██  ██  ██     " + `Role     ${PROFILE.role}`,
			"   ██          ██     " + `Stack    TypeScript / React / Next.js`,
			"    ██        ██      " + `Backend  Node.js / NestJS`,
			"      ▀▀▀▀▀▀▀▀        " + `Data     Postgres · Mongo · Redis`,
			"                      " + `Infra    Docker · Nginx · Cloudflare`,
			"                      " + `Board    ESP32 / Arduino`,
			"                      " + `Uptime   still building`
		]
	},

	ls: {
		description: "list sections",
		run: () => ["about  skills  experience  education  projects  contact  socials  resume.txt"]
	},

	cat: {
		description: "read a file",
		run: (args) => {
			const file = args[0];
			if (!file) return ["usage: cat <file>"];
			if (file === "resume.txt") {
				return [
					`${PROFILE.name} — ${PROFILE.role}`,
					`${PROFILE.location}`,
					"",
					"see 'skills', 'experience' and 'education' for the full picture,",
					`or grab the real thing: ${PROFILE.resumeUrl}`
				];
			}
			return [`cat: ${file}: No such file or directory`];
		}
	},

	date: {
		description: "current date/time",
		run: () => [new Date().toString()]
	},

	echo: {
		description: "print text back",
		run: (args) => [args.join(" ") || ""]
	},

	sudo: {
		description: "nice try",
		run: () => [
			`${PROFILE.handle} is not in the sudoers file. This incident will be reported (it will not).`
		]
	},

	history: {
		description: "show command history",
		run: (_args, ctx) =>
			ctx.history.length
				? ctx.history.map((cmd, i) => `  ${i + 1}  ${cmd}`)
				: ["no commands run yet"]
	}
};

const COMMAND_NAMES = Object.keys(COMMANDS);

/* ---------------------------------------------------------------------- */
/*  Component                                                             */
/* ---------------------------------------------------------------------- */

let lineId = 0;
const nextId = () => ++lineId;

export function TerminalPortfolio() {
	const [lines, setLines] = useState([]);
	const [input, setInput] = useState("");
	const [cmdHistory, setCmdHistory] = useState([]);
	const [historyIndex, setHistoryIndex] = useState(null);
	const [booted, setBooted] = useState(false);

	const scrollRef = useRef(null);
	const inputRef = useRef(null);

	const prompt = `${PROFILE.handle}@${PROFILE.host} ❯`;

	/* Boot sequence */
	useEffect(() => {
		const reduced =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (reduced) {
			setLines(BOOT_SEQUENCE.map((text) => ({ id: nextId(), type: "comment", text })));
			setBooted(true);
			return;
		}

		let cancelled = false;
		(async () => {
			for (const text of BOOT_SEQUENCE) {
				if (cancelled) return;
				await new Promise((r) => setTimeout(r, 220));
				setLines((prev) => [...prev, { id: nextId(), type: "comment", text }]);
			}
			setBooted(true);
		})();

		return () => {
			cancelled = true;
		};
	}, []);

	/* Autoscroll */
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [lines]);

	const pushLines = (newLines) => {
		setLines((prev) => [...prev, ...newLines.map((l) => ({ ...l, id: nextId() }))]);
	};

	const runCommand = (raw) => {
		const trimmed = raw.trim();
		pushLines([{ type: "input", text: `${prompt} ${raw}` }]);

		if (!trimmed) return;

		if (trimmed === "clear") {
			setLines([]);
			return;
		}

		const [cmd, ...args] = trimmed.split(/\s+/);
		const handler = COMMANDS[cmd];

		if (!handler) {
			pushLines([
				{ type: "error", text: `command not found: ${cmd}` },
				{ type: "muted", text: "type 'help' to see available commands" }
			]);
			return;
		}

		const ctx = {
			history: cmdHistory,
			openUrl: (url) => {
				if (typeof window !== "undefined") {
					window.open(url, "_blank", "noopener,noreferrer");
				}
			}
		};

		const output = handler.run(args, ctx);
		pushLines(output.map((text) => ({ type: "output", text })));
	};

	const submit = () => {
		if (!booted) return;
		const raw = input;
		runCommand(raw);
		if (raw.trim()) {
			setCmdHistory((prev) => [...prev, raw.trim()]);
		}
		setHistoryIndex(null);
		setInput("");
	};

	const suggestions =
		input.trim().length > 0
			? COMMAND_NAMES.filter((c) => c.startsWith(input.trim().toLowerCase())).slice(0, 6)
			: [];

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			submit();
			return;
		}
		if (e.key === "Tab") {
			e.preventDefault();
			if (suggestions[0]) setInput(suggestions[0] + " ");
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			if (!cmdHistory.length) return;
			const nextIndex =
				historyIndex === null ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
			setHistoryIndex(nextIndex);
			setInput(cmdHistory[nextIndex]);
			return;
		}
		if (e.key === "ArrowDown") {
			e.preventDefault();
			if (historyIndex === null) return;
			const nextIndex = historyIndex + 1;
			if (nextIndex >= cmdHistory.length) {
				setHistoryIndex(null);
				setInput("");
			} else {
				setHistoryIndex(nextIndex);
				setInput(cmdHistory[nextIndex]);
			}
		}
	};

	const lineColor = {
		input: "text-[#FFD27A]",
		output: "text-[#FFB000]",
		error: "text-[#FF6B5E]",
		success: "text-[#8CFF9E]",
		comment: "text-[#9C6B00]",
		muted: "text-[#B8862F]/70"
	};

	return (
		<div
			className="
				relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl
				border border-[#FFB000]/15 bg-[#0B0F0C]
				shadow-[0_0_60px_-15px_rgba(255,176,0,0.25)]
			"
		>
			<style>{`
				@keyframes term-blink {
					0%, 45% { opacity: 1; }
					50%, 95% { opacity: 0; }
					100% { opacity: 1; }
				}
				@keyframes term-scan {
					0% { transform: translateY(-100%); }
					100% { transform: translateY(100%); }
				}
				.term-cursor { animation: term-blink 1s steps(1) infinite; }
				.term-scanline { animation: term-scan 6s linear infinite; }
				@media (prefers-reduced-motion: reduce) {
					.term-cursor { animation: none; opacity: 1; }
					.term-scanline { display: none; }
				}
			`}</style>

			{/* scanline + vignette overlay */}
			<div className="pointer-events-none absolute inset-0 z-10">
				<div className="term-scanline absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#FFB000]/[0.03] to-transparent" />
				<div className="absolute inset-0 shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.55)]" />
			</div>

			{/* title bar */}
			<div className="relative z-20 flex items-center gap-2 border-b border-[#FFB000]/10 bg-[#0E1310] px-4 py-2.5">
				<span className="h-1.5 w-1.5 rounded-full bg-[#8CFF9E] shadow-[0_0_6px_1px_rgba(140,255,158,0.8)]" />
				<span className="font-mono text-[11px] tracking-wide text-[#B8862F]">
					{PROFILE.handle}@{PROFILE.host}: ~
				</span>
			</div>

			{/* output */}
			<div
				ref={scrollRef}
				className="relative z-20 h-[420px] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed sm:text-sm"
			>
				{lines.map((line) => (
					<div key={line.id} className={`whitespace-pre-wrap ${lineColor[line.type]}`}>
						{line.text}
					</div>
				))}

				{/* live input row */}
				{booted && (
					<div className="mt-1 flex items-center gap-2 text-[#FFD27A]">
						<span className="shrink-0">{prompt}</span>
						<span className="relative flex-1">
							<input
								ref={inputRef}
								value={input}
								autoFocus
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
								spellCheck={false}
								autoComplete="off"
								placeholder={booted ? "type a command..." : ""}
								className="w-full bg-transparent font-mono text-[13px] text-[#FFD27A] placeholder:text-[#B8862F]/40 caret-transparent outline-none sm:text-sm"
							/>
							<span
								className="term-cursor pointer-events-none absolute top-0 h-full w-[7px] bg-[#FFD27A]"
								style={{ left: `${input.length}ch` }}
							/>
						</span>
					</div>
				)}
			</div>

			{/* suggestion chips */}
			<div className="relative z-20 flex min-h-[42px] flex-wrap items-center gap-1.5 border-t border-[#FFB000]/10 bg-[#0E1310] px-4 py-2">
				{(suggestions.length ? suggestions : COMMAND_NAMES.slice(0, 8)).map((cmd) => (
					<button
						key={cmd}
						type="button"
						onClick={() => {
							setInput(cmd + " ");
							focusInput();
						}}
						className="
							rounded-md border border-[#FFB000]/20 bg-[#FFB000]/5 px-2 py-0.5
							font-mono text-[11px] text-[#B8862F]
							transition-colors hover:border-[#FFB000]/40 hover:text-[#FFD27A]
						"
					>
						{cmd}
					</button>
				))}
			</div>
		</div>
	);
}

export default TerminalPortfolio;
