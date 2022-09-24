// document.querySelector('iframe').contentWindow.document.querySelector('.ytp-chrome-top, .ytp-show-cards-title').style.visibility = "hidden";

function preloaderFunction(){
    document.querySelector(".Rpreload").style.display = "none";
}

function removeTheme(){
    document.querySelector(".theme").style.display = "none";
}

function myFunction() {
    setTimeout(() => {
        preloaderFunction();
    }, 3150);
    console.log("hii");
    setTimeout(() => {
        removeTheme();
    }, 78000);
    }