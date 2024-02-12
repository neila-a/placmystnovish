import type {
    Metadata
} from 'next';
import ClientLayout from './ClientLayout';
import {
    Box
} from '@mui/material';
import pack from "../../package.json";
export const metadata: Metadata = {
    title: 'Placmystnovish',
    description: 'Placmystnovish site',
    icons: "/placmystnov.png",
    openGraph: {
        title: 'Placmystnovish',
        description: 'Placmystnovish site',
        url: pack.homepage,
        siteName: 'Placmystnovish',
        images: [
            {
                url: './placmystnov.png',
                width: 1500,
                height: 1000
            }
        ],
        locale: 'zh_CN'
    }
};
export default function RootLayout(props: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN">
            <Box component="body" sx={{
                margin: 0
            }}>
                <ClientLayout>
                    {props.children}
                </ClientLayout>
            </Box>
        </html>
    )
}
