"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleDownloadCV = () => {
		console.log("Downloading CV...");
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Here you would typically send the form data to your backend
		alert("Thank you for your message! I'll get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "hello@frontenddev.com",
			link: "mailto:hello@frontenddev.com",
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+1 (555) 123-4567",
			link: "tel:+15551234567",
		},
		{
			icon: MapPin,
			title: "Location",
			value: "San Francisco, CA",
			link: "#",
		},
		{
			icon: Linkedin,
			title: "LinkedIn",
			value: "linkedin.com/in/frontenddev",
			link: "https://linkedin.com/in/frontenddev",
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
							Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Touch</span>
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
							Ready to start your next project? Let's discuss your ideas and create something amazing together. I'm always excited to hear about new opportunities!
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mt-6"></div>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
							<h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
											placeholder="your.email@example.com"
										/>
									</div>
								</div>
								<div>
									<label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
										placeholder="What's this about?"
									/>
								</div>
								<div>
									<label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
										placeholder="Tell me about your project..."
									></textarea>
								</div>
								<motion.button
									type="submit"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
								>
									<Send className="w-4 h-4" />
									Send Message
								</motion.button>
							</form>
						</motion.div>

						{/* Contact Information */}
						<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
							<div>
								<h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
								<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-light">
									I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
								</p>
							</div>

							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<motion.a
										key={index}
										href={info.link}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
									>
										<div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
											<info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
										</div>
										<div>
											<h3 className="text-gray-900 dark:text-white font-semibold">{info.title}</h3>
											<p className="text-gray-600 dark:text-gray-300 font-light">{info.value}</p>
										</div>
									</motion.a>
								))}
							</div>

							{/* Availability */}
							<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6">
								<h3 className="text-xl font-bold mb-3 flex items-center gap-2">
									<Clock className="w-5 h-5" />
									Availability
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 font-light">I'm currently available for new projects and collaborations.</p>
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-400" />
									<span className="text-green-400 font-medium">Available for work</span>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
						<h2 className="text-4xl lg:text-6xl font-bold mb-8">Frequently Asked Questions</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto"></div>
					</motion.div>

					<div className="max-w-4xl mx-auto space-y-6">
						{[
							{
								question: "What is your typical project timeline?",
								answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
							},
							{
								question: "Do you provide ongoing support after launch?",
								answer: "Yes! I offer various support packages including maintenance, updates, and technical support. We can discuss the best option for your needs.",
							},
							{
								question: "What technologies do you specialize in?",
								answer: "I specialize in modern frontend technologies including React, Next.js, TypeScript, and Tailwind CSS. I also work with Node.js for backend development when needed.",
							},
							{
								question: "How do you handle project communication?",
								answer: "I maintain regular communication throughout the project via email, video calls, and project management tools. You'll receive regular updates on progress.",
							},
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
							>
								<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
								<p className="text-gray-600 dark:text-gray-300 font-light">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-32 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Start Your Project?</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-light">Let's discuss your ideas and create something amazing together. I'm excited to hear about your project!</p>
						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
								Start a Project
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={handleDownloadCV}
								className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300"
							>
								Download Resume
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
