import BottomNav from "../../../components/BottomNav";
import Search from "../../../components/Search";

export default function MgrammerContent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/Mgrammerphoto.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <Search />
                <p>Comming Soon!</p>
            </main>
            <div className="fixed bottom-0">
                <BottomNav />
            </div>
        </div>
    )
}