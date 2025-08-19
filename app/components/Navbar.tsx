"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronDown, Sun, Moon } from "lucide-react";

interface NavItem {
	href: string;
	label: string;
	submenu?: { href: string; label: string; description?: string }[];
}

interface NavbarProps {
	logo?: {
		initials: string;
		text: string;
	};
	navItems?: NavItem[];
	ctaText?: string;
	onCtaClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
	logo = { initials: "CA", text: "CalvinAprilian" },
	navItems = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{
			href: "/projects",
			label: "Projects",
			submenu: [
				{ href: "/projects", label: "All Projects", description: "View all my work" },
				{ href: "/projects?category=web", label: "Web Development", description: "Modern web applications" },
				{ href: "/projects?category=design", label: "UI/UX Design", description: "Beautiful interfaces" },
				{ href: "/projects?category=mobile", label: "Mobile Apps", description: "Cross-platform solutions" },
			],
		},
		{ href: "/services", label: "Services" },
		{ href: "/contact", label: "Contact" },
	],
	ctaText = "Download CV",
	onCtaClick,
}) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isThemeLoaded, setIsThemeLoaded] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsMounted(true);

		// Load theme from localStorage
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

		setIsDarkMode(shouldBeDark);
		setIsThemeLoaded(true);

		// Apply theme to document
		if (shouldBeDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		// Set initial scroll state
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Toggle theme function
	const toggleTheme = () => {
		const newTheme = !isDarkMode;
		setIsDarkMode(newTheme);

		if (newTheme) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	// Close mobile menu when pathname changes
	useEffect(() => {
		setIsMobileMenuOpen(false);
		setActiveDropdown(null);
	}, [pathname]);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (activeDropdown && !(event.target as Element).closest(".dropdown-container")) {
				setActiveDropdown(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [activeDropdown]);

	// Prevent hydration mismatch
	if (!isMounted || !isThemeLoaded) {
		return (
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 font-poppins">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-sm font-poppins">{logo.initials}</span>
							</div>
							<span className="text-gray-900 dark:text-white font-bold text-xl font-poppins">{logo.text}</span>
						</div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out font-poppins ${
					isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg" : "bg-transparent"
				}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="flex items-center justify-between h-16 lg:h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center space-x-3 group cursor-pointer">
							<motion.div
								className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
								whileHover={{ rotate: 5 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="text-white font-bold text-sm lg:text-base font-poppins">{logo.initials}</span>
							</motion.div>

							<span className="text-gray-900 dark:text-white font-bold text-xl lg:text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-poppins">{logo.text}</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-6">
							{navItems.map((item, index) => (
								<motion.div key={item.href} className="relative dropdown-container" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
									{item.submenu ? (
										<div className="relative">
											<motion.button
												onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
												onMouseEnter={() => setActiveDropdown(item.href)}
												className={`relative px-4 py-2 transition-all duration-300 font-medium font-poppins rounded-lg group ${
													pathname === item.href
														? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
														: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
												}`}
												whileHover={{ y: -1 }}
												whileTap={{ scale: 0.95 }}
											>
												<div className="flex items-center space-x-1">
													<span>{item.label}</span>
													<motion.div animate={{ rotate: activeDropdown === item.href ? 180 : 0 }} transition={{ duration: 0.2 }}>
														<ChevronDown className="w-3 h-3" />
													</motion.div>
												</div>
											</motion.button>

											{/* Dropdown Menu */}
											<AnimatePresence>
												{activeDropdown === item.href && (
													<motion.div
														initial={{ opacity: 0, y: -10, scale: 0.95 }}
														animate={{ opacity: 1, y: 0, scale: 1 }}
														exit={{ opacity: 0, y: -10, scale: 0.95 }}
														transition={{ duration: 0.2 }}
														className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden"
														onMouseLeave={() => setActiveDropdown(null)}
													>
														<div className="p-2">
															{item.submenu.map((subItem, subIndex) => (
																<motion.div key={subItem.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: subIndex * 0.05, duration: 0.2 }}>
																	<Link href={subItem.href} className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group">
																		<div className="flex items-start space-x-3">
																			<div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
																			<div>
																				<div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{subItem.label}</div>
																				{subItem.description && <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subItem.description}</div>}
																			</div>
																		</div>
																	</Link>
																</motion.div>
															))}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									) : (
										<motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
											<Link
												href={item.href}
												className={`relative px-4 py-2 transition-all duration-300 font-medium font-poppins rounded-lg ${
													pathname === item.href
														? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
														: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
												}`}
											>
												{item.label}
											</Link>
										</motion.div>
									)}
								</motion.div>
							))}

							{/* Divider */}
							<div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-4"></div>

							{/* Dark Mode Toggle */}
							<motion.button
								onClick={toggleTheme}
								className="relative p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
							>
								<AnimatePresence mode="wait">
									{isDarkMode ? (
										<motion.div key="sun" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
											<Sun className="w-4 h-4 text-yellow-500" />
										</motion.div>
									) : (
										<motion.div key="moon" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
											<Moon className="w-4 h-4 text-blue-600" />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>

							{/* CTA Button */}
							<motion.button
								onClick={onCtaClick}
								className="relative px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-poppins group"
								whileHover={{ y: -2, scale: 1.02 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="flex items-center space-x-2">
									<Download className="w-4 h-4" />
									<span>{ctaText}</span>
								</span>
							</motion.button>
						</div>

						{/* Mobile Menu Button */}
						<div className="lg:hidden flex items-center space-x-2">
							{/* Mobile Dark Mode Toggle */}
							<motion.button
								onClick={toggleTheme}
								className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<AnimatePresence mode="wait">
									{isDarkMode ? (
										<motion.div key="sun" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
											<Sun className="w-4 h-4 text-yellow-500" />
										</motion.div>
									) : (
										<motion.div key="moon" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
											<Moon className="w-4 h-4 text-blue-600" />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>

							{/* Mobile Menu Button */}
							<motion.button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none"
								aria-label="Toggle mobile menu"
								aria-expanded={isMobileMenuOpen}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<AnimatePresence mode="wait">
									{isMobileMenuOpen ? (
										<motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
											<X className="w-5 h-5" />
										</motion.div>
									) : (
										<motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
											<Menu className="w-5 h-5" />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.button>
						</div>
					</div>

					{/* Mobile Menu */}
					<AnimatePresence>
						{isMobileMenuOpen && (
							<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden overflow-hidden">
								<div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
									<div className="py-6 px-4 space-y-2">
										{navItems.map((item, index) => (
											<motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.3 }}>
												{item.submenu ? (
													<div>
														<motion.button
															onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
															className={`w-full text-left transition-all duration-200 py-3 px-4 rounded-lg font-medium font-poppins flex items-center justify-between ${
																pathname === item.href
																	? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
																	: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
															}`}
															whileHover={{ x: 2 }}
															whileTap={{ scale: 0.98 }}
														>
															<span>{item.label}</span>
															<motion.div animate={{ rotate: activeDropdown === item.href ? 180 : 0 }} transition={{ duration: 0.2 }}>
																<ChevronDown className="w-4 h-4" />
															</motion.div>
														</motion.button>

														<AnimatePresence>
															{activeDropdown === item.href && (
																<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="ml-4 mt-2 space-y-1">
																	{item.submenu.map((subItem, subIndex) => (
																		<motion.div key={subItem.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: subIndex * 0.05, duration: 0.2 }}>
																			<Link
																				href={subItem.href}
																				className="block py-2 px-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-200 text-sm"
																			>
																				<div className="font-medium">{subItem.label}</div>
																				{subItem.description && <div className="text-gray-500 dark:text-gray-500 text-xs mt-1">{subItem.description}</div>}
																			</Link>
																		</motion.div>
																	))}
																</motion.div>
															)}
														</AnimatePresence>
													</div>
												) : (
													<motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
														<Link
															href={item.href}
															className={`block w-full text-left transition-all duration-200 py-3 px-4 rounded-lg font-medium font-poppins ${
																pathname === item.href
																	? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
																	: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
															}`}
														>
															{item.label}
														</Link>
													</motion.div>
												)}
											</motion.div>
										))}

										{/* Mobile CTA Button */}
										<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.3 }} className="pt-4 border-t border-gray-200 dark:border-gray-700">
											<motion.button
												onClick={() => {
													onCtaClick?.();
													setIsMobileMenuOpen(false);
												}}
												className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 font-poppins flex items-center justify-center space-x-2"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.95 }}
											>
												<Download className="w-4 h-4" />
												<span>{ctaText}</span>
											</motion.button>
										</motion.div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</nav>

			{/* Backdrop for mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
