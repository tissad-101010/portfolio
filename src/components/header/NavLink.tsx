/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NavLink.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 10:48:37 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 10:50:51 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

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
      className="text-gray-700 hover:text-blue-600 py-2 dark:text-gray-300 dark:hover:text-white"
    >
      {label}
    </a>
  )
}
