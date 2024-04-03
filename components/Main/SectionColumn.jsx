import Link from "next/link"

export default function SectionColumn() {
    return (
        <div>
            <Link href='Maincontents/columncontent'><span className="flex items-center justify-center border border-black border-dashed">
                <img src="/photo/columnPhoto.png" width="50%" />
            </span></Link>
        </div>
    )
}