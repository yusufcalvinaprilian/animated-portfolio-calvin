"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Github, Linkedin, Download, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ParallaxSection, { ParallaxText } from "./components/ParallaxSection";
import AnimatedText from "./components/AnimatedText";
import TechIcon from "./components/TechIcon";

export default function Page() {
	const handleDownloadCV = () => {
		console.log("handleDownloadCV called");
		// File ID: 1CCLKRKX0gOyqNzlIwJTO2rVL4F1lrnXZ
		const resumeUrl = "https://drive.google.com/uc?export=download&id=1CCLKRKX0gOyqNzlIwJTO2rVL4F1lrnXZ";
		console.log("Opening URL:", resumeUrl);
		window.open(resumeUrl, "_blank");
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-poppins overflow-x-hidden">
			<Navbar
				logo={{ initials: "CA", text: "CalvinAprilian" }}
				onCtaClick={handleDownloadCV}
				resumeUrl="https://drive.google.com/uc?export=download&id=1CCLKRKX0gOyqNzlIwJTO2rVL4F1lrnXZ"
				navItems={[
					{ href: "/", label: "Home" },
					{ href: "/about", label: "About" },
					{ href: "/projects", label: "Projects" },
					{ href: "/services", label: "Skills" },
					{ href: "/contact", label: "Contact" },
				]}
			/>

			{/* Hero Section */}
			<section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 pt-20 pb-32">
				{/* Dynamic Background Elements */}
				<div className="absolute inset-0">
					{/* Animated Wave Pattern */}
					<div className="absolute inset-0 opacity-20 dark:opacity-30">
						<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<path fill="url(#gradient)" d="M0,50 C20,30 40,70 60,50 C80,30 100,50 100,50 L100,100 L0,100 Z">
								<animate
									attributeName="d"
									dur="6s"
									repeatCount="indefinite"
									values="M0,50 C20,30 40,70 60,50 C80,30 100,50 100,50 L100,100 L0,100 Z;
											M0,60 C20,40 40,60 60,40 C80,20 100,40 100,40 L100,100 L0,100 Z;
											M0,50 C20,30 40,70 60,50 C80,30 100,50 100,50 L100,100 L0,100 Z"
								/>
							</path>
							<path fill="url(#gradient2)" d="M0,70 C25,50 50,90 75,70 C100,50 100,70 100,70 L100,100 L0,100 Z" opacity="0.6">
								<animate
									attributeName="d"
									dur="8s"
									repeatCount="indefinite"
									values="M0,70 C25,50 50,90 75,70 C100,50 100,70 100,70 L100,100 L0,100 Z;
											M0,80 C25,60 50,80 75,60 C100,40 100,60 100,60 L100,100 L0,100 Z;
											M0,70 C25,50 50,90 75,70 C100,50 100,70 100,70 L100,100 L0,100 Z"
								/>
							</path>
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
									<stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.3" />
									<stop offset="100%" stopColor="#3730A3" stopOpacity="0.4" />
								</linearGradient>
								<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
									<stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
									<stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					{/* Floating Particles */}
					{Array.from({ length: 20 }).map((_, i) => (
						<motion.div
							key={i}
							animate={{
								y: [0, -100, 0],
								x: [0, Math.random() * 50 - 25, 0],
								opacity: [0, 1, 0],
								scale: [0, 1, 0],
							}}
							transition={{
								duration: 4 + Math.random() * 3,
								repeat: Infinity,
								delay: Math.random() * 4,
								ease: "easeInOut",
							}}
							className="absolute w-2 shadow-lg h-2 bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-300 dark:to-indigo-200 rounded-full"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
						></motion.div>
					))}

					{/* Rotating Rings */}
					{Array.from({ length: 4 }).map((_, i) => (
						<motion.div
							key={i}
							animate={{
								rotate: [0, 360],
								scale: [1, 1.2, 1],
								opacity: [0.1, 0.3, 0.1],
							}}
							transition={{
								duration: 20 + i * 5,
								repeat: Infinity,
								delay: i * 2,
								ease: "linear",
							}}
							className="absolute border border-blue-400/20 dark:border-blue-300/20 rounded-full"
							style={{
								width: `${200 + i * 100}px`,
								height: `${200 + i * 100}px`,
								left: "50%",
								top: "50%",
								transform: "translate(-50%, -50%)",
							}}
						></motion.div>
					))}

					{/* Glowing Orbs */}
					<motion.div
						animate={{
							scale: [1, 1.4, 1],
							opacity: [0.1, 0.4, 0.1],
							x: [0, 40, 0],
							y: [0, -30, 0],
						}}
						transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
						className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full blur-3xl"
					></motion.div>
					<motion.div
						animate={{
							scale: [1, 0.7, 1],
							opacity: [0.1, 0.5, 0.1],
							x: [0, -30, 0],
							y: [0, 40, 0],
						}}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
						className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 dark:from-indigo-400/30 dark:to-blue-400/30 rounded-full blur-3xl"
					></motion.div>
				</div>

				{/* Main Content */}
				<div className="container pb-4 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="flex items-center justify-center min-h-screen">
						<div className="text-center max-w-6xl mx-auto px-4">
							{/* Animated Title */}
							<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="mb-8 sm:mb-12">
								<motion.div transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="inline-block">
									<h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-4 sm:mb-6">
										<span className="text-gray-900 dark:text-white">Frontend</span>
										<br />
										<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-blue-300">Developer</span>
									</h1>
								</motion.div>
								<p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
									Architecting the web with a relentless focus on performance, accessibility, and pixel-perfect attention
								</p>
							</motion.div>

							{/* Animated Role Text */}
							<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="max-w-4xl mx-auto mb-12 sm:mb-16">
								<motion.div
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.8 }}
									className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-lg"
								>
									<motion.h3
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 1.0 }}
										className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center flex flex-col sm:flex-row items-center justify-center gap-2"
									>
										<span>I'm a</span>
										<span className="inline-block min-w-[180px] sm:min-w-[200px] lg:min-w-[250px]">
											<AnimatedText texts={["Frontend Developer", "JavaScript Expert", "Web Developer", "Software Engineer", "React Specialist", "Next JS Developer", "UI/UX Designer", "Creative Coder"]} interval={4000} typingSpeed={80} />
										</span>
									</motion.h3>

									<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
										Passionate about creating exceptional digital experiences through innovative design and cutting-edge technology. Specializing in modern web development with a focus on user-centric solutions and performance optimization.
									</motion.p>
								</motion.div>
							</motion.div>

							{/* Interactive Skills Carousel */}
							<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mb-12 sm:mb-16">
								<div className="flex flex-wrap justify-center gap-3 sm:gap-6">
									{["JavaScript", "TypeScript", "React", "Next JS", "Tailwind CSS", "Node JS"].map((skill, index) => (
										<motion.div
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.2, delay: 0 + index * 0.1 }}
											whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
											className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 dark:from-blue-400/20 dark:to-indigo-400/20 backdrop-blur-md border border-blue-400/30 dark:border-blue-300/30 rounded-2xl text-sm sm:text-lg font-medium text-gray-900 dark:text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
										>
											{skill}
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* Enhanced CTA Buttons */}
							<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 w-full">
								<Link href="/projects" className="w-full sm:w-auto">
									<motion.button
										whileHover={{ scale: 1.05, y: -3 }}
										whileTap={{ scale: 0.95 }}
										className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-2xl hover:shadow-3xl text-sm sm:text-lg"
									>
										View Projects
										<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
									</motion.button>
								</Link>
								<Link href="/contact" className="w-full sm:w-auto">
									<motion.button
										whileHover={{ scale: 1.05, y: -3 }}
										whileTap={{ scale: 0.95 }}
										className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 backdrop-blur-sm text-sm sm:text-lg shadow-xl hover:shadow-2xl"
									>
										Let's Connect
									</motion.button>
								</Link>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Floating Action Button */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
					<motion.button
						onClick={() => scrollToSection("about")}
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						whileHover={{ scale: 1.1 }}
						className="p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 backdrop-blur-md border border-blue-400/30 dark:border-blue-300/30 rounded-full text-white hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-2xl hover:shadow-3xl relative group"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
						<ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
					</motion.button>
				</motion.div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-700 to-white dark:to-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-6xl mx-auto">
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
							<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">About Me</h2>
							<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"> A dedicated frontend developer committed to transforming ideas into exceptional digital experiences.</p>
						</motion.div>

						<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
							{/* Left Side - Content */}
							<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="space-y-8">
								<div className="space-y-8">
									<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
										<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
										<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
											I'm a passionate frontend developer with over 1 years of experience creating beautiful, responsive, and user-friendly web applications. I specialize in modern JavaScript frameworks and have a keen eye for design and
											user experience.
										</p>
									</motion.div>

									<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }}>
										<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Development Philosophy</h3>
										<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
											My journey in web development started with curiosity and has evolved into a career focused on delivering exceptional user experiences through clean code and intuitive design.
										</p>
									</motion.div>

									<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} viewport={{ once: true }}>
										<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mission & Vision</h3>
										<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">I believe in the power of technology to solve real-world problems and create meaningful connections between users and digital products.</p>
									</motion.div>
								</div>
							</motion.div>

							{/* Right Side - Image */}
							<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="relative">
								<motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }} className="relative group">
									{/* Glow Effect */}
									<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

									{/* Image Container */}
									<div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
										{/* Profile Image Area */}
										<div className="w-full h-96 rounded-2xl relative overflow-hidden">
											{/* Profile Image */}
											<div className="w-full h-full flex items-center justify-center">
												<motion.div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
													<img
														src="/images/profile/Foto Formal Calvin.png"
														alt="Calvin Aprilian - Frontend Developer"
														className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
														onError={(e) => {
															// Fallback jika gambar tidak ditemukan
															const target = e.target as HTMLImageElement;
															target.style.display = "none";
															const fallback = target.nextElementSibling as HTMLElement;
															if (fallback) {
																fallback.classList.remove("hidden");
																fallback.classList.add("flex");
															}
														}}
													/>
													{/* Fallback jika gambar tidak ada */}
													<div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center">
														<svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
														</svg>
													</div>

													{/* Subtle overlay on hover */}
													<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
												</motion.div>
											</div>

											{/* Subtle background gradient */}
											<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 dark:from-gray-700/30 dark:to-gray-800/30 rounded-2xl pointer-events-none"></div>
										</div>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
				{/* Background Parallax Elements */}
				<ParallaxSection speed={0.3} direction="up" className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
				</ParallaxSection>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<ParallaxText speed={0.2} direction="up" className="text-center mb-16">
						<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
							<h2 className="text-4xl lg:text-6xl font-bold mb-8">Featured Projects</h2>
							<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A selection of my recent work showcasing modern web development and design principles.</p>
						</motion.div>
					</ParallaxText>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: "E-Commerce Platform",
								description: "Modern e-commerce website with React and Node.js",
								tech: ["React", "Node.js", "MongoDB", "Stripe"],
								image: "Project 1",
							},
							{
								title: "Task Management App",
								description: "Collaborative task management with real-time updates",
								tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
								image: "Project 2",
							},
							{
								title: "Portfolio Website",
								description: "Responsive portfolio with modern animations",
								tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
								image: "Project 3",
							},
						].map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
								className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
							>
								<div className="h-48 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
									<span className="text-gray-600 dark:text-gray-400 text-lg">{project.image}</span>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-xs border border-blue-200 dark:border-blue-700">
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="text-center mt-16">
						<Link href="/projects">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
							>
								View All Projects
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 relative overflow-hidden">
				{/* Background Parallax Elements */}
				<ParallaxSection speed={0.4} direction="down" className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-cyan-500/5 rounded-full blur-3xl"></div>
				</ParallaxSection>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<ParallaxText speed={0.3} direction="up" className="text-center mb-16">
						<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
							<h2 className="text-4xl lg:text-6xl font-bold mb-8">Tools & Technologies</h2>
							<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A deep dive into the technologies I wield to solve complex problems and build beautiful, high-performing applications.</p>
						</motion.div>
					</ParallaxText>

					{/* Enhanced Infinite Scroll Skills */}
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="relative overflow-hidden">
						{/* Blur Effects */}
						<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>
						<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>

						<div className="flex animate-scroll-left group" style={{ willChange: "transform" }}>
							{/* First set */}
							<div className="flex space-x-20 items-center py-8" style={{ backfaceVisibility: "hidden" }}>
								{[
									{ name: "React", svg: "react" },
									{ name: "Next.js", svg: "nextjs" },
									{ name: "TypeScript", svg: "typescript" },
									{ name: "JavaScript", svg: "javascript" },
									{ name: "Tailwind CSS", svg: "tailwind" },
									{ name: "CSS3", svg: "css3" },
									{ name: "HTML5", svg: "html5" },
									{ name: "Node.js", svg: "nodejs" },
									{ name: "Git", svg: "git" },
									{ name: "GitHub", svg: "github" },
									{ name: "VS Code", svg: "vscode" },
									{ name: "Figma", svg: "figma" },
									{ name: "Sass", svg: "sass" },
									{ name: "Webpack", svg: "webpack" },
								].map((tech, index) => (
									<div key={`${tech.name}-${index}`} className="flex flex-col items-center space-y-4 min-w-[100px] group/item">
										<div className="w-20 h-20 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-12 group-hover/item:animate-pulse">
											<TechIcon name={tech.svg} />
										</div>
										<span className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">{tech.name}</span>
									</div>
								))}
							</div>
							{/* Duplicate set for seamless loop */}
							<div className="flex space-x-20 items-center py-8" style={{ backfaceVisibility: "hidden" }}>
								{[
									{ name: "React", svg: "react" },
									{ name: "Next.js", svg: "nextjs" },
									{ name: "TypeScript", svg: "typescript" },
									{ name: "JavaScript", svg: "javascript" },
									{ name: "Tailwind CSS", svg: "tailwind" },
									{ name: "CSS3", svg: "css3" },
									{ name: "HTML5", svg: "html5" },
									{ name: "Node.js", svg: "nodejs" },
									{ name: "Git", svg: "git" },
									{ name: "GitHub", svg: "github" },
									{ name: "VS Code", svg: "vscode" },
									{ name: "Figma", svg: "figma" },
									{ name: "Sass", svg: "sass" },
									{ name: "Webpack", svg: "webpack" },
								].map((tech, index) => (
									<div key={`${tech.name}-duplicate-${index}`} className="flex flex-col items-center space-y-4 min-w-[100px] group/item">
										<div className="w-20 h-20 flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-12 group-hover/item:animate-pulse">
											<TechIcon name={tech.svg} />
										</div>
										<span className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">{tech.name}</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
				{/* Background Parallax Elements */}
				<ParallaxSection speed={0.5} direction="up" className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
				</ParallaxSection>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<ParallaxText speed={0.4} direction="up" className="text-center max-w-3xl mx-auto">
						<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
							<h2 className="text-4xl lg:text-6xl font-bold mb-8">Let's Work Together</h2>
							<p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">I'm always interested in new opportunities and exciting projects. Let's create something amazing together!</p>
							<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-6 justify-center">
								<Link href="/about">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
									>
										My Journey
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</motion.button>
								</Link>
							</motion.div>
						</motion.div>
					</ParallaxText>
				</div>
			</section>
		</div>
	);
}
