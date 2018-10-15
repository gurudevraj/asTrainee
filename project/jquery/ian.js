$(function(){
	
	$(".block__elem__b1, .jq_block__elem__img1").on({
		mouseenter: function(){
			$(".block__elem__b1").css("color", "#f24462");
			$(".jq_block__elem__img1").css("transform", "scale(1.2)" );
			
		},
		mouseleave: function(){
			$(".block__elem__b1").css("color", "black");
			$(".jq_block__elem__img1").css("transform", "scale(1)" );
		}
	});
	
	$(".block__elem__b2, .jq_block__elem__img2").on({
		mouseenter: function(){
			$(".block__elem__b2").css("color", "#f24462");
			$(".jq_block__elem__img2").css("transform", "scale(1.2)" );
			
		},
		mouseleave: function(){
			$(".block__elem__b2").css("color", "black");
			$(".jq_block__elem__img2").css("transform", "scale(1)" );
		}
	});
	

});