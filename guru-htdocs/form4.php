<?php
	$name= $_POST["sno"];
	require_once('sql.php');
	$query="select * from ticket where s.no='$name'";
	
	$res=@mysqli_query($dbc,$query);
	if($res)
	{
			echo"employee details:<br>";
			while($row=mysqli_fetch_array($res))
			{
				echo '<table border="1" style="width:100%"><tr><th>S no.</th><th>name</th><th>Date of journey</th><th>from</th><th>to</th></tr><tr><td> '.$row['s.no'].'</td>'.
				'<td>'.$row[''].'</td>'.
				'<td>'.$row['dob'].'</td>'.
				'<td>'.$row['address'].'</td></tr></table>';
			}
			
	}
	else
	{
		echo "couldn't issue db query";
		echo mysqli_error($dbc);
	}
	mysqli_close($dbc);
	
?>