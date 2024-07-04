import getIntl, {
    params
} from "getIntl";
import FooterContainer from "./container";
export default async function Footer(params: params) {
    const get = await getIntl(params);
    return (
        <FooterContainer>
            ©Copyleft ! 2022-2024, {get("name")}
        </FooterContainer>
    );
}
