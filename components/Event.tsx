import Link from 'next/link'

export const Event = () => {
    return (
        <div>
            <h3 className="text-center text-[16px] lg:tracking-widest lg:text-[18px] leading-none font-bold pt-4 pb-1 text-[#937a43] font-noto my-4">
                <div>イベント情報</div>
            </h3>
            <div className="grid mb-4 lg:mt-4 mx-4">
                <div className="font-bold text-sm text-[#937a43]">
                    {"2024.04.14"}
                    <small> (Sun) 20:00 ~ 21:00</small>
                </div>
                <Link href="https://oto-inochi.com/"
                    className="block underline lg:mt-1 text-[#ff9a9a]" target="_blank" rel="noopener noreferrer">メンタルトレーニングQ&A @discord</Link>
                <br />
                <div className="font-bold text-sm text-[#937a43]">
                    {"2024.06.01"}
                    <small> (sat)</small>
                </div>
                <Link href="/news/20230801" className="block underline lg:mt-1 text-[#ff9a9a]">大阪アンサンブルオフ会</Link>
                <br />
                <div className="font-bold text-sm text-[#937a43]">
                    {"2024.06.23"}
                    <small> (sun)</small>
                </div>
                <Link href="/news/20230801" className="block underline lg:mt-1 text-[#ff9a9a]">東京アンサンブルオフ会</Link>
            </div>
            <div className="text-center">
                <button className="text-xs text-[#937a43] inline-flex items-center absolut border bg-none font-bold justify-center bg-transparent ml-2 py-1.5 px-3 my-2 mx-[5px] rounded-[10px] border-solid border-[#a07c43] no-underline lg:mt-4">
                    <img src="/icon/right-arrow-g.svg" className='w-2 mr-1'></img>
                    <Link href="/news/topnews">もっと見る</Link>
                </button>
            </div>
        </div>
    )
}