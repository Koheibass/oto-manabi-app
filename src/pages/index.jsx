import * as React from 'react';
import Search from '../../components/Search';
import MainContents from '../../components/Main/MainContents';
import Calender from '../../components/Calender';
import BottomNav from '../../components/BottomNav';
import { client } from '../../libs/client';

export default function Home({ contents }) {
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
                <MainContents contents={contents} />
                <Calender />
            </main >
            <div className="fixed bottom-0">
                <BottomNav />
            </div>
        </div >

    );
};

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "content", queries: { filters: 'type[contains]質問Liveアーカイヴ' }
    })

    return {
        props: {
            contents: data.contents,
        },

    };
};
