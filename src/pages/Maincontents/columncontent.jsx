import BottomNav from "../../../components/BottomNav";
import Search from "../../../components/Search";
import { client } from "../../../libs/client";
import Link from "next/link";

export default function ColumnContent({ contents }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/columnPhoto.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <Search />
                <ul className="">
                    {contents.map((content) => (
                        <li className="flex my-4" key={content.id}>
                            <Link href='/Maincontents/columndetails'>{content.name}</Link>
                        </li>
                    ))}
                </ul>
            </main>
            <div className="fixed bottom-0">
                <BottomNav />
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "content", queries: { filters: 'type[contains]りなコラム' }
    })

    return {
        props: {
            contents: data.contents,
        },

    };
};