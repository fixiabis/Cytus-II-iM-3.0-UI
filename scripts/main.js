/** 箭頭寬度 */
const arrowWidth = 7;

document.addEventListener("readystatechange", async () => {
    if (document.readyState === "complete") {
        initialize();
        await welcomeAnimation();
        await whenUserPressKeyOrClickPage();
        await loginAnimation();
        await whenUserFilledOutFormAndPressEnter();
        await verifyAnimation();
        await diveAnimation();
    }
});
