/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavLink.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 10:48:37 by tissad            #+#    #+#             */
/*   Updated: 2026/02/19 17:22:01 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


import { toggleDarkMode } from "@/src/app/darkMode"



interface NavLinkClassProps {
	base: string
	lightMode: string
	darkMode: string
}

interface NavLinkProps {
	href: string
	label: string
	navClass: NavLinkClassProps
}

// handle dark mode toggle 
export function handleDarkModeToggle() {
	return (
		<a
			onClick={toggleDarkMode}
			className="ml-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:hover:bg-gray-500"
		>
			dark mode
		</a>
	)
	
}


// Common classes for navigation links
export const headerNavLinkClass = {
	base : "py-2 transition-colors duration-200",
	lightMode: "text-gray-700 hover:text-blue-600",
	darkMode: "dark:text-gray-500 dark:hover:text-white",
}
export const footerNavLinkClass = {
	base : "text-gray-400 hover:text-gray-200 transition-colors duration-200",
	lightMode: "hover:text-gray-200",
	darkMode: "dark:hover:text-gray-300",
}

// Items for the navigation menu
export const navItems = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#contact", label: "Contact" },
	{ href: "#cv", label: "CV" },
]

export function NavLink({ href, label, navClass }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${navClass.base} ${navClass.lightMode} ${navClass.darkMode}`}
    >
      {label}
    </a>
  )
}
