/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Form.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/19 15:47:43 by tissad            #+#    #+#             */
/*   Updated: 2026/02/19 16:24:58 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useState } from "react"


export default function Form() {
	const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
		// clear the inputs after submission
		setFormData({
			name: '',	
			email: '',
			message: '',
		})
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Your name"
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
					required
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="eg: john.doe@example.com"
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
					required
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Your message"
					rows={5}
					className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400"
					required
				/>
			</div>

			<button type="submit"
				className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
				dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
			>
				Send Message
			</button>
		</form>
	)
}