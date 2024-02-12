"use client";
import {
    useEffect,
    useState
} from "react";
import intl from "react-intl-universal";
import zhCN from "./locales/zh-CN.json";
import HeadBar from './HeadBar';
import useLang from "./useLang";
import Footer from "./Footer";
import {
    Box
} from "@mui/material";
export const locales = {
    zhCN
};
export default function ClientLayout(props: {
    children: React.ReactNode;
}) {
    const [choosedLang, setChoosedLang] = useLang(),
        [loadDone, setLoadDone] = useState<boolean>(false);
    useEffect(() => {
        intl.init({
            currentLocale: choosedLang,
            locales
        }).then(() => setLoadDone(true));
    }, [choosedLang]);
    return loadDone && (
        <>
            <HeadBar />
            <Box component="main">
                {props.children}
            </Box>
            <Footer />
        </>
    );
}