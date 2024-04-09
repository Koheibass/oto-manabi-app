import Link from "next/link"

export default function SectionColumn() {
    return (
        <div className="pl-2">
            <Link href='Maincontents/columncontent'><span className="flex items-center justify-center border border-black border-dashed">
                <img src="/photo/columnPhoto.png" width="50%" />
            </span></Link>
        </div>
    )
}