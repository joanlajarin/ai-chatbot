import { useState } from 'react'
import heroImg from './images/hero-image-sc.jpg'
import Chat from './components/Chat/Chat'
import './App.css'
import MenuButton from './components/MenuButton/MenuButton'
import {Menu} from './components/Menu/Menu'

function App() {

  const [showMenu, setShowMenu] = useState(false)

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <header className='relative overflow-hidden flex justify-center'>
        <img 
          src={heroImg}
          className='h-[130px] md:h-[160px] lg:h-[200px] xl:h-auto xl:w-full object-right-bottom object-cover'
        />
      </header>
      {
        showMenu && <Menu onClick={handleMenuButtonClick}/>
      }
      <section
        className="flex flex-col absolute top-0 left-0 right-0 mx-auto max-w-[720px] w-[95%] h-[95%]"
      >
      {
        !showMenu && <MenuButton onClick={handleMenuButtonClick}/>
      }
        <Chat/>
      </section>

    </>
  )
}

export default App
