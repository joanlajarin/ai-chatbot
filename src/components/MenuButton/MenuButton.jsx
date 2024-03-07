import menuImg from '../../images/Off.svg'
export default function MenuButton({onClick}) {
    
    
    return(
        <button 
            className=' absolute bg-[#242627] rounded-lg top-[15px] p-[8px]'
            onClick={onClick}
        >
            <img src={menuImg}></img>
        </button>
    )
}