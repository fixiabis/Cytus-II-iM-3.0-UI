/** 歡迎動畫 */
async function welcomeAnimation() {
    await delay(500);

    applyStyle(innerLeftArrow, innerRightArrow, {
        opacity: "1",
        transform: `translateX(0px)`,
    });

    await delay(250);

    applyStyle(outerLeftArrow, outerRightArrow, {
        opacity: "1",
        transform: `translateX(0px)`,
    });

    applyStyle(leftWelcomeText, rightWelcomeText, {
        opacity: "1",
        transform: `translateY(0px)`,
    });

    await delay(250);

    applyStyle(timeText, {
        opacity: "1",
        transform: "skew(-30deg, 0deg)",
    });

    await delay(250);

    applyStyle(timeText, {
        transform: "skew(0deg, 0deg)",
    });
}
