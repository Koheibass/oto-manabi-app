import { FaHouse } from "react-icons/fa6";
import { RiLiveLine } from "react-icons/ri";
import { RiMentalHealthLine } from "react-icons/ri";
import { CiMusicNote1 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";



export default function BottomNav() {
    return (
        <ul className="flex items-center justify-center w-full">
            <li>
                <a href=''><FaHouse /><span>ホーム</span></a>
            </li>
            <li>
                <a href=''><RiLiveLine /><span>質問LIVE</span></a>
            </li>
            <li>
                <a href=''><RiMentalHealthLine /><span>メンタル</span></a>
            </li>
            <li>
                <a href=''><CiMusicNote1 /><span>楽典</span></a>
            </li>
            <li>
                <a href=''><FaBook /><span>りなコラム</span></a>
            </li>
        </ul>
    )
}