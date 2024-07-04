import {
    Box,
    Typography
} from "@mui/material";
import getIntl, {
    params
} from "getIntl";
export default async function Dictionary(params: params) {
    const get = await getIntl(params);
    return (
        <Box component="main" sx={{
            p: 2
        }}>
            <Typography variant="h4" sx={{
                mb: 2
            }}>
                {get("dictionary")}
            </Typography>
            <Box component="article" sx={{
                p: 2
            }}>
                <Typography variant="h5">
                    {get("dictionarypage.loanword.rule")}
                </Typography>
                <Box component="section" sx={{
                    p: 2
                }}>
                    <Typography variant="h6" sx={{
                        mb: 1
                    }}>
                        {get("dictionarypage.loanword.root")}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {get("dictionarypage.loanword.rootfrom")}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {get("dictionarypage.loanword.rootchange")}
                    </Typography>
                </Box>
                <Box component="section" sx={{
                    p: 2
                }}>
                    <Typography variant="h6" sx={{
                        mb: 1
                    }}>
                        {get("dictionarypage.loanword.affix")}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {get("dictionarypage.loanword.affixbody")}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}