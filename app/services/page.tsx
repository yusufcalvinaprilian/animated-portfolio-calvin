"use client";

import { motion } from "framer-motion";
import { Globe, Palette, Zap, Wrench, Lightbulb, Rocket, ArrowRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function ServicesPage() {
	const handleDownloadCV = () => {
		console.log("Downloading CV...");
	};

	const services = [
		{
			id: 1,
			title: "Web Development",
			description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. Responsive, fast, and user-friendly websites.",
			icon: Globe,
			features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps (PWA)", "API Integration", "Performance Optimization", "SEO Optimization"],
			price: "Starting from $2,000",
		},
		{
			id: 2,
			title: "UI/UX Design",
			description: "Beautiful and intuitive user interfaces designed with user experience in mind. From wireframes to high-fidelity prototypes.",
			icon: Palette,
			features: ["User Interface Design", "User Experience Design", "Wireframing & Prototyping", "Design Systems", "Mobile App Design", "Design Consultation"],
			price: "Starting from $1,500",
		},
		{
			id: 3,
			title: "Frontend Development",
			description: "Modern frontend development using the latest technologies. Clean, maintainable code with excellent performance.",
			icon: Zap,
			features: ["React & Next.js Development", "TypeScript Implementation", "Responsive Design", "Component Libraries", "State Management", "Testing & Debugging"],
			price: "Starting from $1,800",
		},
		{
			id: 4,
			title: "Website Maintenance",
			description: "Ongoing support and maintenance for your websites. Regular updates, security patches, and performance monitoring.",
			icon: Wrench,
			features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "Content Updates", "Backup Management", "24/7 Support"],
			price: "Starting from $200/month",
		},
		{
			id: 5,
			title: "Consultation",
			description: "Expert advice on web development, technology choices, and project planning. Let's discuss your ideas and find the best solutions.",
			icon: Lightbulb,
			features: ["Technology Consulting", "Project Planning", "Code Review", "Performance Audits", "Best Practices Guidance", "Team Training"],
			price: "Starting from $100/hour",
		},
		{
			id: 6,
			title: "Custom Solutions",
			description: "Tailored solutions for your specific needs. From complex applications to simple tools, I can build exactly what you need.",
			icon: Rocket,
			features: ["Custom Applications", "Integration Services", "Third-party API Development", "Database Design", "Scalable Architecture", "Documentation"],
			price: "Custom Quote",
		},
	];

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
							My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Services</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							Comprehensive web development and design services to help bring your digital ideas to life. From concept to deployment, I'm here to help you succeed.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
					</motion.div>

					{/* Services Grid */}
					<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -10 }}
								className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 p-8 group"
							>
								{/* Service Icon */}
								<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
									<service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								</div>

								{/* Service Content */}
								<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">{service.description}</p>

								{/* Features List */}
								<ul className="space-y-3 mb-6">
									{service.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300 font-light">
											<Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-3 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>

								{/* Price */}
								<div className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-6">{service.price}</div>

								{/* CTA Button */}
								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
								>
									Get Started
									<ArrowRight className="w-4 h-4" />
								</motion.button>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">My Process</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								step: "01",
								title: "Discovery",
								description: "Understanding your needs, goals, and requirements through detailed consultation.",
							},
							{
								step: "02",
								title: "Planning",
								description: "Creating detailed project plans, wireframes, and technical specifications.",
							},
							{
								step: "03",
								title: "Development",
								description: "Building your project with clean, efficient code and regular updates.",
							},
							{
								step: "04",
								title: "Launch",
								description: "Deploying your project and providing ongoing support and maintenance.",
							},
						].map((process, index) => (
							<motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-white font-bold text-xl">{process.step}</span>
								</div>
								<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{process.title}</h3>
								<p className="text-gray-600 dark:text-gray-300 font-light">{process.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Pricing Plans</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								name: "Basic",
								price: "$2,000",
								description: "Perfect for small projects and startups",
								features: ["Custom Website Design", "Responsive Layout", "Basic SEO Setup", "Contact Form", "1 Month Support", "Basic Analytics"],
							},
							{
								name: "Professional",
								price: "$5,000",
								description: "Ideal for growing businesses",
								features: ["Everything in Basic", "E-commerce Integration", "Advanced SEO", "Content Management System", "3 Months Support", "Performance Optimization"],
								popular: true,
							},
							{
								name: "Enterprise",
								price: "Custom",
								description: "For large-scale projects",
								features: ["Everything in Professional", "Custom Web Application", "API Development", "Database Design", "6 Months Support", "Priority Support"],
							},
						].map((plan, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
								className={`bg-white dark:bg-gray-800 border rounded-2xl p-8 relative ${plan.popular ? "border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20" : "border-gray-200 dark:border-gray-700"}`}
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-semibold rounded-full">Most Popular</span>
									</div>
								)}

								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
									<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-2">{plan.price}</div>
									<p className="text-gray-600 dark:text-gray-300 font-light">{plan.description}</p>
								</div>

								<ul className="space-y-4 mb-8">
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300 font-light">
											<Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mr-3 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>

								<motion.button
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
										plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
									}`}
								>
									Get Started
									<ArrowRight className="w-4 h-4" />
								</motion.button>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Get Started?</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light">Let's discuss your project and find the perfect solution for your needs. I'm here to help you bring your ideas to life!</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link href="/contact">
								<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
									Start a Project
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
							<Link href="/contact">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="px-8 py-4 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
								>
									Get a Quote
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
