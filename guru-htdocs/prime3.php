<?php 
$i=3;

for ( $count = 2 ; $count <=15 ;  )
   {
      for ( $c = 2 ; $c <= $i - 1 ; $c++ )
      {
         if ( $i%$c == 0 )
            break;
      }
      if ( $c == $i )
      {
         echo  '<br>',$i;
         $count++;
      }
     $i++;
   }
 ?>