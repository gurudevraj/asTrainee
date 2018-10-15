<?php
	require_once('sql.php');
	$query="select * from sample";
	$res=@mysqli_query($dbc,$query);
	if($res)
	{
			echo"employee details:<br>";
			while($row=mysqli_fetch_array($res))
			{
				echo 'ID :'.$row['emp_id'].'<br>'.
				'name:'.$row['emp_name'].'<br>'.
				'DOB :'.$row['dob'].'<br>'.
				'Address :'.$row['address'].'<br>';
			}
			echo '--------------';
	}
	else
	{
		echo "couldn't issue db query";
		echo mysqli_error($dbc);
	}
	mysqli_close($dbc);
	
?>
	