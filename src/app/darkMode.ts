/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   darkMode.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/16 17:59:31 by tissad            #+#    #+#             */
/*   Updated: 2026/02/19 18:04:17 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// utils/darkMode.ts
export function toggleDarkMode() {
  // change the text of the button based on the current mode
  const darkModeButton = document.getElementById('darkMode')
  if (darkModeButton) {
    const isDarkMode = darkModeButton.textContent === 'dark mode'
    darkModeButton.textContent = isDarkMode ? 'light mode' : 'dark mode'
  }
  const root = document.documentElement // <html>
    root.classList.toggle('dark')
}
