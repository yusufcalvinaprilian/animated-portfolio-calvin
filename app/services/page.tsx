"use client";

import { motion } from "framer-motion";
import {
	Code,
	Palette,
	Zap,
	Smartphone,
	Globe,
	Database,
	GitBranch,
	Shield,
	TrendingUp,
	Layers,
	Box,
	Settings,
	Monitor,
	Smartphone as Mobile,
	Tablet,
	Laptop,
	Server,
	Cloud,
	Lock,
	Eye,
	MousePointer,
	Type,
	Layout,
	Grid,
	Circle,
	Square,
	Triangle,
	Star,
	Heart,
	Target,
	Rocket,
	Lightbulb,
	CheckCircle,
	ArrowRight,
	BookOpen,
	GraduationCap,
	Calendar,
	Award,
	Users,
	Globe2,
	User2,
	User,
	Goal,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function SkillsPage() {
	const handleDownloadCV = () => {
		console.log("Downloading CV...");
	};

	const skillCategories = [
		{
			id: "frontend",
			title: "Frontend Development",
			description: "Modern web technologies for creating responsive and interactive user interfaces",
			icon: Monitor,
			skills: [
				{ name: "React", icon: "/images/skills/react-svg.svg", color: "from-blue-500 to-cyan-500", hoverColor: "text-blue-500" },
				{ name: "Next.js", icon: "/images/skills/next-com.svg", color: "from-black to-gray-800", hoverColor: "text-gray-800" },
				{ name: "TypeScript", icon: "/images/skills/typescript-com.svg", color: "from-blue-600 to-blue-800", hoverColor: "text-blue-600" },
				{ name: "JavaScript", icon: "/images/skills/javascript-com.svg", color: "from-yellow-400 to-yellow-600", hoverColor: "text-yellow-500" },
				{ name: "HTML5", icon: "/images/skills/html-com.svg", color: "from-orange-500 to-red-500", hoverColor: "text-orange-500" },
				{ name: "CSS3", icon: "/images/skills/css-com.svg", color: "from-blue-400 to-blue-600", hoverColor: "text-blue-500" },
			],
		},
		{
			id: "styling",
			title: "Styling & Design",
			description: "Modern CSS frameworks and design tools for beautiful user interfaces",
			icon: Palette,
			skills: [
				{ name: "Tailwind CSS", icon: "/images/skills/tailwind-com.svg", color: "from-cyan-400 to-blue-500", hoverColor: "text-cyan-500" },
				{ name: "CSS Modules", icon: "/images/skills/cssmodule-com.svg", color: "from-purple-500 to-pink-500", hoverColor: "text-purple-500" },
				{ name: "Styled Components", icon: "/images/skills/figma-com.svg", color: "from-pink-500 to-red-500", hoverColor: "text-pink-500" },
				{ name: "Sass/SCSS", icon: "/images/skills/sass-com.svg", color: "from-pink-400 to-purple-600", hoverColor: "text-purple-500" },
				{ name: "Framer Motion", icon: "/images/skills/framer-com.svg", color: "from-purple-600 to-blue-600", hoverColor: "text-purple-500" },
				{ name: "Responsive Design", icon: "/images/skills/responsive-com.svg", color: "from-green-500 to-emerald-600", hoverColor: "text-green-500" },
			],
		},
		{
			id: "tools",
			title: "Development Tools",
			description: "Essential tools and technologies for modern web development",
			icon: Settings,
			skills: [
				{ name: "Git & GitHub", icon: "/images/skills/github-com.svg", color: "from-gray-700 to-gray-900", hoverColor: "text-gray-700" },
				{ name: "VS Code", icon: "/images/skills/vs-code-com.svg", color: "from-blue-500 to-blue-700", hoverColor: "text-blue-500" },
				{ name: "Webpack", icon: "📦", color: "from-blue-600 to-blue-800", hoverColor: "text-blue-600" },
				{ name: "Vite", icon: "/images/skills/vite copy.svg", color: "from-purple-500 to-yellow-500", hoverColor: "text-purple-500" },
				{ name: "ESLint", icon: "/images/skills/eslint-com.svg", color: "from-purple-600 to-purple-800", hoverColor: "text-purple-600" },
				{ name: "Prettier", icon: "/images/skills/prettier-svgrepo-com.svg", color: "from-gray-600 to-gray-800", hoverColor: "text-gray-600" },
			],
		},
		{
			id: "testing",
			title: "Testing & Quality",
			description: "Testing frameworks and quality assurance tools",
			icon: CheckCircle,
			skills: [
				{ name: "Jest", icon: "/images/skills/jest-com.svg", color: "from-red-500 to-red-700", hoverColor: "text-red-500" },
				{ name: "React Testing Library", icon: "/images/skills/speed-svgrepo-com.svg", color: "from-blue-500 to-blue-700", hoverColor: "text-blue-500" },
				{ name: "Cypress", icon: "/images/skills/cypress-com.svg", color: "from-green-500 to-green-700", hoverColor: "text-green-500" },
				{ name: "TypeScript", icon: "/images/skills/typescript-com.svg", color: "from-blue-600 to-blue-800", hoverColor: "text-blue-600" },
				{ name: "Code Review", icon: "/images/skills/code-com.svg", color: "from-purple-500 to-purple-700", hoverColor: "text-purple-500" },
				{ name: "Performance", icon: "/images/skills/perfomence-com.svg", color: "from-yellow-500 to-orange-500", hoverColor: "text-yellow-500" },
			],
		},
		{
			id: "deployment",
			title: "Deployment & DevOps",
			description: "Deployment platforms and development operations",
			icon: Rocket,
			skills: [
				{ name: "Vercel", icon: "/images/skills/vercel-fill-svgrepo-com.svg", color: "from-black to-gray-800", hoverColor: "text-gray-800" },
				{ name: "Netlify", icon: "/images/skills/netlify-com.svg", color: "from-green-500 to-green-700", hoverColor: "text-green-500" },
				{ name: "GitHub Pages", icon: "/images/skills/githubpages-com.svg", color: "from-gray-600 to-gray-800", hoverColor: "text-gray-600" },
				{ name: "Docker", icon: "/images/skills/docker-com.svg", color: "from-blue-500 to-blue-700", hoverColor: "text-blue-500" },
				{ name: "CI/CD", icon: "/images/skills/terminal-com.svg", color: "from-purple-500 to-purple-700", hoverColor: "text-purple-500" },
				{ name: "Domain Management", icon: "/images/skills/domain-com.svg", color: "from-blue-600 to-blue-800", hoverColor: "text-blue-600" },
			],
		},
		// {
		// 	id: "additional",
		// 	title: "Additional Skills",
		// 	description: "Other valuable skills and technologies",
		// 	icon: Lightbulb,
		// 	skills: [
		// 		{ name: "UI/UX Design", icon: "🎨", color: "from-purple-500 to-pink-500", hoverColor: "text-purple-500" },
		// 		{ name: "Figma", icon: "🎯", color: "from-purple-600 to-purple-800", hoverColor: "text-purple-600" },
		// 		{ name: "REST APIs", icon: "🔌", color: "from-blue-500 to-blue-700", hoverColor: "text-blue-500" },
		// 		{ name: "GraphQL", icon: "🔗", color: "from-pink-500 to-purple-600", hoverColor: "text-pink-500" },
		// 		{ name: "SEO", icon: "🔍", color: "from-green-500 to-green-700", hoverColor: "text-green-500" },
		// 		{ name: "Accessibility", icon: "♿", color: "from-blue-600 to-blue-800", hoverColor: "text-blue-600" },
		// 	],
		// },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-poppins overflow-x-hidden">
			<Navbar
				logo={{ initials: "CA", text: "CalvinAprilian" }}
				onCtaClick={handleDownloadCV}
				navItems={[
					{ href: "/", label: "Home" },
					{ href: "/about", label: "About" },
					{ href: "/projects", label: "Projects" },
					{ href: "/services", label: "Skills" },
					{ href: "/contact", label: "Contact" },
				]}
			/>

			{/* Hero Section */}
			<section className="pt-20 lg:pt-32 pb-20">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
						<h1 className="text-5xl lg:text-7xl font-bold mb-6">
							My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Expertise</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							Code is my canvas, and these are my brushes. This is a reflection of my dedication to mastering the art of modern web development, from foundational principles to advanced frameworks.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-300 mx-auto mt-6"></div>
					</motion.div>

					{/* Skills Categories Grid */}
					<motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{skillCategories.map((category, index) => (
							<motion.div
								key={category.id}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 p-6 group"
							>
								{/* Category Header */}
								<div className="flex items-center mb-6">
									<div className="p-2 bg-gradient-to-r from-blue-500 to-sky-300 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
										<category.icon className="w-5 h-5 text-white" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
										<p className="text-xs text-gray-500 dark:text-gray-400">{category.description}</p>
									</div>
								</div>

								{/* Skills Grid - Simplified */}
								<div className="grid grid-cols-2 gap-4">
									{category.skills.map((skill, skillIndex) => (
										<motion.div
											key={skill.name}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
											whileHover={{ scale: 1.05 }}
											className="group/skill"
										>
											{/* Skill Card - Minimalist */}
											<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 border border-gray-200 dark:border-gray-600">
												{/* Skill Icon */}
												<div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
													{skill.icon.startsWith("/") ? (
														<img
															src={skill.icon}
															alt={skill.name}
															className={`w-6 h-6 object-contain filter dark:invert group-hover/skill:scale-110 transition-all duration-300 group-hover/skill:drop-shadow-lg group-hover/skill:${skill.hoverColor.replace("text-", "")}`}
															onError={(e) => {
																const target = e.currentTarget as HTMLImageElement;
																target.style.display = "none";
																const fallback = target.nextElementSibling as HTMLElement;
																if (fallback) {
																	fallback.style.display = "flex";
																}
															}}
														/>
													) : (
														<div className={`text-xl group-hover/skill:scale-110 transition-all duration-300 group-hover/skill:${skill.hoverColor}`}>{skill.icon}</div>
													)}
													<div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center text-white text-xs font-bold" style={{ display: "none" }}>
														{skill.name.charAt(0)}
													</div>
												</div>

												{/* Skill Name */}
												<div className={`text-xs font-medium text-gray-700 dark:text-gray-300 group-hover/skill:${skill.hoverColor} transition-colors duration-300`}>{skill.name}</div>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Skills Overview Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Skills Overview</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-300 mx-auto"></div>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Code,
								title: "Frontend Development",
								description: "React, Next.js, TypeScript, JavaScript",
								color: "from-lime-500 to-indigo-400",
							},
							{
								icon: Palette,
								title: "UI/UX Design",
								description: "Responsive design, modern interfaces",
								color: "from-purple-500 to-pink-400",
							},
							{
								icon: Zap,
								title: "Performance",
								description: "Optimization, best practices",
								color: "from-orange-500 to-yellow-400",
							},
							{
								icon: Shield,
								title: "Code Quality",
								description: "Clean code, testing, maintenance",
								color: "from-green-500 to-sky-300",
							},
						].map((skill, index) => (
							<motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center group">
								<div className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<skill.icon className="w-10 h-10 text-white" />
								</div>
								<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{skill.title}</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 font-light">{skill.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Learning Journey Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Driven by Curiosity, Built by Code</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							My learning journey is fueled by a curiosity to understand how things work and a desire to build them better. I am a junior developer dedicated to honing my skills and creating meaningful web solutions
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-6"></div>
					</motion.div>

					<div className="max-w-6xl mx-auto">
						{/* Current Experience */}
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-16">
							<div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-700">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-300 rounded-2xl flex items-center justify-center mr-6">
										<Laptop className="w-8 h-8 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
										<p className="text-blue-600 dark:text-blue-400 font-semibold">2024 - 2025 (1 year)</p>
									</div>
								</div>
								<p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
									As a developer at PT Kodein Tekno, I was assigned to lead the development of a school website. I designed and built the entire frontend, ensuring the platform was both responsive and visually interactive. My role spanned
									from creating the initial structure to conducting thorough testing and performance optimization, ultimately responsible for the seamless deployment and online publication of the site.
								</p>
								<div className="flex flex-wrap gap-3">
									{["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "Team Collaboration"].map((skill, index) => (
										<span key={index} className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
											{skill}
										</span>
									))}
								</div>
							</div>
						</motion.div>

						{/* Learning Path */}
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[
								{
									icon: BookOpen,
									title: "Self-Learning",
									period: "2022 - 2023",
									description:
										"I've cultivated my skills through relentless self-study and hands-on application. I transform theoretical knowledge from online courses and documentation into practical, functional solutions by building my own projects.",
									achievements: ["HTML/CSS Mastery", "JavaScript Fundamentals", "JavaScript Intermediate", "Git Version Control"],
								},
								{
									icon: GraduationCap,
									title: "Courses & Bootcamp",
									period: "2023 - 2024",
									description:
										"Through intensive bootcamps and specialized courses, I have built a strong foundation in modern web technologies, equipping me with the adaptability and knowledge needed to tackle new challenges and stay at the forefront of the industry.",
									achievements: ["Frontend Development", "Responsive Design", "Modern JavaScript", "React Ecosystem"],
								},
								{
									icon: User,
									title: "Personal Projects",
									period: "2022 - Present",
									description:
										" treat personal projects as a critical part of my learning process. Each project is a dedicated space to experiment with new frameworks and refine my skills, ultimately serving as tangible proof of my dedication and technical growth.",
									achievements: ["Portfolio Website", "E-commerce Demo", "Task Management App", "Weather Dashboard"],
								},
							].map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.2 }}
									viewport={{ once: true }}
									className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
								>
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-300 rounded-xl flex items-center justify-center mr-4">
											<item.icon className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
											<p className="text-sm text-blue-600 dark:text-blue-400">{item.period}</p>
										</div>
									</div>
									<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
									<div className="space-y-2">
										{item.achievements.map((achievement, achievementIndex) => (
											<div key={achievementIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
												<CheckCircle className="w-4 h-4 text-sky-300 mr-2 flex-shrink-0" />
												{achievement}
											</div>
										))}
									</div>
								</motion.div>
							))}
						</div>

						{/* Goals Section */}
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="mt-16">
							<div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-700">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
										<Goal className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Future Goals</h3>
									<p className="text-gray-600 dark:text-gray-300">Dedicated to consistently enhancing my expertise and pushing my boundaries in the world of web development</p>
								</div>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-4">
										<h4 className="font-semibold text-gray-900 dark:text-white">Short-term Goals (3-6 months)</h4>
										<ul className="space-y-2">
											<li className="flex items-center text-gray-600 dark:text-gray-300">
												<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
												Learn frontend frameworks like Angular, Svelte, and, Vue
											</li>
											<li className="flex items-center text-gray-600 dark:text-gray-300">
												<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
												Master advanced React patterns and hooks learn frontend
											</li>
											<li className="flex items-center text-gray-600 dark:text-gray-300">
												<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
												Improve design skills with Figma and Adobe XD
											</li>
										</ul>
									</div>
									<div className="space-y-4">
										<h4 className="font-semibold text-gray-900 dark:text-white">Long-term Goals (6-12 months)</h4>
										<ul className="space-y-2">
											<li className="flex items-center text-gray-600 dark:text-gray-300">
												<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
												Learn backend development with PHP and Laravel
											</li>
											<li className="flex items-center text-gray-600 dark:text-gray-300">
												<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
												learn backend development with Node.js and Express Master
											</li>
											<li className="flex items-center text-gray-600 dark:text-gray-300">
												<Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
												Learn database management with MySQL and PostgreSQL
											</li>
										</ul>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
						<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Ready to Work Together?</h2>
						<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-4">
							I'm passionate about creating exceptional digital experiences. Let's discuss how I can help bring your ideas to life!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
							<Link href="/contact" className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
								>
									Get In Touch
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<Link href="/projects" className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm sm:text-base"
								>
									View Projects
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
