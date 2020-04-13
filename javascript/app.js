$(".image").hide();

$("#projectOneContainer").hover(function(){

        $("#foodFunImage").show();
    }, function() {
        $("#foodFunImage").hide();

});

$("#trainContainer").hover(function(){
    console.log("it's working")
    $("#trainImage").show();
}, function() {
    $("#trainImage").hide();

});

$("#triviaContainer").hover(function(){
    console.log("Working?")
    $("#triviaImage").show();
}, function() {
    $("#triviaImage").hide();

});