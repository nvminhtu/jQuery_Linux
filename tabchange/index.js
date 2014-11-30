$(window).ready(function() {
	// jQuery('.tabs .tab-links a').on('click', function(e)  {
 //       //  var currentAttrValue = jQuery(this).attr('href');
 
 //       //  // Show/Hide Tabs
 //       //  jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
 //       //  // Change/remove current tab to active
 //       //  jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
 //       // //e.preventDefault();

 //    });
 //    $('.tabs .tab-links a').bind({
	// 	"click": function() {
	// 		// Do something on click
	// 		alert('clicked');
	// 	},
	// 	mouseenter: function() {
	// 		// Do something on mouseenter
	// 	}
	// });
	$(".tabs .tab-links a").bind("click",function(){
  		alert("The paragraph was clicked.");
	});
});