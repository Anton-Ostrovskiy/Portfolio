import './App.css'
import { GoTopBtn } from './components/goTopBtn/GoTopBtn'
import { Particle } from './components/particle/Particle'
import { Header } from './layout/header/Header'
import { Contacts } from './layout/sections/contacts/Contacts'
import { Footer } from './layout/sections/footer/Footer'
import { Home } from './layout/sections/home/Home'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'

function App() {


  return (
    <div className="App">
      <Particle/>
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <GoTopBtn/>
    </div>
  )
}

export default App
