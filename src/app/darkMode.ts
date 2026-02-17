/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   darkMode.ts                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/16 17:59:31 by tissad            #+#    #+#             */
/*   Updated: 2026/02/17 23:36:23 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// utils/darkMode.ts
export function toggleDarkMode() {
  const root = document.documentElement // <html>
    root.classList.toggle('dark')
}
