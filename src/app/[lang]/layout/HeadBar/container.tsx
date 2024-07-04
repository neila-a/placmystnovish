"use client";
import {
    AppBar,
    Toolbar,
    useTheme
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function HeadBarContainer(props: {
    children: ReactNode;
}) {
    return <AppBar position="sticky" sx={theme => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            minHeight: 112
        }
    })}>
        <Toolbar sx={theme => ({
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column"
            }
        })}>
            {props.children}
        </Toolbar>
    </AppBar>
}