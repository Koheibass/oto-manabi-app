import Link from "next/link"

export default function SectionMental() {
    return (
        <div>
            <Link href='/Maincontents/mentalcontent'><span className="flex items-center justify-center border border-black border-dashed">
                <img src="/photo/mentalphoto.png" width="50%" />
            </span></Link>
        </div>
    )
}