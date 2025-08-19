"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";

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
					{ href: "/services", label: "Services" },
					{ href: "/contact", label: "Contact" },
				]}
			/>

			{/* Hero Section */}
			<section className="pt-20 lg:pt-32 pb-20">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
						<h1 className="text-5xl lg:text-7xl font-bold mb-6">
							About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Me</span>
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Profile Image */}
						<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
							<div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl border border-blue-200 backdrop-blur-sm flex items-center justify-center">
								<span className="text-gray-600 text-lg">Profile Image</span>
							</div>
							<div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
							<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl"></div>
						</motion.div>

						{/* About Content */}
						<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-6">
							<h2 className="text-3xl font-bold mb-4">Frontend Developer & UI/UX Enthusiast</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
								Hello! I'm a passionate frontend developer with over 3 years of experience creating beautiful, responsive, and user-friendly web applications. I specialize in modern JavaScript frameworks and have a keen eye for design and
								user experience.
							</p>
							<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
								My journey in web development started with curiosity and has evolved into a career focused on delivering exceptional user experiences through clean code and intuitive design. I believe in writing maintainable code and
								staying up-to-date with the latest industry trends.
							</p>

							{/* Stats */}
							<div className="grid grid-cols-2 gap-6 pt-6">
								<div className="text-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
									<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
									<div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
								</div>
								<div className="text-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
									<div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
									<div className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Skills & Expertise</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Frontend Development */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
						>
							<div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🎨</div>
							<h3 className="text-xl font-bold mb-4">Frontend Development</h3>
							<ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
								<li>• React & Next.js</li>
								<li>• TypeScript & JavaScript</li>
								<li>• HTML5 & CSS3</li>
								<li>• Tailwind CSS & Styled Components</li>
								<li>• Responsive Design</li>
							</ul>
						</motion.div>

						{/* UI/UX Design */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
						>
							<div className="text-emerald-600 dark:text-emerald-400 text-4xl mb-4">✨</div>
							<h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
							<ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
								<li>• User Interface Design</li>
								<li>• User Experience Design</li>
								<li>• Figma & Adobe XD</li>
								<li>• Prototyping</li>
								<li>• Design Systems</li>
							</ul>
						</motion.div>

						{/* Tools & Technologies */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
						>
							<div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">🛠️</div>
							<h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
							<ul className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
								<li>• Git & GitHub</li>
								<li>• VS Code & WebStorm</li>
								<li>• Node.js & npm</li>
								<li>• Webpack & Vite</li>
								<li>• Testing (Jest, React Testing Library)</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Experience</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
					</motion.div>

					<div className="max-w-4xl mx-auto space-y-8">
						{[
							{
								title: "Senior Frontend Developer",
								company: "Tech Company",
								period: "2022 - Present",
								description: "Leading frontend development for multiple web applications using React and Next.js.",
							},
							{
								title: "Frontend Developer",
								company: "Startup",
								period: "2021 - 2022",
								description: "Developed responsive web applications and collaborated with design teams.",
							},
							{
								title: "Junior Developer",
								company: "Digital Agency",
								period: "2020 - 2021",
								description: "Started my journey in web development with HTML, CSS, and JavaScript.",
							},
						].map((job, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
							>
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
									<h3 className="text-xl font-bold dark:text-white">{job.title}</h3>
									<span className="text-blue-600 dark:text-blue-400 font-semibold">{job.period}</span>
								</div>
								<div className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">{job.company}</div>
								<p className="text-gray-600 dark:text-gray-300 font-light">{job.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Work Together?</h2>
						<p className="text-xl text-gray-400 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light">Let's create something amazing together. I'm always open to new opportunities and exciting projects.</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link href="/contact">
								<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
									Get In Touch
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<Link href="/projects">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
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
