import * as React from 'react';
import HeaderTitle from '../../components/HeaderTitle';




export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <HeaderTitle />
            <main className='grow'>
                <div className='grid'>
                    <span>
                        <img src="/photo/mainimg.png" />
                    </span>
                </div>
                <form action="" method="post">
                    <input type="text" name="search" placeholder="キーワードを入力"></input>
                    <input type="submit" name="submit" value="検索"></input>
                </form>
            </main>
        </div>

    )
}
