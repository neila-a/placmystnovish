"use client";
import {
    Tabs
} from "@mui/material";
import {
    usePathname,
    useSelectedLayoutSegment
} from "next/navigation";
import {
    page
} from "..";
import {
    ReactNode
} from "react";
export default function HeadTabContainer(props: {
    children: ReactNode;
    redirect(oldPath: string, newValue: string): any;
}) {
    const segment = useSelectedLayoutSegment(),
        pathname = usePathname(),
        value = segment === null ? "home" : segment as page;
    return <Tabs
        variant="fullWidth"
        value={value}
        onChange={(event, newValue: page) => {
            debugger
            return props.redirect(pathname, newValue);
        }}
    >
        {props.children}
    </Tabs>;
}
