$(document).ready(function(){
    $(".nav-button").click(function(){
        $(".nav-button").toggleClass("change");
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position > 200) {
            $(".nav-menu").addClass("custom-navbar");
        }
        else {
            $(".nav-menu").removeClass("custom-navbar");
        }
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        if(position >= 650) {
            $(".camera-img").addClass("fromLeft");
            $(".mission-text").addClass("fromRight");
        }
        else {
            $(".camera-img").removeClass("fromLeft");
            $(".mission-text").removeClass("fromRight");
        }
    });
    $(".list-text").click(function() {
        let value = $(this).parent().attr("data-filter");
        if(value === "all") {
            $(".filter").show(300);
        }
        else {
            $(".filter").not("." + value).hide(300);
            $(".filter").filter("." + value).show(300);
        }
    });
    $(".list-text").click(function() {
        $(".list-text").removeClass("active-item");
        $(this).addClass("active-item");
    });
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 4000) {
            $(".card-1").addClass("moveFromLeft");
            $(".card-2").addClass("moveFromBottom");
            $(".card-3").addClass("moveFromRight");
        }
        else {
            $(".card-1").removeClass("moveFromLeft");
            $(".card-2").removeClass("moveFromBottom");
            $(".card-3").removeClass("moveFromRight");
        }
    }); 
});































