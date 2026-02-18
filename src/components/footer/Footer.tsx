/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.tsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 12:53:48 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 15:41:25 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { NavLink, navItems, footerNavLinkClass } from "../navigation/NavLink"
import { SocialMedia } from "../navigation/SocialMedia"


export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12 dark:bg-gray-800
			transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/*  Footer top section, with contact info and social links */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* a bout section */}
					<div>
						<h3 className="text-lg font-semibold mb-4 dark:text-gray-300">
							Tahar Issad
						</h3>
						<p className="text-gray-400 text-sm leading-relaxed dark:text-silver">
							Full satck developer, software engineer, and lifelong learner.
							Building scalable and user-friendly web applications.
							Using modern technologies to solve real-world problems 
							and create impactful solutions.

						</p>
					</div>
					{/* Navigation links */}
					<div>
						<h3 className="text-lg font-semibold mb-4 dark:text-gray-300">
							Navigation
						</h3>
						<ul className="space-y-2">
							{navItems.map((item) => (
								<li key={item.href}>
									<NavLink href={item.href} label={item.label} 
									navClass={footerNavLinkClass} />
								</li>
							))}
						</ul>
					</div>
					{/* Social media links */}
					<div>
						<h3 className="text-lg font-semibold mb-4 dark:text-gray-300">
							Social Media
						</h3>
						
						<SocialMedia />

						<a href="mailto:tahar.issad@example.com" 
								className="text-gray-400 hover:text-white transition-colors">
									issad.tahar@icloud.com
            </a>
					</div>	
					
				</div>
				{/*	Footer bottom section, with copyright and credits */}
				<div className="border-t border-gray-800 mt-8 pt-8 text-center 
					text-gray-400 dark:border-gray-700 dark:text-gray-500">
					<p className="text-sm text-gray-400">
						&copy; {new Date().getFullYear()} Tahar Issad. All rights reserved.
					</p>
					<p className="text-gray-500 text-xs mt-2">
						Designed and developed by Tahar Issad using Next.js and Tailwind CSS.	
					</p>								
				</div>

			</div>
		</footer>
	)
}