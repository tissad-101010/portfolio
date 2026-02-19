/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.tsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 16:53:06 by tissad            #+#    #+#             */
/*   Updated: 2026/02/19 19:03:37 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'

import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Remote Pong Game (Transcendence at 42)',
      description: 'Transcendance is a collaborative project from the 42 curriculum, aimed at creating a fully functional online gaming platform clone. It features user management, secure authentication, real-time player communication, and a live match system with scores and statistics. The project combines both front-end and back-end development to deliver a complete interactive experience.',
      tags: [`React`, `Node.js`,  `TypeScript`,`Fastify`, `WebSockets`, `PostgreSQL`, `Redis`, `Git / GitHub`, `Docker/Doker Compose `, `Hashicorp Vault`],
      github: 'https://github.com/tissad-101010/ft_transcendence.git',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio built with Next.js, React, and TailwindCSS, showcasing projects, skills, and contact functionality. Fully front-end, optimized for GitHub Pages deployment.',
      tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'GitHub Pages'],
      github: 'https://github.com/tissad-101010/portfolio.git',
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
