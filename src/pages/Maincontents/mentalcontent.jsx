import BottomNav from "../../../components/BottomNav";


export default function MentalContent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/mentalphoto.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>

            </main>
            <div className="fixed bottom-0">
                <BottomNav />
            </div>
        </div>
    )
}