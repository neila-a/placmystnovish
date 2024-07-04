import {
    langs
} from "langs";
import {
    // @ts-ignore 导入被吃了
    ReactIntlUniversal
} from "react-intl-universal";
async function importLang(lang: string) {
    const imported = await import(`locales/${lang}.json`);
    return imported.default as langContent;
}
export async function getIntlInstance(params: params) {
    "use server";
    const instance = new ReactIntlUniversal() as typeof import("react-intl-universal"),
        langsContents = {
            "zh-CN": () => importLang("zh-CN")
        } satisfies Record<lang, () => Promise<langContent>>; // nextjs 官方的推荐做法，用于缩小体积
    instance.init({
        currentLocale: params.params.lang,
        locales: {
            [params.params.lang]: await langsContents[params.params.lang]()
        }
    });
    return instance;
}
export default async function getGetter(params: params) {
    const instance = await getIntlInstance(params);
    return instance.get.bind(instance);
}
type lang = typeof langs[number];
type langContent = Record<string, any>;
type langsContents = Record<lang, langContent>;
export interface params {
    params: {
        lang: keyof langsContents;
    }
}
