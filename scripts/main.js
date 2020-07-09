/** 箭頭寬度 */
const arrowWidth = 7;

(async function () {
    initialize();
    await welcomeAnimation();
    await whenUserPressKeyOrClickPage();
    await loginAnimation();
    await whenUserFilledOutFormAndPressEnter();
    await verifyAnimation();
    await diveAnimation();
})();
