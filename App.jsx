import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Div1 from './Components/Div1'
import Div2 from './Components/Div2'
import Div3 from './Components/Div3'
import Footer from './Components/Footer'
import './Css/responsive.css'
import './App.css'
function App() {
  const images = [
    'images/s-1.jpg',
    'images/s-2.jpg',
    'images/s-3.jpg',
    'images/s-4.jpg',
    'images/s-5.jpg',
    'images/s-6.jpg',
  ];


  return (
    <>
      <Header/>
      <Div1 images={images}/>
      <Div2/>
      <Div3/>
      <Footer/>
    </>
  )
}

export default App
