/** 驗證動畫 */
async function verifyAnimation() {
    await delay(250);

    applyStyle(accountFieldContainer, passwordFieldContainer, accountFieldBackground, passwordFieldBackground, {
        opacity: "0",
        transform: "scale(0.8)",
    });

    applyStyle(leftLoginText, {
        opacity: "0",
        transform: `translateX(50px)`,
    });

    applyStyle(rightLoginText, {
        opacity: "0",
        transform: `translateX(-50px)`,
    });

    applyStyle(analyzeView, {
        opacity: "1",
        transform: "scaleX(1)",
    });

    applyStyle(leftBigCurve, rightBigCurve, {
        opacity: "0.25",
        transform: "translate(0px)",
    });

    await delay(250);

    applyStyle(accountFieldContainer, passwordFieldContainer, {
        display: "none"
    });

    applyStyle(leftVerifyText, rightVerifyText, {
        opacity: "1",
        transform: `translateY(0px)`,
    });

    applyStyle(ipAndSystemTexts, versionAndModeTexts, {
        opacity: "1",
        transform: `translateY(0px)`,
    });

    applyStyle(topLeftShortLines, bottomLeftShortLines, topRightShortLines, bottomRightShortLines, {
        opacity: "1",
        transform: `translateX(0px)`,
    });

    /** 短線群組，供顏色切換 */
    const shortLineGroupsForSwitch = [
        {
            from: [topLeftShortLine1, topRightShortLine1, bottomLeftShortLine1, bottomRightShortLine1],
            to: [topLeftShortLine2, topRightShortLine2, bottomLeftShortLine2, bottomRightShortLine2],
        },
        {
            from: [topLeftShortLine2, topRightShortLine2, bottomLeftShortLine2, bottomRightShortLine2],
            to: [topLeftShortLine3, topRightShortLine3, bottomLeftShortLine3, bottomRightShortLine3],
        },
        {
            from: [topLeftShortLine3, topRightShortLine3, bottomLeftShortLine3, bottomRightShortLine3],
            to: [topLeftShortLine2, topRightShortLine2, bottomLeftShortLine2, bottomRightShortLine2],
        },
        {
            from: [topLeftShortLine2, topRightShortLine2, bottomLeftShortLine2, bottomRightShortLine2],
            to: [topLeftShortLine1, topRightShortLine1, bottomLeftShortLine1, bottomRightShortLine1],
        },
    ];

    for (let i = 0; i < 2; i++) {
        for (let shortLineGroupForSwitch of shortLineGroupsForSwitch) {
            await delay(250);

            applyStyle(...shortLineGroupForSwitch.from, {
                opacity: "0.5",
            });

            applyStyle(...shortLineGroupForSwitch.to, {
                opacity: "1",
            });
        }
    }
}
