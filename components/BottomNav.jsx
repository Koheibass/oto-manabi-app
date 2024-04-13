import Link from 'next/link';
import { IoMdHome } from "react-icons/io";
import { IconContext } from 'react-icons';
import { TbMusicQuestion } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";




export default function BottomNav() {

    return (
        <IconContext.Provider value={{ color: 'black', size: '30px' }}>
            <ul className='flex bg-[#ffe6fd] fixed bottom-0 left-0 right-0 z-10 justify-center text-center'>
                <li className=''>
                    <Link href='/'><IoMdHome /></Link>
                    <span className='text-xs'>ホーム</span>
                </li>
                <li className='pl-8'>
                    <Link href='/Maincontents/questioncontent'><TbMusicQuestion /></Link>
                    <span className='text-xs'>質問Live</span>
                </li>
                <li className='pl-8'>
                    <Link href='/Maincontents/mentalcontent'><RiMentalHealthLine /></Link>
                    <span className='text-xs'>メンタル</span>
                </li>
                <li className='pl-8'>
                    <Link href='/Maincontents/mgrammercontent'><MdLibraryMusic /></Link>
                    <span className='text-xs'>楽典</span>
                </li>
                <li className='pl-8'>
                    <Link href='/Maincontents/columncontent'><MdOutlineMenuBook /></Link>
                    <span className='text-xs'>Rinaコラム</span>
                </li>
            </ul>
        </IconContext.Provider>
    );
}