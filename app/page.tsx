"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Page() {
	const handleDownloadCV = () => {
		console.log("Downloading CV...");
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
				navItems={[
					{ href: "/", label: "Home" },
					{ href: "/about", label: "About" },
					{ href: "/projects", label: "Projects" },
					{ href: "/services", label: "Services" },
					{ href: "/contact", label: "Contact" },
				]}
			/>

			{/* Hero Section */}
			<section className="min-h-screen flex items-center justify-center relative">
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
				</div>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center max-w-4xl mx-auto">
						<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8">
							<div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200 dark:border-blue-700 rounded-full text-sm text-blue-700 dark:text-blue-400 mb-6">
								<span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
								Available for new opportunities
							</div>
						</motion.div>

						<motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-5xl lg:text-8xl font-bold mb-6 leading-tight">
							Frontend
							<br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Developer</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
						>
							I create exceptional digital experiences with clean code and beautiful design. Specializing in modern web technologies and user-centered solutions.
						</motion.p>

						<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
							<Link href="/projects">
								<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
									View My Work
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<Link href="/contact">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-4 border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
								>
									Get In Touch
								</motion.button>
							</Link>
						</motion.div>

						{/* Social Links */}
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="flex justify-center gap-6 mb-12">
							{[
								{ icon: Github, href: "#", label: "GitHub" },
								{ icon: Linkedin, href: "#", label: "LinkedIn" },
								{ icon: Twitter, href: "#", label: "Twitter" },
								{ icon: Mail, href: "#", label: "Email" },
							].map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="p-3 bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200 dark:border-blue-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
									aria-label={social.label}
								>
									<social.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								</motion.a>
							))}
						</motion.div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
					<motion.button
						onClick={() => scrollToSection("about")}
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
					>
						<ChevronDown className="w-6 h-6" />
					</motion.button>
				</motion.div>
			</section>

			{/* About Section */}
			<section id="about" className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-4xl lg:text-6xl font-bold mb-8">
								About Me
							</motion.h2>
							<motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
								I'm a passionate frontend developer with over 3 years of experience creating beautiful, responsive, and user-friendly web applications. I specialize in modern JavaScript frameworks and have a keen eye for design and user
								experience.
							</motion.p>
							<motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
								My journey in web development started with curiosity and has evolved into a career focused on delivering exceptional user experiences through clean code and intuitive design.
							</motion.p>
							<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
								<div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200 dark:border-blue-700 rounded-xl">
									<div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
									<div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
								</div>
								<div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 backdrop-blur-sm border border-emerald-200 dark:border-emerald-700 rounded-xl">
									<div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">50+</div>
									<div className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</div>
								</div>
							</motion.div>
						</div>
						<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="relative">
							<div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-blue-200 dark:border-blue-700 backdrop-blur-sm flex items-center justify-center">
								<span className="text-gray-600 dark:text-gray-400 text-lg">Profile Image</span>
							</div>
							<div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
							<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Featured Projects</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A selection of my recent work showcasing modern web development and design principles.</p>
					</motion.div>

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
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Skills & Technologies</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life.</p>
					</motion.div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "CSS3", "HTML5", "Node.js", "Git", "Figma", "Responsive Design", "UI/UX"].map((skill, index) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-center"
							>
								<div className="text-gray-900 dark:text-white font-semibold">{skill}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Let's Work Together</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">I'm always interested in new opportunities and exciting projects. Let's create something amazing together!</p>
						<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link href="/contact">
								<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
									Get In Touch
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={handleDownloadCV}
								className="px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
							>
								Download Resume
							</motion.button>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
