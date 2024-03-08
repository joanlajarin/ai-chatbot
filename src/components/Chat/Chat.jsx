import { useEffect, useState } from "react";
import { useFetch } from "../../services/useFetch";
import MessageBot from "../MessageBot/MessageBot";
import MessageUser from "../MessageUser/MessageUser";

export default function Chat({conversation}) {

    const [conversationChat, setConversationChat] = useState({})
    const [messageToApi, setMessageToApi] = useState("")
//    const {data, loading} = useFetch("")

    const handleChange = (event) => setMessageToApi(event.target.value) 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(!conversationChat.id) {
                console.log("new Conversation")
                setConversationChat({...conversationChat,
                    "id": "4"})
            } else {
                console.log("not new")
            }
            setMessageToApi("")
        }
    }

    useEffect(() => {
        setConversationChat(conversation)
      }, [conversation])
      
    return(
        <section
        className="flex flex-col absolute w-full top-[72px] bg-[#242627] h-full mb-[-[5px] rounded-xl "
        > 
            <div className="flex flex-col p-[24px] gap-[20px] flex-1">
                {conversationChat.messages && conversationChat.messages.map((message, index) => {
                        return (index % 2 !== 0) ? <MessageBot key={index} message={message}/> : <MessageUser key={index} message={message}/>
                    })
                }
            </div>
            <input
                id="send-message"
                className="max-w-[720px] w-[100%] rounded-md bg-[#242627] border-2 border-solid border-[#6D7275] p-[12px] text-[#F6FCFD] outline-none"
                placeholder="Ask simplechat.ai anything"
                value={messageToApi}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            >
            </input>
        </section>
    )
}