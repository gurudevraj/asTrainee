<?php
$array1 = array(0 => 'sun', 1 => 'moon', 2 => 'star');
$array2 = array(0 => 'milkiway', 1 => 'antromoda', 2 => 'universe');
$union = array_merge($array1, $array2);
if($array1!=$array2)
{
var_dump($union);
foreach($union as $a)
{
	
		echo '<br>',$a;

}

}
?>