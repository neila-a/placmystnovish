"use client";
import {
    Typography
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function DescriptionContainer2(props: {
    children: ReactNode
}) {
    return <Typography variant="h3" component="span" sx={{
        color: theme => theme.palette.primary.main
    }}>
        {props.children}
    </Typography>;
}
