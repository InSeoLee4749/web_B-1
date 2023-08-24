$(document).ready(function(){
    var count =0;
    setInterval(function(){
        count++;
        count %= 3;

        $(".slide-wrapper div").eq(count).addClass('opa').siblings().removeClass('opa')

       
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