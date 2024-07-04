import {
    langs
} from "langs";
import {
    page
} from "../HeadBar";
export default function calcuteRedirectingTo<newValue extends page>(oldPath: string, newValue: newValue) {
    const oldRoot = oldPath.split("/").filter(page => page !== "");
    if (oldRoot.length !== 1 && langs.some(
        /**
         * 只有不是在路径只含有语言的时候才掐掉尾
         */
        lang => lang === oldRoot[0]
    )) {
        oldRoot.pop();
    }
    const path = `/${oldRoot.join("/")}/${newValue.replace("home", "")}`;
    return path.replace("//", "/") as `/${typeof langs[number]}/${newValue extends "home" ? "" : newValue}`;
}
