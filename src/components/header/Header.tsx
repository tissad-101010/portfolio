import { useState } from "react"
import { NavLink, navItems, headerNavLinkClass, handleDarkModeToggle } from "../navigation/NavLink"
import { MenuIcon, menuButtonClass} from "./MenuIcon"
import { fullName, profile } from "@/src/lib/portfolioData"


export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-800 p-4">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					
					{/*  Logo and title */}
					<div className="flex items-center space-x-3">
						{/* Logo */}
						<div className="w-10 h-10 bg-blue-500 rounded-full 
														flex items-center justify-center dark:bg-gray-600">
							<svg 
								className="w-6 h-6 text-white dark:text-gray-300" 
								fill="currentColor" 
								viewBox="0 0 20 20">
								<path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
							</svg>
						</div>
						{/*  Title and subtitle */}
						<div>
							<h1 className="text-2xl font-bold dark:text-white">
								{fullName} - Portfolio
							</h1>
							<p className="text-sm text-gray-500 dark:text-gray-300">
								{profile.professionalTitle}
							</p>
						</div>
					</div>
				
					{/*  Navigation links for desktop view */}
					<div className="hidden md:flex items-center space-x-8 ">
						{navItems.map((item) => (
							<NavLink
								key={item.href} 
								href={item.href} 
								label={item.label} 
								navClass={headerNavLinkClass}
							/>
						))}
						{/* Dark mode toggle button */}
						{handleDarkModeToggle()}
					</div>
					
				{/* buger for mobile view */}
				<div className="md:hidden flex items-center">
					<button
						type="button"
						className={`${menuButtonClass.base} 
									${menuButtonClass.lightMode} 
									${menuButtonClass.darkMode}`} 
									
						onClick={() => setIsOpen(prev => !prev)} 
						
						aria-label="Toggle menu"
						aria-expanded={isOpen}
					>

						<MenuIcon isOpen={isOpen} />
					</button>
				</div>
				</div>
				{isOpen && (
					<div className="md:hidden pb-4">
						{/*  Mobile navigation links */}
						<div className="flex flex-col space-y-2">
							{navItems.map((item) => (
								<NavLink	
									key={item.href}
									href={item.href}
									label={item.label} 
									navClass={headerNavLinkClass}
								/>
							))}
							{/* Dark mode toggle button */}
							{handleDarkModeToggle()}
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}
