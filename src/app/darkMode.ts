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
