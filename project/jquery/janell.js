$(function(){
	
	$(".jq_table__elem__block__elem_b1, .jq_table__row2__td__elem--img3").on({
		mouseenter: function(){
			$(".jq_table__elem__block__elem_b1").css("color", "#f6153d");
			$(".jq_table__row2__td__elem--img3").css("transform", "scale(1.1)" );
			
		},
		mouseleave: function(){
			$(".jq_table__elem__block__elem_b1").css("color", "black");
			$(".jq_table__row2__td__elem--img3").css("transform", "scale(1)" );
		}
	});
	
	$(".jq_table__elem__block__elem_b2, .jq_table__row2__td__elem--img2").on({
		mouseenter: function(){
			$(".jq_table__elem__block__elem_b2").css("color", "#f6153d");
			$(".jq_table__row2__td__elem--img2").css("transform", "scale(1.1)" );
			
		},
		mouseleave: function(){
			$(".jq_table__elem__block__elem_b2").css("color", "black");
			$(".jq_table__row2__td__elem--img2").css("transform", "scale(1)" );
		}
	});
	
	$(".jq_table__elem__block__elem_b3, .jq_table__row2__td__elem--img1").on({
		mouseenter: function(){
			$(".jq_table__elem__block__elem_b3").css("color", "#f6153d");
			$(".jq_table__row2__td__elem--img1").css("transform", "scale(1.1)" );
			
		},
		mouseleave: function(){
			$(".jq_table__elem__block__elem_b3").css("color", "black");
			$(".jq_table__row2__td__elem--img1").css("transform", "scale(1)" );
		}
	});
	
	
});