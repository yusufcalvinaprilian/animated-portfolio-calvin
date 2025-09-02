"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
	const handleDownloadCV = () => {
		console.log("Downloading CV...");
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
							The Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-300">Alchemist</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							Driven by a passion for the craft, I specialize in bringing ambitious ideas to life with a keen eye for detail and a dedication to perfection.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-300 mx-auto mt-6"></div>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Profile Image */}
						<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
							<div className="relative w-full h-96 rounded-2xl border border-blue-200 backdrop-blur-sm overflow-hidden">
								<Image src="/images/profile/calvin-img-prl.png" alt="Yusuf Calvin Aprilian" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain object-center rounded-2xl" />
							</div>
							<div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
							<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
						</motion.div>

						{/* About Content */}
						<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-6">
							<h2 className="text-3xl font-bold mb-4">Frontend Developer & UI/UX Enthusiast</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
								Behind those neat lines of code is me: <b>Yusuf Calvin Aprilian</b>, a front-end developer who believes the web is a canvas for limitless innovation. Explore my portfolio to see how I bring my digital visions to life, one
								pixel at a time.
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
								My professional journey is a testament to my dedication to continuous learning. As a developer with one year of experience, I’ve cultivated a versatile skill set in Next.js and React, allowing me to build not just websites,
								but comprehensive digital experiences. I thrive on solving complex problems and collaborating with talented individuals. This portfolio is a glimpse into my progress and my unwavering commitment to becoming a better
								developer every day.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Technical Excellence Section */}
			<section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
				{/* Animated Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sky-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

					{/* Floating Code Elements */}
					<motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 left-20 text-blue-400/20 text-sm font-mono">
						&lt;React&gt;
					</motion.div>
					<motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-32 right-20 text-indigo-400/20 text-sm font-mono">
						TypeScript
					</motion.div>
					<motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/3 right-1/4 text-sky-400/20 text-sm font-mono">
						Next.js
					</motion.div>
				</div>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">
							Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-300">Excellence</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							Here, the art of design meets the science of code. I believe that true technical excellence is found in the intersection of beautiful user experience and perfectly optimized, scalable architecture.
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-3 gap-8">
						{[
							{
								category: "Frontend Mastery",
								skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
								icon: (
									<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								),
								gradient: "from-blue-500 to-sky-500",
							},
							{
								category: "Backend & DevOps",
								skills: ["Node.js", "PHP", "Laravel", "MySQL", "CI/CD"],
								icon: (
									<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
										/>
									</svg>
								),
								gradient: "from-emerald-500 to-teal-500",
							},
							{
								category: "Design & UX",
								skills: ["Figma", "Framer", "Prototyping", "Design Systems", "User Research"],
								icon: (
									<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
									</svg>
								),
								gradient: "from-purple-500 to-pink-500",
							},
						].map((category, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50, scale: 0.9 }}
								whileInView={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
								viewport={{ once: true }}
								whileHover={{
									y: -10,
									scale: 1.02,
									transition: { duration: 0.3 },
								}}
								className="group bg-white/10 backdrop-blur-md border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 relative overflow-hidden"
							>
								<div className="bg-white/10 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 relative overflow-hidden">
									{/* Hover Effect Background */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 dark:bg-gray-800/20"></div>

									<div className="relative z-10">
										<div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white mb-6 inline-block group-hover:scale-110 transition-transform duration-300`}>{category.icon}</div>

										<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.category}</h3>

										<div className="space-y-3">
											{category.skills.map((skill, skillIndex) => (
												<motion.div key={skillIndex} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 + skillIndex * 0.1 }} viewport={{ once: true }} className="flex items-center gap-3">
													<div className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
													<span className="text-gray-600 dark:text-gray-300 font-medium">{skill}</span>
												</motion.div>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Professional Journey Section */}
			<section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl"></div>
				</div>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">
							Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-300">Journey</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">A timeline of growth, challenges overcome, and milestones achieved in my development career</p>
					</motion.div>

					<div className="max-w-5xl mx-auto">
						{[
							{
								title: "Frontend Developer",
								company: "Sekolah Developer Indonesia",
								period: "2024 - 2025",
								achievements: [
									"Specifically assigned to develop a school website through the business unit of PT Kodein Tekno",
									"Responsible for the development and maintenance of the school's internal web system",
									"Designing a modern, responsive, and user-friendly user interface",
									"Conducted deployment, testing, and performance optimization for online publication",
								],
								technologies: ["TypeScript", "React", "Next JS", "Tailwind CSS", "Git", "Figma"],
								year: "2024",
							},
						].map((experience, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className={`flex flex-col lg:flex-row gap-8 items-center mb-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
							>
								{/* Timeline Dot */}
								<motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }} viewport={{ once: true }} className="relative z-10">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">{experience.year.slice(-2)}</div>
									{index < 2 && <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-sky-500"></div>}
								</motion.div>

								{/* Experience Card */}
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 + 0.4 }}
									viewport={{ once: true }}
									whileHover={{
										y: -5,
										transition: { duration: 0.3 },
									}}
									className="flex-1"
								>
									<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
										<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
											<div>
												<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.title}</h3>
												<div className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{experience.company}</div>
											</div>
											<span className="text-gray-500 dark:text-gray-400 font-medium mt-2 lg:mt-0">{experience.period}</span>
										</div>

										<div className="mb-6">
											<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
											<ul className="space-y-2">
												{experience.achievements.map((achievement, achievementIndex) => (
													<motion.li
														key={achievementIndex}
														initial={{ opacity: 0, x: -20 }}
														whileInView={{ opacity: 1, x: 0 }}
														transition={{ delay: index * 0.2 + 0.5 + achievementIndex * 0.1 }}
														viewport={{ once: true }}
														className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
													>
														<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
														<span className="font-light">{achievement}</span>
													</motion.li>
												))}
											</ul>
										</div>

										<div>
											<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
											<div className="flex flex-wrap gap-2">
												{experience.technologies.map((tech, techIndex) => (
													<motion.span
														key={techIndex}
														initial={{ opacity: 0, scale: 0.8 }}
														whileInView={{ opacity: 1, scale: 1 }}
														transition={{ delay: index * 0.2 + 0.6 + techIndex * 0.1 }}
														viewport={{ once: true }}
														className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
													>
														{tech}
													</motion.span>
												))}
											</div>
										</div>
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
						<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Unlock Your Project's Potential</h2>
						<p className="text-lg sm:text-xl text-gray-400 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-4">
							As a developer with a user-centric focus, I am ready to help your team build a superior digital solution. Let's discuss how I can contribute to your next project.
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
									View My Work
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
