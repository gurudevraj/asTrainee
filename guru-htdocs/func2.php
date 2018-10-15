<?php
	function even($n){
		if($n%2==0){
			return true;}
		else
			return false;
	}
	$y=5;
	if(even($y)==true)
		echo 'it is a even number';
	else	
		echo 'it is a odd number';
	?>
	