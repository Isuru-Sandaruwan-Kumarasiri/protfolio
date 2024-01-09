
import './App.css'
import Skills from './components/Skill/Skills'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from "./components/header/Header"
import Home from './components/home/Home'

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
      
    </>
  )
}

export default App
