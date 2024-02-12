import {
    Box
} from "@mui/material";
import {
    get
} from "react-intl-universal";
export default function Footer() {
    return (
        <Box component="footer" sx={{
            backgroundColor: theme => theme.palette.primary.main,
            color: theme => theme.palette.common.white,
            p: 2
        }}>
            ©Copyleft ! 2022-2024, {get("name")}
        </Box>
    );
}