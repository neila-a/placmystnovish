import {
    langs
} from "../../../langs";
import {
    page
} from "../HeadBar";
export default function calcuteRedirectingTo<oldPath extends string, newValue extends page>(oldPath: oldPath, newValue: newValue) {
    // 类型逻辑
    type subPath = newValue extends "home" ? "" : `/${newValue}`;
    type rootPath = oldPath extends `/${infer root}${`/${page}` | ""}` ? root : string;
    type newPath = `/${rootPath}${subPath}`;

    // 获取根路径
    let oldRoot = oldPath.split("/").filter(page => page !== "");
    if (oldRoot.length !== 1 && langs.some(
        /**
         * 只有不是在路径只含有语言的时候才掐掉尾
         */
        lang => lang === oldRoot[0]
    )) {
        oldRoot = oldRoot.slice(0, -1);
    }

    // 组合路径
    let path = `/${oldRoot.join("/")}/${newValue.replace("home", "")}`.replace("//", "/");
    if (path.endsWith("/")) path = path.slice(0, -1);
    return path as newPath;
}
