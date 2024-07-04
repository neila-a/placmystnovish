import {
    Box,
    Typography
} from "@mui/material";
import Image from "next/image";
import HeadTab from "./HeadTab";
import getIntl, {
    params
} from "getIntl";
import HeadBarContainer from "./container";
import NameLinkContainer from "./NameLinkContainer";
export type page = "home" | "orthography" | "dictionary" | "syntax";
export default async function HeadBar(params: params) {
    const get = await getIntl(params);
    return <HeadBarContainer>
        <NameLinkContainer>
            <Box sx={{
                display: "flex",
                minHeight: 64,
                alignItems: "center"
            }}>
                <Image src="/placmystnov.png" alt="National flag of Placmystnov" width={75} height={50} style={{
                    marginRight: 8
                }} />
                <Typography variant="h6" component="span">
                    {get("name")}
                </Typography>
            </Box>
        </NameLinkContainer>
        <HeadTab {...params} />
    </HeadBarContainer>;
}