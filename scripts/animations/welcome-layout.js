/** 歡迎動畫 */
async function welcomeAnimation() {
    await delay(500);

    applyStyle(innerLeftArrow, innerRightArrow, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: `translateX(0px)`,
    });

    await delay(250);

    applyStyle(outerLeftArrow, outerRightArrow, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: `translateX(0px)`,
    });

    applyStyle(leftWelcomeText, rightWelcomeText, {
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        opacity: "1",
        transform: `translateY(0px)`,
    });

    await delay(250);

    applyStyle(timeText, {
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.25s",
        opacity: "1",
        transform: "skew(-30deg, 0deg)",
    });

    await delay(250);

    applyStyle(timeText, {
        transform: "skew(0deg, 0deg)",
    });
}
