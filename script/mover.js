
let maxWidth = 0;
let maxHeight = 0;

function initFun() {
    const moveElementSelector = '.move-me';
    const boardSelector = '#root';

    const movingElements = [];

    document
        .querySelectorAll(moveElementSelector)
        .forEach(el => { movingElements.push(el) });
    maxWidth = document.querySelector(boardSelector).offsetWidth;
    maxHeight = document.querySelector(boardSelector).offsetHeight;

    movingElements.forEach(el => attachHandler(el));
}

function attachHandler(el) {
    const githubLink = document.querySelector('#to-github');
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    /**
     * @param {Event} ev
     */
    function moveElement(ev) {
        const newPos = randomPositionInField(width, height);
        el.style.top = `${randomIntBetween(0, maxHeight - el.offsetHeight)}px`;
        el.style.left = `${randomIntBetween(0, maxWidth - el.offsetWidth)}px`;
    }

    /**
     * @param {Event} ev
     */
    function onFocus(ev) {
        ev.preventDefault();
        githubLink.focus();
        moveElement();
    }

    window.setTimeout(()=> {
        el.addEventListener('mouseover', moveElement);
        el.addEventListener('touch', moveElement);
        el.addEventListener('focusin', onFocus);
    }, 500)

}

function randomPositionInField(myWidth, myHeight) {
    const newPos = {
        x: randomIntBetween(0, maxWidth - myWidth),
        y: randomIntBetween(0, maxHeight - myHeight)
    };
    return newPos;
}

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
