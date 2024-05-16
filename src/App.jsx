import { useEffect, useState } from 'react'
import heroImg from './images/hero-image-sc.jpg'
import Chat from './components/Chat/Chat'
import './App.css'
import MenuButton from './components/MenuButton/MenuButton'
import {Menu} from './components/Menu/Menu'


function App() {

  const [showMenu, setShowMenu] = useState(true)
  const [conversation, setConversation] = useState(JSON.parse(localStorage.getItem(3)))
  const [addNewConversation, setAddNewConversation] = useState(false)
  const [loading, setLoading] = useState(true);

  

  const handleMenuButtonClick = () => {
    setShowMenu(!showMenu)
  }

  const handleConversationChange = (newConversationData) => {
    setConversation(newConversationData)
  }

  const conversations = [
    { "id": 1,
      "title": "What is your job?",
      "messages": ["What is your job?",
                    "My job is to answer questions."
                  ],
      "type": "chat"
    },   
    { "id": 2,
    "title": "What is your hobby?",
    "messages": [ "What is your hobby?",
                  "Hi, my hobbie is to play tennis.",
                ],
                "type": "chat"
    },  
    { "id": 3,
    "title": "What is your favourite movie?",
    "messages": [ "Hey my name is Clara! How are you?",
                  "Hi, Clara. I'm doing well. I just go back from the gym. How about yourself?",
                  "What is your favourite movie??",
                  "My favorite movie of all time is The Godfather Part II. What's your favourite movie?",
                  "Can you tell me more about The Godfather Part II?",
                  "It was directed by Francis Ford Coppola and starring Robert De Niro and Marlon Brando."
                ],
                "type": "chat"
    }
  ]
  useEffect(() => {
    conversations.forEach(conversation => {
      localStorage.setItem(conversation.id, JSON.stringify(conversation));
    });
    setConversation(JSON.parse(localStorage.getItem(3)))
    setLoading(!loading);
  }, []);

  const handleCreateNewConversation = () => {
    setAddNewConversation(!addNewConversation)
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
        showMenu && <Menu onClick={handleMenuButtonClick} onConversationChange={handleConversationChange} addNewConversation={addNewConversation}/>
      }
      <section
        className="flex flex-col absolute top-0 left-[10%] right-0 mx-auto max-w-[720px] w-[95%] h-[90%]"
      >
      {
        !showMenu && <MenuButton onClick={handleMenuButtonClick}/>
      }
        <Chat createNewConversation={handleCreateNewConversation} conversation={conversation}/>
      </section>

    </>
  )
}

export default App
