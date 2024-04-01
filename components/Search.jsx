export default function Search() {
    return (
        <div className="my-4 flex justify-center items-center">
            <form action="" method="post">
                <input type="text" name="search" placeholder="キーワードを入力"></input>
                <input type="submit" name="submit" value="検索"></input>
            </form>
        </div>
    )
}