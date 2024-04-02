export default function Search() {
    return (
        <div className="flex justify-center items-center my-4">
            <form action="" method="post">
                <input className="border border-black border-solid pl-4" type="text" name="search" placeholder="キーワードを入力"></input>
                <input className="ml-4" type="submit" name="submit" value="検索"></input>
            </form>
        </div>
    )
}