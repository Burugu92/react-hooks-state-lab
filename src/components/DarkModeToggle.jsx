import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export {DarkModeToggle}
