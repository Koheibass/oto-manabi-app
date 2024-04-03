import * as React from 'react';
import Search from '../../components/Search';
import MainContents from '../../components/Main/MainContents';
import Calender from '../../components/Calender';
import BottomNav from '../../components/BottomNav';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/logo2.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <div className='flex'>
                    <span>
                        <img src="/photo/mainimg.png" />
                    </span>
                </div>
                <Search />
                <MainContents />
                <Calender />
            </main >
            <BottomNav />
        </div >

    )
}
