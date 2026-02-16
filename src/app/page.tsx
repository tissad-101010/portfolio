/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/16 14:12:22 by tissad            #+#    #+#             */
/*   Updated: 2026/02/16 18:42:20 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use client'

import { toggleDarkMode } from './darkMode'




export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background transition-colors duration-300">
      test dark mode
      <h1 className="text-danger/20"> Hello, World!</h1>
      <h1> Hello, World!</h1>
      <div className="bg-primary/10 p-4 rounded-base bg-color-surface">
        <p className="text-primary">This is a card component.</p>
        <p className="text-foreground">It uses Tailwind CSS for styling.</p>
      </div>
      <p className="text-primary">Welcome to my portfolio website.</p>
      <p className="text-foreground">Feel free to explore my projects and skills.</p>
      
      <h1 className="text-primary dark:text-danger">Hello, World!</h1>
      <p className="text-primary dark:text-danger">
        Ce texte change de couleur en dark mode.
      </p>
      <div className="dark:text-primary dark:bg-foreground  p-4 rounded">
        Carte avec fond différent en dark mode
      </div>
      
      
      <button className="bg-primary text-foreground p-2 rounded hover:bg-primary/80 transition-colors" onClick={() => toggleDarkMode()}>
          Toggle Dark Mode
      </button>

    </main>
  )
}
