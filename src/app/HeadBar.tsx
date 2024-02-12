import {
    AppBar,
    Box,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import Image from "next/image";
import {
    get
} from "react-intl-universal";
import {
    useState
} from "react";
import {
    useRouter,
    useSelectedLayoutSegment
} from "next/navigation";
export type page = "home" | "orthography" | "dictionary" | "syntax";
export default function HeadBar() {
    const segment = useSelectedLayoutSegment(),
        router = useRouter(),
        theme = useTheme(),
        value = segment === null ? "home" : segment as page;
    return (
        <AppBar position="sticky" sx={{
            backgroundColor: theme => theme.palette.background.paper,
            color: theme => theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                minHeight: 112
            }
        }}>
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                [theme.breakpoints.down('sm')]: {
                    flexDirection: "column"
                }
            }}>
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
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={(event, newValue) => {
                        router.push(`/${newValue.replace("home", "")}`);
                    }}
                >
                    {["home", "orthography", "dictionary", "syntax"].map(thisValue => <Tab key={thisValue} value={thisValue} label={get(thisValue)} />)}
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}