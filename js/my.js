$(document).ready(function(){

    setInterval(function(){
        $(".slide-wrapper").animate({"marginLeft" : -1200},300,function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-left",0)
        })
    },3000)
    
    $(".tabbox h2").click(function(){
        $(this).parent("li").addClass("act").siblings().removeClass("act")
    })

    $(".notice li").eq(0).click(function(){
        $(".pop").addClass("show")
    })
    $(".pop button").click(function(){
        $(".pop").removeClass("show")
    })
})