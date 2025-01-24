
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound'
import Contact from './components/Contact/Contact'

function App() {
let router=createBrowserRouter([{
  path: '',element:<Layout/> , children:[
    {path:"" , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<ErrorNotFound/>}
  ]
}])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
