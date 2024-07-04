import type {
    Metadata
} from "next";
import {
    Box
} from "@mui/material";
import pack from "../../../package.json";
import HeadBar from "./layout/HeadBar";
import Footer from "./layout/Footer";
import {
    params
} from "getIntl";
import {
    ReactNode
} from "react";
export const metadata: Metadata = {
    title: "Placmystnovish",
    description: "Placmystnovish site",
    icons: "/placmystnov.png",
    openGraph: {
        title: "Placmystnovish",
        description: "Placmystnovish site",
        url: pack.homepage,
        siteName: "Placmystnovish",
        images: [
            {
                url: "./placmystnov.png",
                width: 1500,
                height: 1000
            }
        ],
        locale: "zh_CN"
    }
};
export default async function RootLayout(props: params & {
    children: ReactNode;
}) {
    return (
        <html lang="zh-CN">
            <Box component="body" sx={{
                margin: 0
            }}>
                <HeadBar {...props} />
                {props.children}
                <Footer {...props} />
            </Box>
        </html>
    );
}
