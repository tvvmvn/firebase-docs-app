import { useState, useEffect } from "react"

export default function ThemeButton() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const html = document.documentElement

  useEffect(() => {
    if (theme == "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button
      className="relative bg-gray-100 dark:bg-gray-800 cursor-pointer"
      style={{
        width: "40px", 
        height: "12px"
      }}
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      <span 
        className="absolute transition-all bg-white shadow"
        style={{ 
          top: "-4px",
          left: theme == "dark" ? "20px" : "0px" ,
          width: "20px",
          height: "20px"
        }}
      >
      </span>
    </button>
  )
}