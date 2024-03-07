import chatFillImg from '../../images/Chat_fill.svg' 
import editImg from '../../images/Edit.svg' 
import trashImg from '../../images/Trash.svg' 

export function Conversation() {
    return (
        <div className='flex py-[8px] px-[12px] items-center mb-[16px] justify-between '>
            <div className='flex gap-[8px]'>
                <img src={chatFillImg}></img>
                <span className='text-[#B3B7B9] text-[14px] font-semibold'>What is your job?</span> 
            </div>
            <div className='flex gap-[8px]'>
                <img src={editImg}></img>
                <img src={trashImg}></img>
            </div>

        </div>
    )
}