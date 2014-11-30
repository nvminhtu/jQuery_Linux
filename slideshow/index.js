var imageWidth= 600;
$(window).ready(function(){
	var curImage = 0;
	var allImages = $('#slideshow li img').length;

	//setup frame for slideshow
	$frameWidth = allImages * imageWidth;
	$('#slideshow ul').width(allImages*imageWidth);

	//click event to slideshow buttons
	$('.next').click(function() {
		curImage++;
		if(curImage>=allImages) curImage = 0;
		setFramePosition(curImage);
	});
	$('.prev').click(function(event) {
		curImage--;
		if(curImage<0) curImage= allImages-1;
		setFramePosition(curImage);
	});
});
function setFramePosition(pos)
{
	var desTo = imageWidth*pos*-1;
	$('#slideshow ul').animate({
		left: desTo},300);
}