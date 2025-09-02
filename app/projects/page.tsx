"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Filter, Lightbulb, Users, TrendingUp, Zap, Code, Target, Heart, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ProjectsPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const handleDownloadCV = () => {
		console.log("Downloading CV...");
	};

	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			description: "A modern e-commerce website with React and Node.js, featuring user authentication, product management, and payment integration.",
			image: "/images/project/project.png",
			tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
			category: "Full Stack",
			liveUrl: "#",
		},
		{
			id: 2,
			title: "Admin Dashboard Panel",
			description: "A modern and responsive admin dashboard UI built for seamless e-commerce management. Features include a dynamic layout, interactive charts for sales data, and a user-friendly interface for product management.",
			image: "/images/project/project2.png",
			tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"],
			category: "Full Stack",
			liveUrl: "admin-panel.vercel.app",
		},
		{
			id: 3,
			title: "Portfolio Website",
			description: "Responsive portfolio website with modern animations, smooth scrolling, and interactive elements built with React and Framer Motion.",
			image: "/images/project/project3.png",
			tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
			category: "Frontend",
			liveUrl: "portfolioyusufcalvinaprilian.vercel.app",
		},
		{
			id: 4,
			title: "Weather Dashboard",
			description: "Real-time weather dashboard with location-based forecasts, interactive maps, and beautiful data visualization.",
			image: "/project4.jpg",
			tech: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
			category: "Frontend",
			liveUrl: "#",
		},
		{
			id: 5,
			title: "Blog Platform",
			description: "Content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
			image: "/project5.jpg",
			tech: ["Next.js", "Markdown", "MongoDB", "NextAuth", "Vercel"],
			category: "Full Stack",
			liveUrl: "#",
		},
		{
			id: 6,
			title: "Social Media Dashboard",
			description: "Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.",
			image: "/project6.jpg",
			tech: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
			category: "Frontend",
			liveUrl: "#",
		},
	];

	const categories = ["All", "Frontend", "Full Stack", "Mobile"];

	const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

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
							My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Playground</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							A gallery of my creations. Each project is a testament to my dedication to clean code, great design, and a passion for building things that matter.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-300 mx-auto mt-6"></div>
					</motion.div>

					{/* Filter Buttons */}
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12">
						{categories.map((category) => (
							<motion.button
								key={category}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.85 }}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
									selectedCategory === category
										? "bg-blue-600 text-white"
										: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
								}`}
							>
								{category}
							</motion.button>
						))}
					</motion.div>

					{/* Projects Grid */}
					<motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -10 }}
								className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 overflow-hidden group"
							>
								{/* Project Image */}
								<div className="relative overflow-hidden">
									{project.image ? (
										<Image src={project.image} alt={project.title} width={1600} height={900} sizes="(max-width: 1024px) 100vw, 33vw" className="w-full h-auto object-contain object-center" />
									) : (
										<div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
											<span className="text-gray-600 text-lg">{project.title}</span>
										</div>
									)}
									<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<div className="flex gap-4">
											{project.liveUrl && (
												<Link href={project.liveUrl.startsWith("http") ? project.liveUrl : `https://${project.liveUrl}`} target="_blank">
													<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
														<ExternalLink className="w-4 h-4" />
														Live Demo
													</motion.button>
												</Link>
											)}
										</div>
									</div>
								</div>

								{/* Project Content */}
								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm border border-blue-200 dark:border-blue-700">{project.category}</span>
									</div>

									<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 font-light">{project.description}</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech) => (
											<span key={tech} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded text-xs border border-emerald-200 dark:border-emerald-700">
												{tech}
											</span>
										))}
									</div>

									{/* Project Links */}
									<div className="flex gap-3">
										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm flex items-center justify-center gap-2"
										>
											<ExternalLink className="w-3 h-3" />
											View Live
										</motion.button>
										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											className="flex-1 px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm flex items-center justify-center gap-2"
										>
											<Github className="w-3 h-3" />
											Source Code
										</motion.button>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Why Choose Me Section */}
			<section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl"></div>
				</div>

				<div className="container mx-auto px-6 lg:px-8 relative z-10">
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">
							Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-300">Choose Me</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							I bring a unique combination of technical expertise, creative problem-solving, and collaborative spirit that drives exceptional results for your company
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
						{/* Left Side - Main Feature */}
						<motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="relative">
							<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl relative overflow-hidden">
								{/* Decorative Background */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>

								<div className="relative z-10">
									<div className="flex items-center gap-4 mb-6">
										<div className="p-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl">
											<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
											</svg>
										</div>
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white">Full-Stack Excellence</h3>
									</div>
									<p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed">
										I specialize in building scalable, performant applications from concept to deployment. My expertise spans the entire development stack, ensuring seamless integration and optimal user experiences.
									</p>
									<div className="flex flex-wrap gap-3">
										{["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"].map((tech, index) => (
											<motion.span
												key={tech}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.4 + index * 0.1 }}
												viewport={{ once: true }}
												className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							</div>
						</motion.div>

						{/* Right Side - Feature Grid */}
						<motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="space-y-6">
							{[
								{
									icon: <Lightbulb className="w-8 h-8" />,
									title: "Problem Solver",
									description: "I approach challenges with analytical thinking and creative solutions, always focusing on the most efficient path to success.",
								},
								{
									icon: <Users className="w-8 h-8" />,
									title: "Team Player",
									description: "Excellent communication skills and collaborative mindset. I thrive in cross-functional teams and contribute to a positive work culture.",
								},
								{
									icon: <TrendingUp className="w-8 h-8" />,
									title: "Results Driven",
									description: "Committed to delivering high-quality code that meets business objectives and exceeds user expectations.",
								},
								{
									icon: <Zap className="w-8 h-8" />,
									title: "Fast Learner",
									description: "Quick to adapt to new technologies and methodologies, ensuring I can hit the ground running on any project.",
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{
										x: 10,
										transition: { duration: 0.3 },
									}}
									className="group cursor-pointer"
								>
									<div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-lg transition-all duration-300">
										<div className="flex items-start gap-4">
											<div className="p-2 bg-gradient-to-r from-blue-500 to-sky-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
											<div>
												<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
												<p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">{feature.description}</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Bottom CTA */}
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} viewport={{ once: true }} className="text-center">
						<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Build Something Amazing?</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-6 font-light">Let's discuss how my skills and passion can contribute to your team's success</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
								<motion.button
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
								>
									Schedule Interview
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm sm:text-base"
								>
									View Resume
								</motion.button>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
						<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Looking for a Frontend Developer?</h2>
						<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-4">
							I believe my skills in React & Next.js would be a valuable asset to your team. Please feel free to reach out to discuss potential opportunities.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
							<Link href="/contact" className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
								>
									Let's Connect
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<Link href="/services" className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm sm:text-base"
								>
									View Skills
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
