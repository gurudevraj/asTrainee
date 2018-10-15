<?php
require_once('sql.php');
$query="insert into ticket values(?,?,?,?,?,?)";
$stmt=@mysqli_prepare($dbc,$query);
$s_no= $_POST["sno"];
	$name=$_POST["name"];
	$age=$_POST["age"];
	$from=$_POST["from"];
	$to=$_POST["to"];
	$date=$_POST["date"];
mysqli_stmt_bind_param($stmt,"isisss",$s_no,$name,$age,$from,$to,$date);
mysqli_stmt_execute($stmt);
$affected_rows= mysqli_stmt_affected_rows($stmt);
if($affected_rows==1)
{
	echo "ticket booked successfully<br>";
	mysqli_stmt_close($stmt);
	mysqli_close($dbc);
}	
else{
		echo ' Error Occured </br>';
		echo mysqli_error();
		mysqli_stmt_close($stmt);
		mysqli_close($dbc);
	}


?>