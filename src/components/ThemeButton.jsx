import { useState, useEffect } from "react"

export default function ThemeButton() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const html = document.documentElement
  console.log(theme)
  useEffect(() => {
    if (theme == "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      className="h-6 cursor-pointer fill-gray-200"
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light' )}
    >
      <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
    </svg>
  )
}