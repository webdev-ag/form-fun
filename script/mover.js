
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
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    function onMouseOver(ev) {
        const newPos = randomPositionInField(width, height);
        el.style.top = `${randomIntBetween(0, maxHeight - el.offsetHeight)}px`;
        el.style.left = `${randomIntBetween(0, maxWidth - el.offsetWidth)}px`;
    }

    el.addEventListener('mouseover', onMouseOver);
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
