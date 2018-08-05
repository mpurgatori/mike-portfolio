

  const colorCombos = [['#43A047', '#FAFAFA'], ['#485564', '#FAFAFA'], ['#303F9F', '#FAFAFA'], ['#AF3D4E', '#FAFAFA'], ['#FAFAFA', '#0277BD'], ['#FFEB3B', '#1E1E1E']];
  const mainElement = document.getElementsByTagName("main")[0];
  const linkElememts = document.getElementsByClassName("fab");

  const portfolioItems = document.getElementsByClassName("portfolio-item");
  const magicWand = document.getElementById("wand");

  const colorPaletteIndex = Math.floor(Math.random() * colorCombos.length);
  const colorPalette = colorCombos[colorPaletteIndex];
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


const changeColor = () => {
    Object.assign(mainElement.style, mainStyles);
    Object.keys(linkElememts).forEach(function (key) {
        Object.assign(linkElememts[key].style, elementStyles)
    }); 
    Object.keys(portfolioItems).forEach(function (key) {
      Object.assign(portfolioItems[key].style, portfolioStyles)
  }); 
}


magicWand.addEventListener('click', ()=> { 
    changeColor();
});


changeColor();