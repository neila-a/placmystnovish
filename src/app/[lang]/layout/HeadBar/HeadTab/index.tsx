import {
    params
} from "getIntl";
import HeadTabContainer from "./container";
import HeadTabs from "./children";
import redirectPage from "../../redirectPage";
export default function HeadTab(params: params) {
    return <HeadTabContainer redirect={redirectPage}>
        <HeadTabs {...params} />
    </HeadTabContainer>;
}
