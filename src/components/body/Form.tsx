import { useState } from "react"
import emailjs from '@emailjs/browser';
import { profile } from '@/src/lib/portfolioData'

export default function Form() {
	const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
	const { publicKey, serviceId, templateId } = profile.emailJs ?? {}

    // Vérifie que les champs ne sont pas vides
    if (!formData.name || !formData.email || !formData.message) {
      alert('please fill in all fields');
      return;
    }
	if (!publicKey || !serviceId || !templateId) {
	  alert('The contact form is not configured yet.');
	  return;
	}

    // Envoi avec EmailJS
    emailjs.send(
      serviceId,
      templateId,
      {
		title: `New message from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    )
    .then((response) => {
      console.log('email sent !', response.status, response.text);
      alert('Message sent successfully!');

      // clear the inputs after successful submission
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Failed to send message. Please try again later.');
    });
  };


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
