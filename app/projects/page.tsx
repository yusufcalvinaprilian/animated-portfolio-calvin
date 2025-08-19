"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

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
			image: "/project1.jpg",
			tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
			category: "Full Stack",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 2,
			title: "Task Management App",
			description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
			image: "/project2.jpg",
			tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS"],
			category: "Full Stack",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 3,
			title: "Portfolio Website",
			description: "Responsive portfolio website with modern animations, smooth scrolling, and interactive elements built with React and Framer Motion.",
			image: "/project3.jpg",
			tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
			category: "Frontend",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 4,
			title: "Weather Dashboard",
			description: "Real-time weather dashboard with location-based forecasts, interactive maps, and beautiful data visualization.",
			image: "/project4.jpg",
			tech: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
			category: "Frontend",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 5,
			title: "Blog Platform",
			description: "Content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
			image: "/project5.jpg",
			tech: ["Next.js", "Markdown", "MongoDB", "NextAuth", "Vercel"],
			category: "Full Stack",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 6,
			title: "Social Media Dashboard",
			description: "Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.",
			image: "/project6.jpg",
			tech: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
			category: "Full Stack",
			liveUrl: "#",
			githubUrl: "#",
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
					{ href: "/services", label: "Services" },
					{ href: "/contact", label: "Contact" },
				]}
			/>

			{/* Hero Section */}
			<section className="pt-20 lg:pt-32 pb-20">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
						<h1 className="text-5xl lg:text-7xl font-bold mb-6">
							My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Projects</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							Explore my latest work and creative solutions. Each project represents a unique challenge and showcases my skills in modern web development.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
					</motion.div>

					{/* Filter Buttons */}
					<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12">
						{categories.map((category) => (
							<motion.button
								key={category}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
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
								<div className="h-48 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center relative overflow-hidden">
									<span className="text-gray-600 text-lg">{project.title}</span>
									<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<div className="flex gap-4">
											<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
												<ExternalLink className="w-4 h-4" />
												Live Demo
											</motion.button>
											<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors font-medium flex items-center gap-2">
												<Github className="w-4 h-4" />
												GitHub
											</motion.button>
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

			{/* Stats Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						{[
							{ number: "50+", label: "Projects Completed" },
							{ number: "30+", label: "Happy Clients" },
							{ number: "3+", label: "Years Experience" },
							{ number: "100%", label: "Client Satisfaction" },
						].map((stat, index) => (
							<motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="p-6">
								<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">{stat.number}</div>
								<div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Start Your Project?</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light">Let's collaborate to bring your ideas to life. I'm excited to work on your next project!</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link href="/contact">
								<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
									Start a Project
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<Link href="/services">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
								>
									View Services
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
