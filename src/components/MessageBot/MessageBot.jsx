
import logoSmall from '../../images/logo-small.svg'
export default function MessageBot() {

    return (
        <div className="flex gap-[12px]">
            <div>
                <img src={logoSmall}></img>
            </div>
            <div
                className="bg-[#141718] max-w-[70%] p-[12px] rounded-lg text-[#F6FCFD] text-[14px] font-medium self-start"
            >Aunque no posee actualmente fuentes para justificar sus hipótesis, el profesor de filología...
            </div>
        </div>
    ) 
}