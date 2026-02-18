/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/16 14:12:22 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 16:58:31 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'


import { toggleDarkMode } from './darkMode'
import Header from '../components/header/Header' 
import Footer from '../components/footer/Footer'
import Hero from '../components/body/Hero'




export default function Home() {
  return (
    
    <main className="min-h-screen bg-gray-50 dark:bg-background transition-colors duration-300">
      
      <Header />
      
      <Hero />
      <button className="bg-primary text-foreground p-2 rounded hover:bg-primary/80 transition-colors" onClick={() => toggleDarkMode()}>
          Toggle Dark Mode
      </button>

      <Footer />
    </main>
  )
}
