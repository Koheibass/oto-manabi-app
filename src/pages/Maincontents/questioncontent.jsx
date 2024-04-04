import BottomNav from "../../../components/BottomNav";
import Search from "../../../components/Search";

export default function QuestionContent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/questionphoto.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <Search />
            </main>
            <div className="fixed bottom-0">
                <BottomNav />
            </div>
        </div>
    )
}