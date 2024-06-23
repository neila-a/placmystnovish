import intl from 'react-intl-universal';
import {
    useReducer
} from 'react';
import setSetting from "./setSetting";
import {
    locales
} from './ClientLayout';
export const isBrowser = () => typeof window !== 'undefined'; // The approach recommended by Next.js
const useLang = () => {
    var browserLang: string = "zhCN",
        localStorageLang: string = "zhCN"
    if (isBrowser()) {
        if (window.navigator.language || window.navigator.languages) {
            browserLang = ((window.navigator.languages && window.navigator.languages[0]) || window.navigator.language).split("-").join("") || "zhCN";
        }
        localStorageLang = intl.determineLocale({
            localStorageLocaleKey: "lang"
        });
    }
    const real = localStorageLang || browserLang || "zhCN";
    return useReducer((old: string, val: string) => {
        intl.init({
            currentLocale: val,
            locales
        });
        setSetting("lang", "语言", val);
        return val;
    }, real.replace("-", ""));
};
export default useLang;