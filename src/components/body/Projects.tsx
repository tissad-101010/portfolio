/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.tsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 16:53:06 by tissad            #+#    #+#             */
/*   Updated: 2026/02/24 20:42:02 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'

import ProjectCard from './ProjectCard'

export default function Projects() {
	const projects = [
		{
			title: 'Remote Pong Game (Transcendence at 42)',
			description: 'Transcendance is a collaborative project from the 42 curriculum,\
				aimed at creating a fully functional online gaming platform clone. \
				It features user management, secure authentication, real-time player communication, \
				and a live match system with scores and statistics. \
				The project combines both front-end and back-end development to deliver a complete \
				interactive experience.',
			tags: [`React`, `Node.js`,  `TypeScript`,`Fastify`, `WebSockets`, `PostgreSQL`, `Redis`, `Git / GitHub`, `Docker/Doker Compose `, `Hashicorp Vault`],
			github: 'https://github.com/tissad-101010/ft_transcendence.git',
		},
		{
			title: 'Personal Portfolio Website',
			description: 'A responsive personal portfolio built with Next.js, React, and TailwindCSS, \
				showcasing projects, skills, and contact functionality. Fully front-end, \
				optimized for GitHub Pages deployment.',
			tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'GitHub Pages'],
			github: 'https://github.com/tissad-101010/portfolio.git',
		},
		{
			title: 'ft_linear_regression',
			description: 'An introduction to artificial intelligence and machine learning is \
				provided through the implementation of a basic linear regression model. \
				A program is developed to predict car prices using a linear function trained with \
				a gradient descent algorithm. The project covers data handling, cost functions, \
				parameter optimization, and model training, laying the foundation for further \
				studies in machine learning and applied mathematics.',
			tags: ['Python', 'Machine Learning', 'Linear Regression', 'Gradient Descent'],
			github: 'https://github.com/tissad-101010/linear_regression.git',
		},
		{
			title: 'Webserv',
			description: 'A custom HTTP server is implemented from scratch, \
				following the HTTP/1.1 specification. The server is designed to handle client requests, \
				manage connections, and serve web content that can be tested using a real web browser. \
				Core concepts such as request parsing, response generation, status codes, \
				and server configuration are explored. \
				This project provides a deep understanding of how web servers operate internally and \
				of the HTTP protocol, one of the most widely used protocols on the internet.',
			tags: ['C++', 'HTTP/1.1', 'Networking', 'Server Implementation', 'Sockets'],
			github: 'https://github.com/tissad-101010/42cursus_webserv.git',
		},
		{
			title: 'Inception',
			description: 'A complete containerized infrastructure is designed and deployed using Docker \
				and Docker Compose. Multiple services are configured and orchestrated, \
				including NGINX with SSL/TLS, WordPress with PHP-FPM, and MariaDB. \
				The project focuses on container networking, volume management, environment isolation, \
				and secure service configuration. \
				All services are deployed within a personal virtual machine, \
				reinforcing best practices in system administration, containerization, \
				and secure web service deployment.',
			tags: ['Docker', 'Docker Compose', 'NGINX', 'WordPress', 'MariaDB'],
			github: 'https://github.com/tissad-101010/42cursus_Inception.git',
		},
		{
			title: 'cub3d',
			description: 'A ray-casting engine inspired by early 3D first-person games is developed. \
				The project focuses on rendering a real-time, first-person perspective inside a maze by \
				Player movement and rotation are implemented with collision detection to ensure realistic \
				navigation within the environment. The engine handles keyboard input, map parsing, \
				texture loading, and screen rendering using MiniLibX. Performance considerations \
				such as efficient ray calculation and frame updates are addressed to maintain smooth gameplay.\
				This project reinforces concepts in computer graphics, trigonometry, \
				and low-level optimization while strengthening understanding of game engine fundamentals.',
			tags: ['C', 'MiniLibX', 'Computer graphics', 'Trigonometry', 'Game development'],
			github: 'https://github.com/tissad-101010/cub3d.git',
			demo: '/portfolio/cub3d.webm',
		},
		{
			title: 'NetPractice',
			description: 'Core computer networking fundamentals are taught through hands-on \
				problem-solving. TCP/IP addressing, subnetting, routing, default gateways, \
				and OSI layers are practiced using interactive network diagrams.',
			tags: ['Networking', 'TCP/IP', 'Subnetting', 'Routing', 'OSI Layers'],
			github: 'https://github.com/tissad-101010/netpractice.git',
		},
		{
			title: 'Minishell',

			description: 'A minimal UNIX shell is developed, closely replicating the behavior of a \
			standard shell. The project involves parsing user input, handling command execution, \
			and managing processes using system calls such as fork, execve, and wait. \
			Input is tokenized and interpreted to support command sequences, pipes, \
			and redirections.\
			Signal handling is implemented to manage user interactions (Ctrl-C, Ctrl-D, Ctrl-\) \
			in an interactive environment. Several built-in commands, \
			such as cd, echo, pwd, export, unset, and exit, are implemented to behave consistently \
			with their UNIX counterparts. Environment variables are managed dynamically, \
			and error handling is carefully designed to ensure robust and predictable shell behavior.\
			The project emphasizes low-level system programming, process control, \
			and a deep understanding of UNIX principles.',
			tags: ['C', 'UNIX', 'System programming', 'Process control', 'Signal handling', 'Git / GitHub'],
			github: 'https://github.com/tissad-101010/minishell.git',
		},
		{
			title: 'Philosophers',
			description: 'Concurrent programming concepts are introduced, \
				with a focus on multithreading and multiprocessing. \
				Synchronization issues such as race conditions and deadlocks are addressed.',
			tags: ['C', 'Multithreading', 'Multiprocessing', 'Synchronization', 'Rigor'],
			github: 'https://github.com/tissad-101010/philosophers.git',
		},
		{
			title: 'push_swap',
			description: 'Data is sorted within a stack using a limited set of instructions \
				while minimizing the number of operations. Various sorting algorithms are \
				explored and optimized based on the input size.',
			tags: ['C', 'Algorithms', 'Rigor', 'Algorithms & AI'],
			github: 'https://github.com/tissad-101010/push_swap.git',
		},
		{
			title: 'fract-ol',
			description: 'Two-dimensional graphical programming is explored through the visualization \
				of fractals. The project uses MiniLibX to render mathematical fractals and handle \
				graphical events.',
			tags: ['C', 'MiniLibX', 'Mathematics', 'Graphics'],
			github: 'https://github.com/tissad-101010/fract-ol.git',
		},
		{
			title: 'pipex',
			description: 'A deeper understanding of UNIX concepts such as redirections and pipes is \
				developed. The project serves as an introduction to more advanced UNIX-based projects \
				later in the curriculum.',
			tags: ['Algorithms', 'Rigor', 'Imperative programming'],
			github: 'https://github.com/tissad-101010/pipex.git',
		},
		{
			title: 'Born2beroot',
			description: 'An introduction to system administration and virtualization is provided. \
				The project focuses on installing and configuring a secure virtual machine while \
				following strict security and system configuration rules.',
			tags: ['Rigor', 'System administration', 'Virtualization', 'Unix', 'network'],
			github: 'https://github.com/tissad-101010/born2beroot.git',
		},
		{
			title: 'ft_printf',
			description: 'The standard C printf function is recoded. Through this project, \
				variadic functions are studied and implemented. Once validated, \
				the function is reused in subsequent projects.',
			tags: ['Rigor', 'Imperative programming', 'Algorithms', 'Unix'],
			github: 'https://github.com/tissad-101010/ft_printf.git',
		},
		{
			title: 'Get Next Line',
			description: 'A function is implemented to read content line by line from a file descriptor, \
				whether the input comes from a file, standard input, or a future network connection. \
				This function is designed to be reused throughout later projects.',
			tags: ['Rigor', 'Imperative programming', 'Algorithms', 'Git / GitHub', 'Unix'],
			github: 'https://github.com/tissad-101010/get_next_line.git',
		},
		{
			title: 'LBFT',
			description: 'This project is the very first project undertaken as a learner at 42. \
				A few functions from the C standard library must be recoded, along with additional \
				utility functions that will be used throughout the entire curriculum.',
			tags: ['Rigor', 'Imperative programming', 'Algorithms', 'Unix'],
			github: 'https://github.com/tissad-101010/lbft.git',
		},

	]

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
