"use client";
import {
    Box,
    Typography
} from "@mui/material";
import {
    get
} from "react-intl-universal";
export default function Dictionary() {
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
                    <Typography variant="body1">
                        {get("dictionarypage.loanword.rootbody")}
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
                    <Typography variant="body1">
                        {get("dictionarypage.loanword.affixbody")}
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
}