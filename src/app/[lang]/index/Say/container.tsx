"use client";
import {
    Box
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function SayContainer(props: {
    children: ReactNode;
}) {
    return <Box component="section" sx={theme => ({
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
    })}>
        {props.children}
    </Box>;
}