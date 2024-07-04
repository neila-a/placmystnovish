"use client";
import {
    Box
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function WritingImageContainer(props: {
    children: ReactNode
}) {
    return <Box sx={theme => ({
        position: "absolute",
        top: 64,
        [theme.breakpoints.down("sm")]: {
            top: 112
        }
    })}>
        {props.children}
    </Box>;
}