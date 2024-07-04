"use client";
import {
    Avatar
} from "@mui/material";
import {
    page
} from "../../layout/HeadBar";
import {
    ReactNode
} from "react";
import Link from "next/link";
import {
    usePathname
} from "next/navigation";
import calcuteRedirectingTo from "../../layout/redirectPage/calcuteRedirectingTo";
export default function IconContainer(props: {
    children: ReactNode;
    to: page;
}) {
    const pathname = usePathname();
    return <Link href={calcuteRedirectingTo(pathname, props.to)}>
        <Avatar sx={{
            color: theme => theme.palette.primary.main,
            backgroundColor: theme => `${theme.palette.primary.light}1a`,
            width: 64,
            height: 64
        }}>
            {props.children}
        </Avatar>
    </Link>;
}