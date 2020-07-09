/** 初始化 */
function initialize() {
    applyStyle(innerLeftArrow, outerLeftArrow, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateX(-${arrowWidth * 2}px)`,
    });

    applyStyle(innerRightArrow, outerRightArrow, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateX(${arrowWidth * 2}px)`,
    });

    applyStyle(leftWelcomeText, rightWelcomeText, {
        opacity: "0",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        transform: `translateY(-16px)`,
    });

    applyStyle(leftLoginText, rightLoginText, {
        opacity: "0",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        transform: `translateY(-14px)`,
    });

    applyStyle(timeText, {
        opacity: "0",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.25s",
        transform: "skew(30deg, 0deg)",
        transformOrigin: "center",
    });

    /** 更新時間文字 */
    const updateTimeText = () => {
        /** 現在時間 */
        const now = new Date();

        /** 格式過的時間文字 */
        const formattedTimeText = formatToTimeText(now);

        timeText.textContent = formattedTimeText;
    };

    updateTimeText();
    setInterval(updateTimeText, 1000);

    applyStyle(topLeftPolyline, topRightPolyline, bottomLeftPolyline, bottomRightPolyline, {
        strokeDasharray: "128",
        strokeDashoffset: "128",
        transitionProperty: "stroke-dashoffset",
        transitionDuration: "0.5s",
    });

    applyStyle(rollingDots, {
        opacity: "0",
        transitionProperty: "opacity",
        transitionDuration: "0.2s",
    });

    applyStyle(accountFieldContainer, passwordFieldContainer, accountFieldBackground, passwordFieldBackground, {
        opacity: "0",
        transitionProperty: "opacity, transform",
        transitionDuration: "1s, 0.5s",
        transform: "translateX(100px)",
        transformOrigin: "center",
    });

    accountField.addEventListener("input", () => {
        accountField.value = accountField.value.replace(/[^\u0000-\u00ff]/g, "");
        accountFieldAsterisk.value = "*".repeat(accountField.value.length);
    });

    passwordField.addEventListener("input", () => {
        passwordField.value = passwordField.value.replace(/[^\u0000-\u00ff]/g, "");
        passwordFieldAsterisk.value = "*".repeat(passwordField.value.length);
    });

    applyStyle(leftVerifyText, rightVerifyText, {
        opacity: "0",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        transform: `translateY(-14px)`,
    });

    applyStyle(leftDiveText, rightDiveText, {
        opacity: "0",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.1s, 0.5s",
        transform: `translateY(-14px)`,
    });

    applyStyle(ipAndSystemTexts, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateY(-30px)`,
    })

    applyStyle(versionAndModeTexts, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateY(30px)`,
    });

    applyStyle(topLeftShortLines, bottomLeftShortLines, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateX(-22px)`,
    });

    applyStyle(topRightShortLines, bottomRightShortLines, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: `translateX(22px)`,
    });

    applyStyle(topLeftShortLine2, topLeftShortLine3, topRightShortLine2, topRightShortLine3, bottomLeftShortLine2, bottomLeftShortLine3, bottomRightShortLine2, bottomRightShortLine3, {
        opacity: "0.5"
    });

    applyStyle(analyzeView, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "scaleX(0.6)",
        transformOrigin: "center",
    });

    applyStyle(leftBigCurve, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "translate(-30px)",
    });

    applyStyle(rightBigCurve, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "translate(30px)",
    });

    applyStyle(accessText, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "scale(0.4)",
        transformOrigin: "center",
    });

    applyStyle(leftDiveStatus, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "perspective(50px) rotateY(1deg) translateX(-10px)",
        transformOrigin: "center",
    });

    applyStyle(rightDiveStatus, {
        opacity: "0",
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transform: "perspective(50px) rotateY(-1deg) translateX(10px)",
        transformOrigin: "center",
    });

    applyStyle(mainView, {
        display: "",
        transformOrigin: "center",
        transitionProperty: "all",
        transitionDuration: "1s",
    });

    const mainViewWidth = 1280;
    const mainViewHeight = 720;
    const initialWindowWidth = window.innerWidth;
    const initialWindowHeight = window.innerHeight;

    window.addEventListener("resize", () => {
        const windowWidth = Math.max(initialWindowWidth, window.innerWidth);
        const windowHeight = Math.max(initialWindowHeight, window.innerHeight);
        const widthRatio = windowWidth / mainViewWidth;
        const heightRatio = windowHeight / mainViewHeight;
        const scale = Math.min(widthRatio, heightRatio);
        const rotatedWidthRatio = windowHeight / mainViewWidth;
        const rotatedHeightRatio = windowWidth / mainViewHeight;
        const rotatedScale = Math.min(rotatedWidthRatio, rotatedHeightRatio);

        if (rotatedScale > scale) {
            mainView.style.transform = `scale(${rotatedScale}) rotate(90deg)`;
        }
        else {
            mainView.style.transform = `scale(${scale})`;
        }
    });

    window.dispatchEvent(new Event("resize"));
}
