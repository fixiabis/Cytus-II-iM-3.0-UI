/** 延遲 */
function delay(ms) {
    return new Promise(delayed => setTimeout(delayed, ms));
}

/** 幫元素附加樣式 */
function applyStyle(...elementsWithStyle) {
    /** 樣式 */
    const style = elementsWithStyle.pop();

    /** 元素 */
    const elements = elementsWithStyle;

    for (let element of elements) {
        Object.assign(element.style, style);
    }
}

/** 當用戶按下按鍵或點選頁面 */
function whenUserPressKeyOrClickPage() {
    return new Promise(callbackWhenUserPressKeyOrClickPage => {
        /** 處理使用者行為 */
        const handleUserBehavior = () => {
            callbackWhenUserPressKeyOrClickPage();
            removeKeyPressOrClickPageListeners();
        };

        /** 移除按下按鍵或點選頁面的監聽器 */
        const removeKeyPressOrClickPageListeners = () => {
            window.removeEventListener("click", handleUserBehavior);
            window.removeEventListener("keypress", handleUserBehavior);
        };

        window.addEventListener("click", handleUserBehavior);
        window.addEventListener("keypress", handleUserBehavior);
    });
}

/** 當用戶填寫了表單且按下Enter */
function whenUserFilledOutFormAndPressEnter() {
    return new Promise(callbackWhenUserFilledOutFormAndPressEnter => {
        /** 處理使用者按鍵 */
        const handleUserKeyPress = (event) => {
            /** 使用者是否填寫表單 */
            const isUserFilledOutForm = accountField.value && passwordField.value;

            /** 使用者是否按下Enter */
            const isUserPressEnter = event.keyCode === 13;

            if (isUserFilledOutForm && isUserPressEnter) {
                callbackWhenUserFilledOutFormAndPressEnter();
                window.removeEventListener("keypress", handleUserKeyPress);
            }
        };

        window.addEventListener("keypress", handleUserKeyPress);
    });
}

/** 格式時間 */
function formatToTimeText(time) {
    return [
        time.getHours(),
        time.getMinutes(),
        time.getSeconds(),
    ].map(n => n < 10 ? `0${n}` : n).join(":");
}
