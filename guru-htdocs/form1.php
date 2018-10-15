<html>
<body>

<?php

		
	session_start();
	if ($_SERVER["REQUEST_METHOD"] == "POST")
		{
			$_SESSION["name"] = $_POST["name"];
				
				 if (empty($_POST["name"])) {
					echo 'please enter your name';
					
				 }
						else 
						{
							header('Location:http://localhost/guru/form2.php');
						}	
				
		}						
							
?>
<form action="http://localhost/guru/form1.php" method="post">
					Name:<input type="text" name="name"></input>
					<input type="submit" value="submit"></input>
					</form>
					
					</body>
					</html>