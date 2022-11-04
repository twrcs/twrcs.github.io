$(document).ready(function() {    
    $('#tabment li a:not(:first)').addClass('inactive');
    $('.main-content').hide();
    $('.main-content:first').show();
    $('#tabment li a').click(function() {
        var t = $(this).attr('id');
        if($(this).hasClass('inactive')){ //this is the start of our condition 
            $('#tabment li a').addClass('inactive');           
            $(this).removeClass('inactive');
            $('.main-content').hide();
            $('#'+ t + 'C').show();
        }
    });

    $('.expandable span').click(function() {
        $('.expandable span').each(function() {
            $(this).siblings(".nested").hide();
            $(this).removeClass("active");
        });
        $(this).siblings(".nested").toggle();
        $(this).toggleClass("active");
    });

    var list = "cock,c0ck,chink,chingchong,fagg0t,faggot,nigger,nigga,n1gger,n1gga,nig,ch1nk,kneegrow,negro,kneegro,pussy,retard,retarded,cum,sex,seggs,segs,sexx,seex,ssex,secks,seks,c@ck,cumm,ccum,penis,p3nis,pen1s,p3n1s,dick,dyke,cunt,kkk";
    var array = list.split(",");
    $.each(array,function(i){
        $(".banned-words").append("<span>" + array[i] + "</span>");
    });
});
