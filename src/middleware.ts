import {
    NextRequest,
    NextResponse
} from "next/server";
import {
    langs as locales
} from "langs";
import Negotiator from "negotiator";
import {
    match
} from "@formatjs/intl-localematcher";
const defaultLocale = locales[0];
export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const {
        pathname
    } = request.nextUrl;

    if (
        // Redirect if there is not internal
        pathname.startsWith("/_next") || pathname.startsWith("/placmystnov.png")

        // Redirect if there is no locale
        || locales.some(
            locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
        )
    ) return;

    // 转换headers格式
    const headers: Negotiator.Headers = {
    };
    for (const header of request.headers.entries()) {
        headers[header[0]] = header[1];
    }

    const languages = new Negotiator({
            headers
        }).languages(),
        locale = match(languages.map(lang => lang.replace("_", "-")), locales, defaultLocale);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}
export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // '/((?!_next).*)',
        // "/((?!placmystnov.png).*)"
        // Optional: only run on root (/) URL
        // '/'
    ]
};
