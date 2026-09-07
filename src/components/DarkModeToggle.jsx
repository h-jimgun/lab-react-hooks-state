import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
