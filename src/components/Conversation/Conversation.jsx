import { useState, useRef, useEffect } from 'react'
import chatFillImg from '../../images/Chat_fill.svg' 
import editImg from '../../images/Edit.svg' 
import trashImg from '../../images/Trash.svg' 

export function Conversation({data, updateConversation, removeConversation, onConversationChange}) {

    const [showActions, setShowActions] = useState(false)
    const [editActivated, setEditActivated] = useState(false)
    const [inputValue, setInputValue] = useState(data.title)
    const inputRef = useRef(null)

    const handleMouseOver = () => setShowActions(true)
    const handleMouseLeave = () => setShowActions(false)
    const handleRemoveConversation = () => removeConversation(data.id)
    const handleEditConversation = () =>  setEditActivated(true)
    const handleChange = (event) => setInputValue(event.target.value) 

    const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }

    const handleLoseFocus = () => setEditActivated(false)

    const handleChangeConversation = () => {
        onConversationChange(data)
    }
    
    useEffect(() => {
        focusInput()
    },[editActivated])


    useEffect(() => {
        if(inputValue !== data.title) {
            updateConversation(data.id, inputValue)
        }
    },[inputValue])

    return (
        <div 
            className={`w-full flex py-[8px] px-[12px] items-center mb-[16px] justify-between rounded-md ${showActions && 'bg-[#353839]'}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <button className='flex gap-[8px]'
            >
                <img 
                    src={chatFillImg}
                    onClick={handleChangeConversation}
                ></img>
                <input 
                    ref={inputRef}
                    id={data.id}
                    className={`text-[#B3B7B9] overflow-hidden flex-1 text-[14px] font-semibold ${showActions ? 'bg-[#353839]' :  'bg-[#141718] w-[204px]'}` } 
                    placeholder={data.title} 
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleLoseFocus}
                    disabled={!editActivated}
                    >
                        
                </input> 
            </button>
            {showActions && (
                <div className='flex gap-[8px]'>
                    <button onClick={handleEditConversation}>
                        <img src={editImg}></img>
                    </button>
                    <button onClick={handleRemoveConversation}>
                        <img src={trashImg}></img>
                    </button>
                </div>
            )}
        </div>
    )
}