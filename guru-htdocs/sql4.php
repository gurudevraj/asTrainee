<?php
	$name= $_POST["name"];
	require_once('sql.php');
	$query="select * from sample where emp_id='$name'";
	
	$res=@mysqli_query($dbc,$query);
	if($res)
	{
			echo"employee details:<br>";
			while($row=mysqli_fetch_array($res))
			{
				echo '<table border="1" style="width:100%"><tr><th>ID</th><th>name</th><th>DOB</th><th>Address</th></tr><tr><td> '.$row['emp_id'].'</td>'.
				'<td>'.$row['emp_name'].'</td>'.
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
	