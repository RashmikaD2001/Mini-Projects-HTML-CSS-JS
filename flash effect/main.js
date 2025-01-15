let pageTitle = document.title;
let pageTitleTimeout;

const startPageTitleFlashing = () => {
    pageTitleTimeout = setInterval(function(){
        document.title = document.title === pageTitle ? "Live Sale!!!" : pageTitle;
    }, 1000);
}


window.addEventListener("load", startPageTitleFlashing);