import Link from "next/link";

export default function SectionQuestion() {
    return (
        <div className="border-r-2 border-b-2">
            <Link href='/question'><span className="flex items-center justify-center">
                <img src="/photo/questionphoto1.png" width="50%" />
            </span></Link>
        </div>
    );
};