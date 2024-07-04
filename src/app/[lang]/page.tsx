import {
    Box
} from "@mui/material";
import {
    params
} from "getIntl";
import PagesGridContainer from "./index/PagesGrid/container";
import PagesGrid from "./index/PagesGrid";
import WritingImage from "./index/WritingImage";
import Description from "./index/Description";
import Say from "./index/Say";
export default async function Home(params: params) {
    return (
        <Box>
            <WritingImage />
            <Description {...params} />
            <Box sx={{
                p: 2,
                width: "calc(100% - 32px)"
            }}>
                <PagesGridContainer>
                    <PagesGrid {...params} />
                </PagesGridContainer>
                <Say {...params} />
            </Box>
        </Box>
    );
}
