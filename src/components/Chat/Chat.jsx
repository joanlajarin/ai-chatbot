import { useFetch } from "../../services/useFetch";
import MessageBot from "../MessageBot/MessageBot";
import MessageUser from "../MessageUser/MessageUser";

export default function Chat({conversation}) {

    const {id, title, messages } = conversation
    console.log(conversation)
//    const {data, loading} = useFetch("")
    return(
        <section
        className="flex flex-col absolute top-[72px] bg-[#242627] h-full mb-[-[5px] rounded-xl "
        > 
            <div className="flex flex-col p-[24px] gap-[20px] flex-1">
                {
                    messages && messages.map((message, index) => {
                        return (index % 2 !== 0) ? <MessageBot message={message}/> : <MessageUser message={message}/>
                    })
                }
            </div>
            <input
                id="send-message"
                className="max-w-[720px] w-[100%] rounded-md bg-[#242627] border-2 border-solid border-[#6D7275] p-[12px]"
                placeholder="Ask simplechat.ai anything"
            >
            </input>
        </section>
    )
}