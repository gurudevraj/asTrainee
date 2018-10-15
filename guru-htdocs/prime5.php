<?php 
$x=20

 for($num = 1;$num<=$x;$num++){

      

         for($i=2;$i<=$num/2;$i++){
             if($num%$i==0){
                 $count++;
                 break;
             }
        }
        
         if($count==0)
             echo '<br>',$x,'is a prime number';break;
    }
	?>