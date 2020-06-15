
$(".appContainer").hover(function(){
    var image = $(this).data("image")
    console.log(image)
    var picDiv = $("<img>")
    picDiv.attr("src", 'images/' + image + '.png')
    picDiv.addClass("image")
    $("#imageDiv").empty();
    $("#imageDiv").append(picDiv);
}, function() {
    $("#imageDiv").empty();
    var picDiv = $("<img>")
    picDiv.attr("src", "images/allPics.png")
    picDiv.addClass("image")
    $("#imageDiv").append(picDiv);
});
