$(document).ready(function(){

    var toggleMainButton = true;
    var slideCount = $('#slider div.slides div.slide').length;
    var slideWidth = $('#slider div.slides div.slide').width();
    var slideHeight= $('#slider div.slides div.slide').height();
    var totalWidth = slideCount * slideWidth;
        
    $('#slider').css({width: slideWidth, height: slideHeight});
    $('#slider div.slides').css({width: totalWidth, marginLeft: - slideWidth});
    $('#slider div.slides div.slide:last-child').prependTo('#slider div.slides');

    $('#left').click(function(){
        $('#slider div.slides').animate({
            left: + slideWidth
        }, 1000, function(){
            $('#slider div.slides div.slide:last-child').prependTo('#slider div.slides');
            $('#slider div.slides').css('left','');
        });
    });

    $('#right').click(function(){
        $('#slider div.slides').animate({
            left: - slideWidth
        }, 1000, function(){
            $('#slider div.slides div.slide:first-child').appendTo('#slider div.slides');
            $('#slider div.slides').css('left','');
        });
    });
});

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}