$(function(){
	
	$(".block__elem__b, .jq_block__elem__img").on({
		mouseenter: function(){
			$(".block__elem__b").css("color", "#f24462");
			$(".jq_block__elem__img").css("transform", "scale(1.2)" );
			
		},
		mouseleave: function(){
			$(".block__elem__b").css("color", "black");
			$(".jq_block__elem__img").css("transform", "scale(1)" );
		}
	});
	
	
	

});