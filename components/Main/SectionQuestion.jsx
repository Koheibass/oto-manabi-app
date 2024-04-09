import Link from "next/link";

export default function SectionQuestion({ contents }) {
    return (
        <div className="pb-4 pr-2">
            <Link href='/Maincontents/questioncontent'><span className="flex items-center justify-center border border-black border-dashed">
                <img src="/photo/questionphoto.png" width="50%" />
            </span></Link>
        </div>
    );
};