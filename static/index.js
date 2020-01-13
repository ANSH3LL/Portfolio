HesGallery.setOptions({
    disableScrolling: true,
    hostedStyles: false,
    animations: true,
    showImageCount: true,
    wrapAround: true
});

var width = $(window).width();
try{
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){
    modal.style.display = "none";
    }
    window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
    }
}catch(err){
    console.log("");
}

window.onscroll = function(){
    if ((width >= 1000)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            $("#header").css("background","#e7e7e7");
            $("#header").css("color","#000");
            $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding","4vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid #6f23ff");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }else{
            $("#header").css("background","transparent");
            $("#header").css("color","#fff");
            $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding","6vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid #fff");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }
    }
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event){
      if (this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({scrollTop: $(hash).offset().top - 50}, 700);
       }
      });
  });
