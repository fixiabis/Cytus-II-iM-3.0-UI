/** 登入動畫 */
async function loginAnimation() {
    await delay(250);

    applyStyle(timeText, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "scale(0.8)",
        transformOrigin: "center",
    });

    applyStyle(leftWelcomeText, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateX(50px)`,
    });

    applyStyle(rightWelcomeText, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateX(-50px)`,
    });

    applyStyle(outerLeftArrow, innerLeftArrow, {
        opacity: "1",
        transform: `translateX(${arrowWidth * 6}px)`,
    });

    applyStyle(outerRightArrow, innerRightArrow, {
        opacity: "1",
        transform: `translateX(-${arrowWidth * 6}px)`,
    });

    await delay(250);

    applyStyle(leftLoginText, rightLoginText, {
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        opacity: "1",
        transform: `translateY(0px)`,
    });

    applyStyle(polylines, {
        transitionProperty: "stroke-dashoffset",
        transitionDuration: "0.5s",
        strokeDashoffset: "0",
    });

    applyStyle(accountFieldContainer, accountFieldBackground, {
        transitionProperty: "opacity, transform",
        transitionDuration: "1s, 0.5s",
        opacity: "1",
        transform: "translateX(0px)",
    });

    accountField.focus();

    applyStyle(rollingDots, {
        transitionProperty: "opacity",
        transitionDuration: "0.2s",
        opacity: "1",
    });

    await delay(250);

    applyStyle(passwordFieldContainer, passwordFieldBackground, {
        transitionProperty: "opacity, transform",
        transitionDuration: "1s, 0.5s",
        opacity: "1",
        transform: "translateX(0px)",
    });
}
