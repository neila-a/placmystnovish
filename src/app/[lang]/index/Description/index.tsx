import {
    Box,
    Typography
} from "@mui/material";
import DescriptionContainer from "./container";
import getGetter, {
    params
} from "getIntl";
import DescriptionContainer2 from "./container2";
export default async function Description(params: params) {
    const get = await getGetter(params);
    return <Box component="section" sx={{
        minHeight: "calc((100vw - 32px) / 7360 * 4912)"
    }}>
        <DescriptionContainer>
            <Box sx={{
                display: "flex",
                mb: 2
            }}>
                <Typography variant="h3">
                    {get("homepage.description.1")}
                    <DescriptionContainer2>
                        {get("homepage.description.2")}
                    </DescriptionContainer2>
                </Typography>
            </Box>
            <Typography variant="subtitle1">
                {get("homepage.description.3")}
            </Typography>
        </DescriptionContainer>
    </Box>;
}