const titles = document.getElementsByClassName('title');
const backgroundColor = [174, 135, 186];
const backgroundDiff = [-129, 28, -9];

let viewX = window.innerWidth;
let viewY = window.innerHeight;
const tan = Math.tan(Math.PI/4);
const sine = Math.sin(Math.PI/4);

const z = tan * (viewX/2);
const ah = (viewY/2 - z);
const a = sine * ah;
const hiddenGradientLineLength = (viewX/2) / sine;
const gradientLineLength = 2*hiddenGradientLineLength + 2*a;

const backgroundInc = [backgroundDiff[0]/gradientLineLength, backgroundDiff[1]/gradientLineLength, backgroundDiff[2]/gradientLineLength];


const updateTitles = () => {
    for(const title of titles) {
        const elLoc = title.getBoundingClientRect();
        const gStart = (gradientLineLength/2) + (elLoc.top - elLoc.left);
        const gEnd = (gradientLineLength/2) + (elLoc.bottom - elLoc.right);
        const colorVals = [
                [174 + (gStart * backgroundInc[0]), 135 + (gStart * backgroundInc[1]), 186 + (gStart * backgroundInc[2])],
                [174 + (gEnd * backgroundInc[0]), 135 + (gEnd * backgroundInc[1]), 186 + (gEnd* backgroundInc[2])]
                          ];
        title.style.background = `-webkit-linear-gradient(45deg, rgb(${colorVals[0][0]}, ${colorVals[0][1]}, ${colorVals[0][2]}), 
                                  rgb(${colorVals[1][0]}, ${colorVals[1][1]}, ${colorVals[1][2]}))`;
        title.style.webkitBackgroundClip = text;
        title.style.webkitTextFillColor = transparent;
    }
}


document.onscroll = updateTitles;