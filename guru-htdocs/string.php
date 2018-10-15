<?php
function append(&$str)
{
    $str .= 'and something extra.';
}
$s = "This is a string, ";
append($s);
echo $s;   
?>