import Link from "next/link"

export default function SectionMental() {
    return (
        <div className="border-b-2">
            <Link href='/Maincontents/mentalcontent'><span className="flex items-center justify-center">
                <img src="/photo/mentalphoto1.png" width="48%" />
            </span></Link>
        </div>
    )
}