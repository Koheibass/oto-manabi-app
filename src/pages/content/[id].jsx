import BottomNav from "../../../components/BottomNav";
import { client } from "../../../libs/client";


export default function ColumnId({ content }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/columnPhoto1.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <h1>{content.name}</h1>
                <div>
                    {content.article}
                </div>
            </main>
            <div>
                <BottomNav />
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "content" });

    const paths = data.contents.map((content) => `/content/${content.id}`);
    return { paths, fallback: false };
};


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "content", contentId: id, queries: { filters: 'type[contains]りなコラム' } });

    return {
        props: {
            content: data,
        },
    };
};