import calcuteRedirectingTo from "./calcuteRedirectingTo";
describe("calcuteRedirectingTo", () => {
    test("导航至主页", () => {
        expect(calcuteRedirectingTo("/zh-CN/dictionary", "home")).toBe("/zh-CN");
    });
    test("导航至其他页", () => {
        expect(calcuteRedirectingTo("/zh-CN", "dictionary")).toBe("/zh-CN/dictionary");
    });
});
