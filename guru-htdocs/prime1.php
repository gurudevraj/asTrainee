<html>
<body>

<?php
	$x=0;
	for($i=1;$i<100;$i++)
	{
		
		for($j=2;$j<=$i;$j++)
		{ $temp = $i%$j;
			if($temp == 1){
			echo $j;
			}
		}
	}
?>

</body>
</html>