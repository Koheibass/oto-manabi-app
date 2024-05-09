import { client } from '@/libs/client'
import { useState } from 'react'

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
                    {list.map((item: any) => (
                        <li key={item.key}>{item.name}</li>)
                    )}
                </ul>
            </div>
        </div>
    )
}