import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './Components/ProductList.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import RegisterForm from './Components/RegisterForm.jsx'
import LoginForm from './Components/LoginForm.jsx'
import ThemeProvider from './ContextApi/ThemeContext.jsx'
import CartProvider from './ContextApi/CartContext.jsx'
import Cart from './Components/Cart.jsx'
import UserProvider from './ContextApi/UserContext.jsx'



let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index : true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
       {
        path: 'product',
        element: <ProductList />
      },
       {
        path: 'details/:id',
        element: <ProductDetails />
      },
      {
        path: 'register',
        element: <RegisterForm />
      },
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
<UserProvider>
  <CartProvider>
    <ThemeProvider>
        <RouterProvider router={router}  />
  </ThemeProvider>
</CartProvider>
</UserProvider>
)

