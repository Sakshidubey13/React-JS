import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='bg-white dark:bg-black min-h-screen'>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App