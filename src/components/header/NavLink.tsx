/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavLink.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 10:48:37 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 11:54:09 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


const navLinkClass = {
    base : "py-2 transition-colors duration-200",
    lightMode: "text-gray-700 hover:text-blue-600",
    darkMode: "dark:text-gray-500 dark:hover:text-white",
}

interface NavLinkProps {
  href: string
  label: string
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
