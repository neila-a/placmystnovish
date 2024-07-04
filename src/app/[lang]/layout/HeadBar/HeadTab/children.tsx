import {
    Tab
} from "@mui/material";
import getIntl, {
    params
} from "getIntl";
export default async function HeadTabs(params: params) {
    const get = await getIntl(params);
    return ["home", "orthography", "dictionary", "syntax"].map(thisValue => <Tab key={thisValue} value={thisValue} label={get(thisValue)} />);
}