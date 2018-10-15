<?php
	
	require_once('sql.php');
	$query="insert into sample values(?,?,?,?,?,?)";
	$stmt=@mysqli_prepare($dbc,$query);
	$s_no= $_POST["e_id"];
	$name=$_POST["e_name"];
	$age=$_POST["dob"];
	$from=$_POST["address"];
	$to=$_POST["address"];
	$date=$_POST["address"];
	mysqli_stmt_bind_param($stmt,"isisss",$s_no,$name,$age,$from,$to,$date);
	mysqli_stmt_execute($stmt);
	$aff_rows=mysqli_stmt_affected_rows($stmt);
	if($aff_rows==1)
	{
	
			echo"ticket booked successfully<br>";
			mysqli_stmt_close($stmt);
			mysqli_close($dbc);
			echo '--------------';
	}
	
	
	else{
		echo 'error occured';
		echo mysqli_error();
		mysqli_stmt_close($stmt);
		mysqli_close($dbc);
	}
?>
	