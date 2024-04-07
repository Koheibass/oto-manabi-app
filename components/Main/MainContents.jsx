import SectionColumn from "./SectionColumn";
import SectionMental from "./SectionMental";
import SectionMgrammar from "./SectionMgrammar";
import SectionQuestion from "./SectionQuestion";

export default function MainContents({ contents }) {
    return (
        <div className="grid grid-cols-2 grid-rows-2">
            <SectionQuestion contents={contents} />
            <SectionMental />
            <SectionMgrammar />
            <SectionColumn />
        </div>
    )
}