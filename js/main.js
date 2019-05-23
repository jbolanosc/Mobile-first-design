$("view-work").on("click", function(){
    const images = $('#images').position().top;

    $("body, html").animate({
        scrollTop: images
    },
    900
    
    );
});