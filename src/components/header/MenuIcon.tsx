interface MenuIconProps {
  isOpen: boolean
}

// Common classes for the menu button
export const menuButtonClass = 
{
	base : "focus:outline-none focus:ring-2 focus:ring-inset",
	lightMode : "text-gray-700 hover:text-blue-600 focus:ring-blue-500",
	darkMode : "dark:text-gray-300 dark:hover:text-white dark:focus:ring-gray-300",
}



export function MenuIcon({ isOpen }: MenuIconProps) {
	return (
		<svg
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			{isOpen ? (
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M6 18L18 6M6 6l12 12"
				/>
			) : (
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 6h16M4 12h16M4 18h16"
				/>
			)}
		</svg>
	)
}
