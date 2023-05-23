document.addEventListener("DOMContentLoaded", function() {
    var pages = document.querySelectorAll(".stacked-page");
    var currentPage = 0;

    window.addEventListener("scroll", function() {
    var threshold = currentPage * window.innerHeight;
    if (window.pageYOffset > threshold) {
        pages[currentPage].style.opacity = "1";
        currentPage++;
        }
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()){
        $("nav").addClass("background");
    }
    else{
        $("nav").removeClass("background");
    }
})