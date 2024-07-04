import WritingImageContainer from "./container";
import Image from "next/image";
import writing from "./writing.jpg";
export default function WritingImage() {
    return <WritingImageContainer>
        <Image priority style={{
            width: "100%",
            height: "calc((100vw - 32px) / 7360 * 4912)",
            zIndex: "1"
        }} src={writing} alt="writing" />
    </WritingImageContainer>
}