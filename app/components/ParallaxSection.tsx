"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
	children: React.ReactNode;
	className?: string;
	speed?: number;
	direction?: "up" | "down";
	offset?: number;
}

export default function ParallaxSection({ children, className = "", speed = 0.5, direction = "up", offset = 0 }: ParallaxSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [offset, offset - 100 * speed] : [offset, offset + 100 * speed]);

	return (
		<motion.div ref={ref} style={{ y }} className={className}>
			{children}
		</motion.div>
	);
}

interface ParallaxTextProps {
	children: React.ReactNode;
	className?: string;
	speed?: number;
	direction?: "up" | "down";
	offset?: number;
}

export function ParallaxText({ children, className = "", speed = 0.3, direction = "up", offset = 0 }: ParallaxTextProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [offset, offset - 50 * speed] : [offset, offset + 50 * speed]);

	return (
		<motion.div ref={ref} style={{ y }} className={className}>
			{children}
		</motion.div>
	);
}

interface ParallaxImageProps {
	src: string;
	alt: string;
	className?: string;
	speed?: number;
	direction?: "up" | "down";
	offset?: number;
}

export function ParallaxImage({ src, alt, className = "", speed = 0.5, direction = "up", offset = 0 }: ParallaxImageProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [offset, offset - 100 * speed] : [offset, offset + 100 * speed]);

	return (
		<motion.div ref={ref} style={{ y }} className={className}>
			<img src={src} alt={alt} className="w-full h-full object-cover" />
		</motion.div>
	);
}
