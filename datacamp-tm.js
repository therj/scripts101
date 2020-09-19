// ==UserScript==
// @name         Datacamp Access
// @namespace    https://github.com/therj/scripts101/datacamp-tm.js
// @updateURL    https://raw.githubusercontent.com/therj/scripts101/master/datacamp-tm.js
// @downloadURL  https://raw.githubusercontent.com/therj/scripts101/master/datacamp-tm.js
// @version      2.1
// @description  Try to take over the world!
// @author       Rabin
// @match        https://campus.datacamp.com/courses/*
// @include      http?://campus.datacamp.com/courses/*
// @grant        none
// ==/UserScript==
(() => {
    async function mother() {
        let sleepDuration = 50
        while (true) {
            console.log('Datacamp Access v2.1')
            await sleep(sleepDuration)
            const modal = getModal()
            if (modal && modal.childElementCount) {
                removeModal()
                sleep(sleepDuration * 100)
            }
        }

        function removeModal() {
            const el = document.querySelector(`#root .modal-container`)
            el ? el.innerHTML = '' : null;

        }

        function getModal() {
            const modal = document.querySelector(`#root .modal-container`)
            if (document.querySelector(`#root .modal-container iframe`)) return modal
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }

    mother();

})();
