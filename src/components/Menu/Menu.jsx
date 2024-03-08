import logoImg from '../../images/logo-full.svg'
import menuImg from '../../images/Off.svg'
import newChatImg from '../../images/Add_round_fill.svg'
import { Conversation } from '../Conversation/Conversation'
import { useState, useEffect } from 'react'


export function Menu({onClick, onConversationChange}) {

    const [conversations, setConversations] = useState([])

    const getAllLocalStorageItems = () => {
        const conversationsLocal = []
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)
            conversationsLocal.push(JSON.parse(value))
        }
        return conversationsLocal
    } 
    const handleUpdateConversation = (id, newTitle) => {

        const conversationToUpdate = conversations.find(item => item.id === id)
        if(conversationToUpdate) {
            const updatedValue = { ...conversationToUpdate, title: newTitle };
            localStorage.setItem(id, JSON.stringify(updatedValue))
            const updatedConversations  = conversations.map(item => {
                if (item.id === id) {
                  return { ...item, value: updatedValue }
                }
                return item
            })
            setConversations(updatedConversations )
        }
    }
    const handleRemoveConversation = (id) => {
        localStorage.removeItem(id)
        const conversationsLocal = getAllLocalStorageItems()
        setConversations(conversationsLocal)
    }

    const handleOnConversationChange = (newConversationData) => {
        onConversationChange(newConversationData)
    }
    const handleNewChat = () => {
        onConversationChange({"id": "", "title": "", "messages": []})
    }
    useEffect(() => {
        const conversationsLocal = getAllLocalStorageItems()
        setConversations(conversationsLocal)
    }, []) 

    return (
        <section
         className="absolute left-0 top-0 bg-[#141718] w-[296px] h-full p-[20px] z-10"   
        >
            <div className="flex justify-between mb-[24px]">
               <img src={logoImg}></img> 
               <button
                onClick={onClick}
               >
                    <img src={menuImg}></img>
               </button>
            </div>
            <button 
                className='flex py-[8px] px-[12px] gap-[8px] items-center mb-[16px]'
                onClick={handleNewChat}
            >
                <img src={newChatImg}></img>
                <span className='text-[#B3B7B9] text-[14px] font-semibold'>New Chat</span>
            </button>
            <span className='text-[#F6FCFD] text-[14px] mb-[12px]'>Conversations</span>
            <div className='grid'>
            {
                conversations && conversations.map( (conversation) => {
                    return <Conversation 
                                key={conversation.id} 
                                data={conversation}  
                                updateConversation={handleUpdateConversation} 
                                removeConversation={handleRemoveConversation} 
                                onConversationChange={handleOnConversationChange}
                                />
                })
            }
            </div>
        </section>
    )
}