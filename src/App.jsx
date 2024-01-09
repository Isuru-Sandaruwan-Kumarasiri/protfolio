
import './App.css'
import Footer from './components/Footer/Footer'
import Skills from './components/Skill/Skills'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from "./components/header/Header"
import Home from './components/home/Home'
import Scrollup from './components/scrollup/Scrollup'

function App() {
 

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
       <About/>
       <Skills/>
       <Contact/>
       
      </main>
      <Footer/>
      <Scrollup/>
      
    </>
  )
}

export default App
