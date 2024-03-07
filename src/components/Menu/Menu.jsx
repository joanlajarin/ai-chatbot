import logoImg from '../../images/logo-full.svg'
import menuImg from '../../images/Off.svg'
import newChatImg from '../../images/Add_round_fill.svg'
import { Conversation } from '../Conversation/Conversation'


export function Menu({onClick}) {
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
            <div className='flex py-[8px] px-[12px] gap-[8px] items-center mb-[16px]'>
                <img src={newChatImg}></img>
                <span className='text-[#B3B7B9] text-[14px] font-semibold'>New Chat</span>
            </div>
            <span className='text-[#F6FCFD] text-[14px] mb-[12px]'>Conversations</span>
            <div className='grid'>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </section>
    )
}