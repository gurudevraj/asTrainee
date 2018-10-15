<?php
$name = array("guru"=>"10", "dev"=>"17", "raj"=>"20");
$x=count($name);
echo $x;
$n=0;
foreach($name as $a)
{
	if($n==1)
		echo '<br>',$a;
$n++;
}

foreach($name as $a)
{
	
		echo '<br>',$a;
$n++;
}


?>