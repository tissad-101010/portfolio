/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Contact.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 16:55:33 by tissad            #+#    #+#             */
/*   Updated: 2026/02/19 17:11:16 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'

import { GithubIcon, LinkedInIcon, CodingameIcon } from './ContactsIcons'
import Form from './Form'


export default function Contact() {
	return (
		<section id="contact" className="bg-gray-50 py-16 dark:bg-background transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-gray-300">
						Contact Me
					</h2>
          <p className="text-gray-600 text-lg dark:text-gray-400">
            Feel free to reach out to me for any colab, inquiries or opportunities.
          </p>
        </div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					
					{/* Contacts info */}
					<div>
						<h3 className="text-xl font-semibold text-gray-900 mb-6  dark:text-gray-300">
							Information
						</h3>
							{/*TO DO  : make this dynamic with an array of objects */}
						<div className="space-y-4">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-gray-700 dark:hover:bg-gray-600">
								<svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								</div>
								<div>
								<h4 className="font-medium text-gray-900 dark:text-gray-300">Email</h4>
								<p className="text-blue-600 dark:text-white">
									<a href="mailto:issad.tahar@icloud.com">
									issad.tahar@icloud.com
									</a>
								</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-gray-700 dark:hover:bg-gray-600">
								<svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								</div>
								<div>
								<h4 className="font-medium text-gray-900 dark:text-gray-300">Location</h4>
								<p className="text-gray-600 dark:text-gray-400">Paris, ile-de-France, France</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-gray-600 dark:hover:bg-gray-500">
								<svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								</div>
								<div>
								<h4 className="font-medium text-gray-900 dark:text-gray-300">Open to work</h4>
								<p className="text-gray-600 dark:text-gray-400">stage, full-time</p>
								</div>
							</div>
						</div>
						{/*  networks */}
						<div className="mt-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-300">
								Find me on
							</h3>
								<div className="flex space-x-4">
								<GithubIcon />
								<CodingameIcon />
								<LinkedInIcon />
							</div>
						</div>
						
					</div>
					
					{/* Contact form */}
					<div>
						<Form />
					</div>
				
				</div>
			</div>
		</section>

	)
}