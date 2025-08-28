"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechItem {
	name: string;
	icon: string;
	color: string;
}

interface InfiniteScrollProps {
	items: TechItem[];
	direction: "left" | "right";
	title: string;
	delay?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ items, direction, title, delay = 0 }) => {
	return (
		<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay }} viewport={{ once: true }} className="mb-12">
			<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{title}</h3>
			<div className="relative overflow-hidden">
				<div className={`flex animate-scroll-${direction}`}>
					{/* First set */}
					<div className="flex space-x-16 items-center">
						{items.map((tech, index) => (
							<div key={`${tech.name}-${index}`} className="flex flex-col items-center space-y-3 min-w-[120px]">
								<div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>{tech.icon}</div>
								<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
							</div>
						))}
					</div>
					{/* Duplicate set for seamless loop */}
					<div className="flex space-x-16 items-center">
						{items.map((tech, index) => (
							<div key={`${tech.name}-duplicate-${index}`} className="flex flex-col items-center space-y-3 min-w-[120px]">
								<div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>{tech.icon}</div>
								<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default InfiniteScroll;
