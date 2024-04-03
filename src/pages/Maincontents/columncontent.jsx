import BottomNav from "../../../components/BottomNav";
import Search from "../../../components/Search";

export default function ColumnContent() {
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
            </main>
            <BottomNav />
        </div>
    )
}