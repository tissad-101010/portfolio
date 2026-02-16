/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/16 14:12:22 by tissad            #+#    #+#             */
/*   Updated: 2026/02/16 17:27:16 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


export default function Home() {
  return (
    <main>
      test dark mode
      <h1 className="text-danger/20"> Hello, World!</h1>
      <h1> Hello, World!</h1>
      <div className="bg-primary/10 p-4 rounded-base bg-color-surface">
        <p className="text-primary">This is a card component.</p>
        <p className="text-foreground">It uses Tailwind CSS for styling.</p>
      </div>
      <p className="text-primary">Welcome to my portfolio website.</p>
      <p className="text-foreground">Feel free to explore my projects and skills.</p>
    </main>
  )
}
