import * as React from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import TopImage from '../../components/TopImage';
import Search from '../../components/Search';
import MainContents from '../../components/Main/MainContents';
import Calender from '../../components/Calender';
import BottomNav from '../../components/BottomNav';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <HeaderTitle />
            <main>
                <TopImage />
                <Search />
                <MainContents />
                <Calender />
            </main>
            <BottomNav />
        </div>

    )
}
