import Link from 'next/link';
import { IoMdHome } from "react-icons/io";
import { IconContext } from 'react-icons';
import { TbMusicQuestion } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";




export default function BottomNav() {

    return (
        <IconContext.Provider value={{ color: 'black', size: '40px' }}>
            <ul className='flex bg-[#ffe6fd] fixed bottom-0 left-0 right-0'>
                <li className='px-8'>
                    <Link href='/'><IoMdHome /></Link>
                    <span>ホーム</span>
                </li>
                <li className='pr-6'>
                    <Link href='/Maincontents/questioncontent'><TbMusicQuestion /></Link>
                    <span>質問Live</span>
                </li>
                <li className='pr-6'>
                    <Link href='/Maincontents/mentalcontent'><RiMentalHealthLine /></Link>
                    <span>メンタル</span>
                </li>
                <li className='pr-6'>
                    <Link href='/Maincontents/mgrammercontent'><MdLibraryMusic /></Link>
                    <span>楽典</span>
                </li>
                <li className='pl-2'>
                    <Link href='/Maincontents/columncontent'><MdOutlineMenuBook /></Link>
                    <span>Rinaコラム</span>
                </li>
            </ul>
        </IconContext.Provider>
    );
}