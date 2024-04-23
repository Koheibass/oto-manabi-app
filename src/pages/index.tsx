import * as React from 'react';
import Search from '../../components/Search';
import BottomNav from '../../components/BottomNav';
import MainContents from '../../components/Main/MainContents';
import Event from '../../components/Event';

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
                <div className='flex pt-4'>
                    <span>
                        <img src="/photo/mainimg2.png" />
                    </span>
                </div>
                <Search />
                <MainContents />
                <Event />
            </main >
            <div>
                <BottomNav />
            </div>
        </div >

    );
};
