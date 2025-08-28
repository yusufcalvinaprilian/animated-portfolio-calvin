"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Clock, CheckCircle, ArrowRight, Github } from "lucide-react";
import Navbar from "../components/Navbar";
import Link from "next/link";

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

		// Format pesan untuk WhatsApp
		const whatsappMessage = `*New Message from Portfolio Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
Sent from your portfolio contact form`;

		// Encode pesan untuk URL WhatsApp
		const encodedMessage = encodeURIComponent(whatsappMessage);
		const whatsappUrl = `https://wa.me/6281393242056?text=${encodedMessage}`;

		// Buka WhatsApp di tab baru
		window.open(whatsappUrl, "_blank");

		// Reset form
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "yusufcalvinaprilian@gmail.com",
			link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+6281393242056",
			link: "https://wa.me/+6281393242056",
		},
		{
			icon: Github,
			title: "Github",
			value: "Yusuf Calvin Aprilian",
			link: "https://www.github.com/yusufcalvinaprilian",
		},
		{
			icon: Linkedin,
			title: "LinkedIn",
			value: "yusufcalvinaprilian",
			link: "https://www.linkedin.com/in/yusufcalvinaprilian",
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
					{ href: "/services", label: "Skills" },
					{ href: "/contact", label: "Contact" },
				]}
			/>

			{/* Hero Section */}
			<section className="pt-20 lg:pt-32 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12 lg:mb-16">
						<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6">
							Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-300">Touch</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light px-4">
							Ready to start your next project? I'm always looking for new challenges and opportunities to grow. If my work resonates with you, I'd love to discuss how I can bring value to your company.
						</p>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-300 mx-auto mt-6"></div>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg"
						>
							<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Send Me a Message</h2>
							<div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
								<div className="flex items-center gap-2">
									<Send className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
									<span className="text-sm sm:text-base text-green-800 dark:text-green-200 font-medium">Your message will be sent directly to my WhatsApp</span>
								</div>
							</div>
							<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
								<div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
									className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
								>
									<Send className="w-4 h-4" />
									Send via WhatsApp
								</motion.button>
							</form>
						</motion.div>

						{/* Contact Information */}
						<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-6 lg:space-y-8">
							<div>
								<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's Connect</h2>
								<p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 font-light">
									I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
								</p>
							</div>

							<div className="space-y-4 sm:space-y-6">
								{contactInfo.map((info, index) => (
									<motion.a
										key={index}
										href={info.link}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
									>
										<div className="p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
											<info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
										</div>
										<div className="min-w-0 flex-1">
											<h3 className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base">{info.title}</h3>
											<p className="text-gray-600 dark:text-gray-300 font-light text-sm sm:text-base truncate">{info.value}</p>
										</div>
									</motion.a>
								))}
							</div>

							{/* Availability */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-4 sm:p-6"
							>
								<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
									<Clock className="w-4 h-4 sm:w-5 sm:h-5" />
									Availability
								</h3>
								<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 font-light">I'm currently available for new projects and collaborations.</p>
								<div className="flex items-center space-x-2">
									<CheckCircle className="w-4 h-4 text-green-400" />
									<span className="text-green-400 font-medium text-sm sm:text-base">Available for work</span>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">Frequently Asked Questions</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-300 mx-auto"></div>
					</motion.div>

					<div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
						{[
							{
								question: "What kind of projects are you interested in working on?",
								answer:
									" I'm passionate about contributing to projects that have a meaningful impact on users. I am particularly interested in working on large-scale web applications, tackling complex performance challenges, or building beautiful and intuitive user interfaces.",
							},
							{
								question: "How do you approach code quality and maintainability?",
								answer:
									"I believe that a great project is not just functional, but also maintainable. My approach includes writing clean, well-documented code, conducting thorough unit and integration testing, and performing regular code reviews to ensure long-term stability and ease of collaboration.",
							},
							{
								question: "What technologies are you most proficient in?",
								answer:
									"I specialize in the modern frontend stack, including React, Next.js, TypeScript, and Tailwind CSS. I also have foundational knowledge of backend development with Node.js and experience working with server-side concepts, which helps me collaborate effectively with backend engineers.",
							},
							{
								question: "How do you collaborate within a team environment?",
								answer:
									"I prioritize clear and consistent communication. I am adept at using tools like Slack/Discord for daily updates and Jira/Trello for project management. I also believe in the importance of constructive code reviews and providing timely feedback to ensure a smooth and productive workflow for the entire team.",
							},
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300"
							>
								<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">{faq.question}</h3>
								<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
						<h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Let's Build Something Great Together</h2>
						<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto font-light px-4">
							I'm passionate about collaborating with an innovative, driven team. If your company's vision aligns with my skills, let's create something exceptional.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
							<Link href="/" className="w-full sm:w-auto">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
								>
									Back to Home
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
