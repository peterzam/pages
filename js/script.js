document.styleSheets[0].insertRule(
    `.sec-mv .mv-blk h2 span::after { content: "|"; animation: blink 1s step-end infinite;}`,
    document.styleSheets[0].cssRules.length
);

let textArray = [
    "Coding",
    "Developing",
    "Problem Solving",
    "Creating",
    "Debugging",
    "Experimenting",
    "Automation",
    "Open-source",
    "Integrating",
    "Implementing",
    "Maintaining",
    "Refactoring",
    "Deploying",
    "Scaling",
    "Architecting",
    "Prototyping",
].sort( () => .5 - Math.random() );

const element = document.querySelector(".sec-mv .mv-blk h2 span");

function typeTextArray(arrayIndex, textIndex, isAppend) {
    setTimeout(
        function () {
            element.innerText = textArray[arrayIndex].slice(0, textIndex);
            if (isAppend) {
                if (textIndex > textArray[arrayIndex].length) {
                    isAppend = false;
                    setTimeout(function () {
                        typeTextArray(arrayIndex, textIndex, isAppend);
                    }, 256);
                    return;
                } else {
                    textIndex++;
                }
            } else {
                if (textIndex === 0) {
                    isAppend = true;
                    arrayIndex = (arrayIndex + 1) % textArray.length;
                } else {
                    textIndex--;
                }
            }
            typeTextArray(arrayIndex, textIndex, isAppend);
        },
        isAppend ? 128 : 64
    );
}

(window.onload = particlesJS.load(
    "particles-js",
    "./assets/particlesjs-config.json"
)),
    typeTextArray(0, 0, true);
