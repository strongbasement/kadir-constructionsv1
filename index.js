$(".c4").hide();
$(".ctext").hide().fadeIn(2000);
var inw=window.innerWidth;
$(".lupa").attr("width",inw);
$(".lupa").attr("fontSize",inw/6);
$(".ctext").fadeOut(2000);
setTimeout(()=>{
    $(".c4").hide().fadeIn(2000);
},4000);




