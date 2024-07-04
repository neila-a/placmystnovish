import getGetter, {
    params
} from "getIntl";
import SayContainer from "./container";
import {
    Button,
    Typography
} from "@mui/material";
import {
    Mail
} from "@mui/icons-material";
export default async function Say(params: params) {
    const get = await getGetter(params);
    return <SayContainer>
        <Typography sx={{
            borderLeft: "4px solid gray",
            pl: 1
        }} variant="h5" component="blockquote" cite="https://www.rechtschreibrat.com/" paragraph>
            {get("homepage.say")}
        </Typography>
        <a href="mailto:neilaspace@outlook.com">
            <Button variant="contained" startIcon={<Mail />}>
                {get("email")}
            </Button>
        </a>
    </SayContainer>
}