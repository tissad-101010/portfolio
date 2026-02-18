/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavLink.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 10:48:37 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 12:40:53 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */



interface NavLinkProps {
    href: string
    label: string
}

// Common classes for navigation links
const navLinkClass = {
    base : "py-2 transition-colors duration-200",
    lightMode: "text-gray-700 hover:text-blue-600",
    darkMode: "dark:text-gray-500 dark:hover:text-white",
}

// Items for the navigation menu
export const navItems = [
  { href: "#projets", label: "Projets" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
  { href: "#cv", label: "CV" },
]

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${navLinkClass.base} 
                    ${navLinkClass.lightMode} 
                    ${navLinkClass.darkMode}`}
    >
      {label}
    </a>
  )
}
