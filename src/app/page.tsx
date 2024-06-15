"use client";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Image from "next/image";
import writing from "./writing.jpg";
import {
    get
} from "react-intl-universal";
import {
    HistoryEdu as HistoryEduIcon,
    Mail as MailIcon,
    MenuBook as MenuBookIcon,
    Article as ArticleIcon
} from '@mui/icons-material';
import Link from "next/link";
export default function Home() {
    const theme = useTheme(),
        downsm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box>
            <Image priority style={{
                width: "100%",
                height: "calc((100vw - 32px) / 7360 * 4912)",
                position: "absolute",
                top: downsm ? 112 : 64,
                zIndex: "1"
            }} src={writing} alt="writing" />
            <Box component="section" sx={{
                minHeight: "calc((100vw - 32px) / 7360 * 4912)"
            }}>
                <Box sx={{
                    position: "relative",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    zIndex: "2",
                    m: 2,
                    [theme.breakpoints.up("md")]: {
                        pt: 16,
                        pb: 16
                    },
                    [theme.breakpoints.up("sm")]: {
                        pt: 8,
                        pb: 8
                    },
                    [theme.breakpoints.up("xs")]: {
                        p: 2
                    },
                    pr: 2,
                    pl: 2
                }}>
                    <Box sx={{
                        display: "flex",
                        mb: 2
                    }}>
                        <Typography variant="h3">
                            {get("homepage.description.1")}
                            <Typography variant="h3" component="span" sx={{
                                color: theme => theme.palette.primary.main
                            }}>
                                {get("homepage.description.2")}
                            </Typography>
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1">
                        {get("homepage.description.3")}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                p: 2,
                width: "calc(100% - 32px)"
            }}>
                <Grid container component="section" direction={downsm ? "column": "row"} sx={{
                    justifyContent: "space-between"
                }}>
                    {([["orthography", HistoryEduIcon], ["dictionary", MenuBookIcon], ["syntax", ArticleIcon]] as [string, typeof HistoryEduIcon][]).map(item => {
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
                                <Link href={`/${item[0]}`}>
                                    <Avatar sx={{
                                        color: theme => theme.palette.primary.main,
                                        backgroundColor: theme => `${theme.palette.primary.light}1a`,
                                        width: 64,
                                        height: 64
                                    }}>
                                        <Icon />
                                    </Avatar>
                                </Link>
                                <Typography variant="h5">
                                    {get(item[0])}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {get(`${item[0]}page.description`)}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                <Box component="section" sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    [theme.breakpoints.up("md")]: {
                        mb: 8
                    },
                    [theme.breakpoints.up("sm")]: {
                        mb: 4
                    },
                    justifyContent: "space-between"
                }}>
                    <Typography sx={{
                        borderLeft: "4px solid gray",
                        pl: 1
                    }} variant="h5" component="blockquote" cite="https://www.rechtschreibrat.com/" paragraph>
                        {get("homepage.say")}
                    </Typography>
                    <a href="mailto:neilaspace@outlook.com">
                        <Button variant="contained" startIcon={<MailIcon />}>
                            {get("email")}
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    );
}