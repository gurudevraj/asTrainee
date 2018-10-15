<?php

function Palin($string){  
    if (strrev($string) == $string){  
        return true;  
    }
    else{
        return false;
    }
}  
 
$x = "appa";
if(Palin($x)){  
    echo "Palindrome";  
} 
else {  
echo "Not a Palindrome";  
}
?>  
