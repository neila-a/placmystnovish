"use client";
import Link from "next/link";
import {
    ReactNode
} from "react";
import calcuteRedirectingTo from "../redirectPage/calcuteRedirectingTo";
import {
    usePathname
} from "next/navigation";
import {
    useTheme
} from "@mui/material";
export default function NameLinkContainer(props: {
    children: ReactNode;
}) {
    const pathname = usePathname(),
        theme = useTheme();
    return <Link href={calcuteRedirectingTo(pathname, "home")} style={{
        color: theme.palette.primary.main,
        textDecoration: "none"
    }}>
        {props.children}
    </Link>;
}
