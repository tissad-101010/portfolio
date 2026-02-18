/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Contact.tsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 16:55:33 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 18:22:34 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'

import { useState } from 'react'
import { Networks, infoClass } from "../navigation/Networks"
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
						<div className="space-y-4">

							{/*  networks */}
							<div className="mt-8">
								<h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-300">
									Find me on
								</h3>
								 <div className="flex space-x-4">
									<Networks className={infoClass} />
								</div>
							</div>
						</div>
					</div>
					
					{/* Contact form */}
					<div>
						form
					</div>
				
				</div>
			</div>
		</section>

	)
}