import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import MainLayout from './layout/MainLayout';
import Technology from './pages/Technology';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
    </Route>
  )
);

function App() {

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
