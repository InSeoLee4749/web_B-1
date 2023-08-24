$(document).ready(function(){

    setInterval(function(){
        $(".slide-wrapper").animate({"marginTop" : -300},300,function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-top",0)
        })
    },3000)
    
    // 탭분리형에서는 필요없음
    // $(".tabbox h2").click(function(){
    //     $(this).parent("li").addClass("act").siblings().removeClass("act")
    // })

    $(".notice li").eq(0).click(function(){
        $(".pop").addClass("show")
    })
    $(".pop button").click(function(){
        $(".pop").removeClass("show")
    })
})