import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ProductList from './Components/ProductList'
import Counter from './Components/Counter'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from './ContextApi/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [count, setCount] = useState(0)
  let { theme, setTheme } = useContext(ThemeContext)

  let bg = {}

  if (theme === 'light') {
    bg = {
      backgroundColor: "white",
      color: "black"
    }
  } else {
    bg = {
      backgroundColor: "black",
      color: "white"
    }
  }

  return (
    <div
      style={bg}
      className={`min-h-screen transition-all duration-500 ease-in-out ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      {/* Navbar */}
      <div className="shadow-md sticky top-0 z-50">
        <Nav style={bg} />
      </div>

      {/* Main content */}
      <main className="p-6 sm:p-10">
        <Outlet style={bg} />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-10 text-sm opacity-75">
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  )
}

export default App
