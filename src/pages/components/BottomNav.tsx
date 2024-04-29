import Link from 'next/link';
import { IoMdHome } from "react-icons/io";
import { TbMusicQuestion } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";

export default function BottomNav() {
    return (
        <ul className='flex bg-[#ffe6fd] fixed bottom-0 left-0 right-0 z-10 justify-center text-center'>
            <li className='pl-'>
                <Link href='/'><IoMdHome className='text-[30px]' /></Link>
                <span className='text-xs'>ホーム</span>
            </li>
            <li className='pl-8'>
                <Link href='/Maincontents/questioncontent'><TbMusicQuestion className='text-[30px]' /></Link>
                <span className='text-[10px]'>質問Live</span>
            </li>
            <li className='pl-8'>
                <Link href='/Maincontents/mentalcontent'><RiMentalHealthLine className='text-[30px]' /></Link>
                <span className='text-[10px]'>メンタル</span>
            </li>
            <li className='pl-8'>
                <Link href='/Maincontents/mgrammercontent'><MdLibraryMusic className='text-[30px]' /></Link>
                <span className='text-[10px]'>楽典</span>
            </li>
            <li className='pl-8'>
                <Link href='/Maincontents/columncontent'><MdOutlineMenuBook className='text-[30px]' /></Link>
                <span className='text-[10px]'>Rinaコラム</span>
            </li>
        </ul>
    );
}