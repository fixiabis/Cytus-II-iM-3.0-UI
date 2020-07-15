/** 潛入動畫 */
async function diveAnimation() {
    applyStyle(analyzeView, {
        opacity: "0",
        transform: "scale(0.8)",
    });
    
    applyStyle(topLeftShortLine2, topLeftShortLine3, topRightShortLine2, topRightShortLine3, bottomLeftShortLine2, bottomLeftShortLine3, bottomRightShortLine2, bottomRightShortLine3, {
        opacity: "1",
    });

    applyStyle(leftVerifyText, {
        opacity: "0",
        transform: `translateX(50px)`,
    });

    applyStyle(rightVerifyText, {
        opacity: "0",
        transform: `translateX(-50px)`,
    });

    await delay(250);

    applyStyle(leftDiveText, rightDiveText, {
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        opacity: "1",
        transform: `translateY(0px)`,
    });

    applyStyle(outerLeftArrow, innerLeftArrow, {
        opacity: "1",
        transform: `translateX(${arrowWidth * 6.5}px)`,
    });

    applyStyle(outerRightArrow, innerRightArrow, {
        opacity: "1",
        transform: `translateX(-${arrowWidth * 6.5}px)`,
    });

    applyStyle(accessText, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: `scale(1)`,
    });

    applyStyle(leftDiveStatus, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "perspective(50px) rotateY(1deg) translateX(0px)",
    });

    applyStyle(rightDiveStatus, {
        transitionProperty: "all",
        transitionDuration: "0.5s",
        opacity: "1",
        transform: "perspective(50px) rotateY(-1deg) translateX(0px)",
    });

    await delay(500);
    
    applyStyle(layoutContainer, {
        opacity: "0",
        transform: "scale(10)",
        transitionProperty: "all",
        transitionDuration: "1s",
    });
}
