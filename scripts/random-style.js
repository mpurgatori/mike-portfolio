const magicWand = document.getElementById("wand");
const mainElement = document.getElementsByTagName("main")[0];
const navbar = document.getElementById("navbar");
const linkElememts = document.getElementsByClassName("fab");
const portfolioItems = document.getElementsByClassName("portfolio-item");
const portfolioAnchors = document.getElementsByClassName("portfolio-anchor");

const downloadAnchor = document.getElementById("resume-download");

let currentColor = '';


const changeColor = () => {

    const colorCombos = [['#43A047', '#FAFAFA'], ['#485564', '#FAFAFA'], ['#303F9F', '#FAFAFA'], ['#AF3D4E', '#FAFAFA'], ['#FAFAFA', '#0277BD'], ['#FFEB3B', '#1E1E1E']];
    const colorPaletteIndex = Math.floor(Math.random() * colorCombos.length);
    const colorPalette = colorCombos[colorPaletteIndex];
    if (currentColor.toString() === colorPalette.toString())
    {
        changeColor();
    }
    else 
    {
        currentColor = colorPalette;
        const backgroundColorIndex = Math.floor(Math.random() * colorPalette.length);
        const backgroundColor = colorPalette[backgroundColorIndex];
        const fontColor = colorPalette[colorPalette.length - backgroundColorIndex - 1];
      
        const mainStyles = {
            background: backgroundColor,
            color: fontColor
        };
      
        const portfolioStyles = {
          background: fontColor,
          color: backgroundColor
      };
      
        const elementStyles = {
            color: fontColor
        };
    
        Object.assign(mainElement.style, mainStyles);
        Object.assign(navbar.style, mainStyles);
        Object.assign(downloadAnchor.style, {color:fontColor});
        Object.keys(linkElememts).forEach(function (key) {
            Object.assign(linkElememts[key].style, elementStyles)
        }); 
        Object.keys(portfolioItems).forEach(function (key) {
          Object.assign(portfolioItems[key].style, portfolioStyles)
        }); 
        Object.keys(portfolioAnchors).forEach(function (key) {
            Object.assign(portfolioAnchors[key].style, {color:backgroundColor})
          }); 
    }
}


magicWand.addEventListener('click', ()=> { 
    changeColor();
});



(function(count) {
    if (count < 5) {
        changeColor();
        const caller = arguments.callee; 
        setTimeout(function() {
            caller(count + 1);
        }, 500);    
    }
})(0);
