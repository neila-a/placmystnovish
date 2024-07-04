"use client";
import {
    Box
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function FooterContainer(props: {
    children: ReactNode;
}) {
    return <Box component="footer" sx={{
        backgroundColor: theme => theme.palette.primary.main,
        color: theme => theme.palette.common.white,
        p: 2
    }}>
        {props.children}
    </Box>;
}
