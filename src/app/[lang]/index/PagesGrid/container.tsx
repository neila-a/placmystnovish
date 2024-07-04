"use client";
import {
    Grid,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {
    ReactNode
} from "react";
export default function PagesGridContainer(props: {
    children: ReactNode;
}) {
    const theme = useTheme(),
        downsm = useMediaQuery(theme.breakpoints.down("sm"));
    return <Grid container component="section" direction={downsm ? "column" : "row"} sx={{
        justifyContent: "space-between"
    }}>
        {props.children}
    </Grid>;
}
