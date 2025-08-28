"use client";

import React from "react";
import { FileCode, Code2, Palette, Database, GitBranch, Github, Code, FileText, Layers, Zap, Cpu, Globe, Server, Box, Package, TestTube, GitMerge, Network } from "lucide-react";

interface TechIconProps {
	name: string;
}

const TechIconV2: React.FC<TechIconProps> = ({ name }) => {
	const getIcon = (techName: string) => {
		switch (techName) {
			case "react":
				return <Code2 className="w-12 h-12 text-blue-500 hover:text-blue-600 transition-colors duration-300" />;
			case "nextjs":
				return <FileCode className="w-12 h-12 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300" />;
			case "typescript":
				return <Code className="w-12 h-12 text-blue-600 hover:text-blue-700 transition-colors duration-300" />;
			case "javascript":
				return <Code2 className="w-12 h-12 text-yellow-400 hover:text-yellow-500 transition-colors duration-300" />;
			case "tailwind":
				return <Palette className="w-12 h-12 text-cyan-500 hover:text-cyan-600 transition-colors duration-300" />;
			case "css3":
				return <Layers className="w-12 h-12 text-blue-500 hover:text-blue-600 transition-colors duration-300" />;
			case "html5":
				return <FileText className="w-12 h-12 text-orange-500 hover:text-orange-600 transition-colors duration-300" />;
			case "nodejs":
				return <Server className="w-12 h-12 text-green-500 hover:text-green-600 transition-colors duration-300" />;
			case "git":
				return <GitBranch className="w-12 h-12 text-orange-500 hover:text-orange-600 transition-colors duration-300" />;
			case "github":
				return <Github className="w-12 h-12 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300" />;
			case "vscode":
				return <Code className="w-12 h-12 text-blue-500 hover:text-blue-600 transition-colors duration-300" />;
			case "figma":
				return <Palette className="w-12 h-12 text-purple-500 hover:text-purple-600 transition-colors duration-300" />;
			case "postgresql":
				return <Database className="w-12 h-12 text-blue-600 hover:text-blue-700 transition-colors duration-300" />;
			case "mongodb":
				return <Database className="w-12 h-12 text-green-500 hover:text-green-600 transition-colors duration-300" />;
			case "docker":
				return <Box className="w-12 h-12 text-blue-500 hover:text-blue-600 transition-colors duration-300" />;
			case "sass":
				return <Layers className="w-12 h-12 text-pink-500 hover:text-pink-600 transition-colors duration-300" />;
			case "webpack":
				return <Package className="w-12 h-12 text-blue-500 hover:text-blue-600 transition-colors duration-300" />;
			case "jest":
				return <TestTube className="w-12 h-12 text-red-500 hover:text-red-600 transition-colors duration-300" />;
			case "redux":
				return <GitMerge className="w-12 h-12 text-purple-500 hover:text-purple-600 transition-colors duration-300" />;
			case "graphql":
				return <Network className="w-12 h-12 text-pink-500 hover:text-pink-600 transition-colors duration-300" />;
			default:
				return (
					<div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
						<span className="text-xs text-gray-600 dark:text-gray-400">{name}</span>
					</div>
				);
		}
	};

	return getIcon(name);
};

export default TechIconV2;
