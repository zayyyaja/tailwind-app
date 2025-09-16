import './index.css'

// toggle dark mode
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#darkToggle")
  btn.addEventListener("click", toggleDarkMode)
})
