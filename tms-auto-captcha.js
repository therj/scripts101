// ==UserScript==
// @name         Nepse TMS Autofill Captcha
// @namespace    https://github.com/therj/scripts101/tms-auto-captcha.js
// @updateURL    https://raw.githubusercontent.com/therj/scripts101/master/tms-auto-captcha.js
// @downloadURL  https://raw.githubusercontent.com/therj/scripts101/master/tms-auto-captcha.js
// @version      0.0
// @description  Try to take over the world!
// @author       Rabin
// @match        https://tms49.nepsetms.com.np/login
// @grant        none
// ==/UserScript==
(() => {
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
    if(document.querySelector('#randomfield')) {
        observer.disconnect();

        const motherShip=()=>{
        const captchaValue = document.querySelector('#randomfield').value 
        const captchaField = document.querySelector("#captchaEnter")
        captchaField.value = captchaValue
        captchaField.classList.remove('ng-untouched')
        captchaField.classList.remove('ng-pristine')
        captchaField.classList.remove('ng-invalid')

        captchaField.classList.add('ng-dirty')
        captchaField.classList.add('ng-valid')
        captchaField.classList.add('ng-touched')
        }
        const refreshIcon = document.querySelector('a.refresh-icon')
        refreshIcon.addEventListener('click', motherShip)
    }
}

})();
