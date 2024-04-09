import Link from "next/link"

export default function SectionMgrammar() {
    return (
        <div className="pr-2">
            <Link href='/Maincontents/mgrammercontent'><span className="flex items-center justify-center  border border-black border-dashed">
                <img src="/photo/Mgrammerphoto.png" width="50%" />
            </span></Link>
        </div>
    )
}