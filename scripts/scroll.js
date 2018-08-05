
//Anchor Points
const introSection = document.getElementById("introSection");
const aboutSection = document.getElementById("aboutSection");
const portfolioSection = document.getElementById("portfolioSection");

//Menu Buttons
const aboutMenu = document.getElementById("about-menu");
const portfolioMenu = document.getElementById("portfolio-menu");

//Arrow Buttons
const introArrow = document.getElementById("intro-arrow");
const aboutArrow = document.getElementById("about-arrow");
const portfolioArrow = document.getElementById("portfolio-arrow");



[aboutMenu, introArrow].forEach( button => {
    button.addEventListener('click', function() { 
        aboutSection.scrollIntoView({behavior: "smooth"});
     }, false);
});


[portfolioMenu, aboutArrow].forEach( button => {
    button.addEventListener('click', function() { 
        portfolioSection.scrollIntoView({behavior: "smooth"});
     }, false);
});


portfolioArrow.addEventListener('click', function() { 
    introSection.scrollIntoView({behavior: "smooth"});
 }, false);
