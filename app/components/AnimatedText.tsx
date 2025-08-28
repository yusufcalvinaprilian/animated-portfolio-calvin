"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTextProps {
	texts: string[];
	interval?: number;
	typingSpeed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, interval = 3000, typingSpeed = 100 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		if (isTyping) {
			const currentFullText = texts[currentIndex];
			if (currentText.length < currentFullText.length) {
				const timer = setTimeout(() => {
					setCurrentText(currentFullText.slice(0, currentText.length + 1));
				}, typingSpeed);
				return () => clearTimeout(timer);
			} else {
				// Finished typing current text, wait before moving to next
				const timer = setTimeout(() => {
					setIsTyping(false);
				}, 1000); // Wait 1 second after typing is complete
				return () => clearTimeout(timer);
			}
		} else {
			// Start deleting text
			if (currentText.length > 0) {
				const timer = setTimeout(() => {
					setCurrentText(currentText.slice(0, -1));
				}, typingSpeed / 2); // Delete faster than typing
				return () => clearTimeout(timer);
			} else {
				// Text is completely deleted, move to next
				setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
				setIsTyping(true);
			}
		}
	}, [currentText, currentIndex, isTyping, texts, typingSpeed]);

	return (
		<div className="relative h-8 sm:h-10 overflow-hidden">
			<motion.span key={currentIndex} className="absolute inset-0 flex items-center justify-center font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
				{currentText}
				{/* Blinking cursor */}
				<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-1 w-0.5 h-6 bg-blue-600 dark:bg-blue-400" />
			</motion.span>
		</div>
	);
};

export default AnimatedText;
