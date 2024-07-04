import {
    Grid,
    Typography
} from "@mui/material";
import {
    HistoryEdu as HistoryEduIcon,
    MenuBook as MenuBookIcon,
    Article as ArticleIcon
} from "@mui/icons-material";
import getGetter, {
    params
} from "getIntl";
import IconContainer from "./iconContainer";
import {
    page
} from "../../layout/HeadBar";
const pages = [["orthography", HistoryEduIcon], ["dictionary", MenuBookIcon], ["syntax", ArticleIcon]] satisfies [page, typeof HistoryEduIcon][];
export default async function PagesGrid(params: params) {
    const get = await getGetter(params);
    return pages.map(item => {
        const Icon = item[1];
        return (
            <Grid item key={item[0]} sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "calc((100% - 32px) / 3)",
                textAlign: "center",
                ["> *"]: {
                    m: 0.5
                }
            }}>
                <IconContainer to={item[0]}>
                    <Icon />
                </IconContainer>
                <Typography variant="h5">
                    {get(item[0])}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                    {get(`${item[0]}page.description`)}
                </Typography>
            </Grid>
        );
    });
}
