
$(function(){
	var classname1,classname2,img;
	


	function mouse_in(classname1, classname2){
		
		$(classname1).attr("src", img.src);
	
		$(classname2).css({"border-top": "10px solid red",
						  "margin-top": "0px",
						  "padding-top": "0px"});
			
	}
	
	function mouse_out(classname1,classname2){
		$(classname1).attr("src", "images/pros.png");
			$(classname2).css({"border-top": "none",
						  "margin-top": "3px",
						  "padding-top": "7px"});
	}
	$(".jq_block--right__elem__map__area--janell").on({
		mouseenter: function(){
			img.src = "images/pro_1.png";
			mouse_in('.jq__block--right__elem__img--pros','.block--footer__block--janell');
			
		},
		mouseleave: function(){
			
			mouse_out('.jq__block--right__elem__img--pros','.block--footer__block--janell');
		}
	});
	
	$(".jq_block--right__elem__map__area--tippi").on({
		mouseenter: function(){
			img.src = "images/pro_2.png";
			mouse_in('.jq__block--right__elem__img--pros','.block--footer__block--tippi');
			
		},
		mouseleave: function(){
			
			mouse_out('.jq__block--right__elem__img--pros','.block--footer__block--tippi');
		}
	});
	
	$(".jq_block--right__elem__map__area--ian").on({
		mouseenter: function(){
			img.src = "images/pro_3.png";
			mouse_in('.jq__block--right__elem__img--pros','.block--footer__block--ian');
			
		},
		mouseleave: function(){
			
			mouse_out('.jq__block--right__elem__img--pros','.block--footer__block--ian');
		}
	});
	
	$(".jq_block--right__elem__map__area--allen").on({
		mouseenter: function(){
			img.src = "images/pro_4.png";
			mouse_in('.jq__block--right__elem__img--pros','.block--footer__block--allen');
			
		},
		mouseleave: function(){
			
			mouse_out('.jq__block--right__elem__img--pros','.block--footer__block--allen');
		}
	});
	
	$(".jq_block--right__elem__map__area--ric").on({
		mouseenter: function(){
			img.src = "images/pro_5.png";
			mouse_in('.jq__block--right__elem__img--pros','.block--footer__block--ric');
			
		},
		mouseleave: function(){
			
			mouse_out('.jq__block--right__elem__img--pros','.block--footer__block--ric');
		}
	});
	
/* landing page : janell*/
	
	function mouse_in_product(classname1, classname2){
		
		$(classname1).css("color", "#f6153d");
	
		$(classname2).css({"transform": "scale(1.1)",
							"delay":"2000"} );
			
	}
	function mouse_out_product(classname1, classname2){
		
		$(classname1).css("color", "#000000");
	
		$(classname2).css("transform", "scale(1)" );
			
	}
	
	$(".jq_table__elem__block__elem_b1, .jq_table__row2__td__elem--img3").on({
		mouseenter: function(){
			mouse_in_product('.jq_table__elem__block__elem_b1','.jq_table__row2__td__elem--img3');
			
		},
		mouseleave: function(){
			mouse_out_product('.jq_table__elem__block__elem_b1','.jq_table__row2__td__elem--img3');
		}
	});
	$(".jq_table__elem__block__elem_b2, .jq_table__row2__td__elem--img2").on({
		mouseenter: function(){
			mouse_in_product('.jq_table__elem__block__elem_b2','.jq_table__row2__td__elem--img2');
			
		},
		mouseleave: function(){
			mouse_out_product('.jq_table__elem__block__elem_b2','.jq_table__row2__td__elem--img2');
		}
	});
	
	$(".jq_table__elem__block__elem_b3, .jq_table__row2__td__elem--img1").on({
		mouseenter: function(){
			mouse_in_product('.jq_table__elem__block__elem_b3','.jq_table__row2__td__elem--img1');
			
		},
		mouseleave: function(){
			mouse_out_product('.jq_table__elem__block__elem_b3','.jq_table__row2__td__elem--img1');
		}
	});

/* landing page : tippi, allen, ric*/


	
	$(".block__elem__b, .jq_block__elem__img").on({
		mouseenter: function(){
			mouse_in_product('.block__elem__b',' .jq_block__elem__img');
			
		},
		mouseleave: function(){
			mouse_out_product('.block__elem__b',' .jq_block__elem__img');
		}
	});


/*landing page : ian */


	
	$(".block__elem__b1, .jq_block__elem__img1").on({
		mouseenter: function(){
			mouse_in_product('.block__elem__b1',' .jq_block__elem__img1');
			
		},
		mouseleave: function(){
			mouse_out_product('.block__elem__b1',' .jq_block__elem__img1');
		}
	});
	
	$(".block__elem__b2, .jq_block__elem__img2").on({
		mouseenter: function(){
			mouse_in_product('.block__elem__b2',' .jq_block__elem__img2');
			
		},
		mouseleave: function(){
			mouse_out_product('.block__elem__b2',' .jq_block__elem__img2');
		}
	});
});