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

  let {theme, setTheme} = useContext(ThemeContext)

  let bg={}

  if(theme == 'light'){
    bg={
      backgroundColor : "white",
      color : "black"
    }
  }else{
     bg={
      backgroundColor : "black",
      color : "white"
    }
  }
  return (
    <div style={bg}>
    <Nav style={bg}/>
    <Outlet style={bg}/>
    {/* <Counter/> */}
    </div>
  )
}

export default App
