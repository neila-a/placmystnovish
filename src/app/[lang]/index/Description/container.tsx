"use client";
import {
    Box
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function DescriptionContainer(props: {
    children: ReactNode;
}) {
    return <Box sx={theme => ({
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
    })}>
        {props.children}
    </Box>;
}
