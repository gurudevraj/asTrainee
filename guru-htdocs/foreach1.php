<?php 
$c = array("red", "green", "blue", "yellow"); 
$x=count($c);
echo $x;
$n=0;
foreach($c as $a)
{
	if($n==3)
		echo '<br>',$a;
$n++;
}
?>
