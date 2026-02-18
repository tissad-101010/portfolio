/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Footer.tsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: tissad <tissad@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/02/18 12:53:48 by tissad            #+#    #+#             */
/*   Updated: 2026/02/18 12:54:21 by tissad           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


export default function Footer() {
    return (
        <footer className="bg-white shadow-sm dark:bg-gray-800 p-4 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-300">
                    &copy; {new Date().getFullYear()} Tahar Issad. Tous droits réservés.
                </p>
            </div>
        </footer>
    )
}