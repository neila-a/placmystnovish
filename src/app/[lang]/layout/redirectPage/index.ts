import {
    redirect
} from "next/navigation";
import {
    page
} from "../HeadBar";
import calcuteRedirectingTo from "./calcuteRedirectingTo";
export default async function redirectPage(oldPath: string, newValue: page) {
    "use server";
    return redirect(calcuteRedirectingTo(oldPath, newValue))
}
