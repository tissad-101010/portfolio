/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.tsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/17 16:57:18 by tissad            #+#    #+#             */
/*   Updated: 2026/02/17 18:03:25 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useState } from "react"



export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-800 p-4">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center dark:bg-gray-600">
							<svg className="w-6 h-6 text-white dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
							</svg>
						</div>
						<div>
							<h1 className="text-2xl font-bold dark:text-white">Tahar Issad - Portfolio</h1>
							<p className="text-sm text-gray-500 dark:text-gray-300">Full-Stack Developer</p>
						</div>
					</div>
				
				
					<div className="hidden md:flex items-center space-x-8 ">
						<a href="#projets" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-white">
							Projets
						</a>
						<a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-white">
							À propos
						</a>
						<a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-white">
							Contact
						</a>
						<a href="#cv" className="text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-white">
							CV
						</a>
					</div>
				{/* buger for mobile view */}
				<div className="md:hidden flex items-center">
					<button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-300 dark:hover:text-white dark:focus:ring-gray-300" 
						onClick={() => setIsOpen(!isOpen)}>
						<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{isOpen ? (
                				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              				) : (
                				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              				)}
						</svg>
					</button>
				</div>
				</div>
				{isOpen && (
					<div className="md:hidden pb-4">
						<div className="flex flex-col space-y-2">
						<a href="#projets" className="text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-white">
							Projets
						</a>
						<a href="#apropos" className="text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-white">
							À propos
						</a>
						<a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-white">
							Contact
						</a>
						<a href="#cv" className="text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-white">
							CV
						</a>
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}    