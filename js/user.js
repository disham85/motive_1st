$(document).ready(function(){
    $('.humb').click(function(){
       $('.top ul').toggleClass('active'); 
    });
    $('.searchButton').click(function(){
        $('.search').toggleClass('active');    
    });
});