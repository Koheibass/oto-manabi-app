import BottomNav from "../../../components/BottomNav";
import { client } from "../../../libs/client";
import Link from "next/link";

export default function MentalContent({ contents }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/mentalphoto1.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <ul className="py-4 pb-14 px-2 ">
                    {contents.map((content) => (
                        <li className="flex my-4 divide-y-2" key={content.id}>
                            <Link href={content.videoUrl}>
                                <img className="w-[130px]" src={content.thumbnail.url} alt={content.name} />
                            </Link>
                            <span>
                                <Link className="px-2" href={content.videoUrl}>{content.name}</Link>
                                <div className="pt-2 px-2 text-[12px]" dangerouslySetInnerHTML={{ __html: content.article }}></div>
                            </span>
                        </li>
                    ))}
                </ul>
            </main>
            <div className="fixed bottom-0">
                <BottomNav />
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "content", queries: { filters: 'type[contains]メンタルトレーニング' }
    })

    return {
        props: {
            contents: data.contents,
        },

    };
};