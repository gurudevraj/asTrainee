<?php
	define('DB_USER','guru');
	define('DB_PASSWORD','password!23');
	define('DB_HOST','localhost');
	define('DB_NAME','test1');
	
	$dbc=@mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME)
	or die('could not connect to mysql. '.mysqli_connect_error());
	?>