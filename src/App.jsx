import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Error from './pages/Error'
function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='*' element={<Error/>}></Route>

      </Route>
    )
   
  )

  return (
   <RouterProvider router={router}/>
  )
}

export default App
