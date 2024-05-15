import { client } from '@/libs/client'
import { useState } from 'react'
import Link from "next/link";

export default function Search() {
    const [list, setList] = useState([])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const query = formData.get('search')
        const list = await client.getList({
            endpoint: "content",
            queries: { q: String(query) }

        })
        setList(list.contents)
    }

    return (
        <div className="flex flex-col justify-center items-center my-8">
            <form onSubmit={handleSubmit}>
                <input className="border border-black border-solid pl-4" type="text" name="search" placeholder="キーワードを入力"></input>
                <input className="ml-4" type="submit" name="submit" value="検索"></input>
            </form>

            <div>
                <ul>
                    {list.map((content: any) => (
                        <li className="flex my-4" key={content.id}>
                            <Link href={`/content/${content.id}`}>{content.column}</Link>
                        </li>
                    ))}
                    {list.map((content: any) => (
                        <li className="flex my-4 divide-y-2" key={content.id}>
                            <Link href={content.videoUrl}>
                                <img className="w-[180px]" src={content.thumbnail.url} alt={content.question} />
                            </Link>
                            <Link className="pl-2" href={content.videoUrl}>{content.question}</Link>
                        </li>
                    ))}
                    {list.map((content: any) => (
                        <li className="flex my-4 divide-y-2" key={content.id}>
                            <Link href={content.videoUrl}>
                                <img className="w-[130px]" src={content.thumbnail.url} alt={content.mental} />
                            </Link>
                            <span>
                                <Link className="px-2" href={content.videoUrl}>{content.mental}</Link>
                                <div className="pt-2 px-2 text-[12px]" dangerouslySetInnerHTML={{ __html: content.article }}></div>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}