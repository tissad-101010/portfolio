'use client'

import ProjectCard from './ProjectCard'
import { projects } from '@/src/lib/portfolioData'

export default function Projects() {
	return (
		<section id="projects" className="bg-white py-16 dark:bg-gray-800 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">My Projects</h2>
					<p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
						Here are some of the projects I have worked on, showcasing my skills in C++, Node.js, React and more. Each project demonstrates my ability to solve complex problems and deliver high-quality software solutions.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	)
}
