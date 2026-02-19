/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ContactsIcons.tsx                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/19 11:57:55 by tissad            #+#    #+#             */
/*   Updated: 2026/02/19 17:10:34 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */



import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodingame } from 'react-icons/si'
import { FaEnvelope, FaLocationArrow, FaIdBadge } from 'react-icons/fa'


export function GithubIcon() {
  return (
		<a
			href="https://github.com/tissad-101010"
			target="_blank"
			rel="noopener noreferrer"
			className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center 
			hover:bg-gray-800 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
		>
			<FaGithub className="w-6 h-6 text-white" />
		</a>
  )
}

export function LinkedInIcon() {
  return (
		<a
			href="https://www.linkedin.com/in/tahar-issad-00b96836a/"
			target="_blank"
			rel="noopener noreferrer"
			className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center 
			hover:bg-blue-700 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
		>
			<FaLinkedin className="w-6 h-6 text-white" />
			
		</a>
  )
}

export function CodingameIcon() {
  return (
		<a
			href="https://www.codingame.com/profile/acef26b8c33787d29c7f6db82756a2190362926"
			target="_blank"
			rel="noopener noreferrer"
			className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center 
			hover:bg-gray-800 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
		>
			
			<SiCodingame className="w-12 h-12 text-yellow-400" />
		</a>

  )
}

export function EmailIcon() {
	return (	
		<a
		href="mailto:contact@tissad.fr"
		target="_blank"
		rel="noopener noreferrer"
		className="w-12 h-12 rounded-lg flex items-center justify-center 
		hover:bg-red-700 transition-colors dark:bg-red-700 dark:hover:bg-red-600"
	>
		<FaEnvelope className="w-6 h-6 text-white" />
	</a>
	)
}

export function LocationIcon() {
	return (
		<div className="w-12 h-12 rounded-lg flex items-center justify-center 
		 transition-colors dark:bg-gray-700 dark:hover:bg-green-600">
			<FaLocationArrow className="w-6 h-6 text-white" />
		</div>
	)
}

