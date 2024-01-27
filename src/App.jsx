import React from 'react'
import './App.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home'
import SingleMovie from './Component/SingleMovie'
import Error  from './Component/Error'
import {AppContextProvider} from './Context/Context.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route path='/'element={<Home/>}/>
       <Route path='/movie/:id' element={<SingleMovie/>} />
       <Route path='*' element={<Error/>} />
    </Route>
  )
)
function App() {
  return (
    <>
      <AppContextProvider value='asmakhan'>
      <RouterProvider router={router}/>
      </AppContextProvider>
    </>
  )
}

export default App