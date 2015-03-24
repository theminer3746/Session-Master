function startLongTimer(){
	<?php
		$sql = "INSERT INTO visit (start_timestamp) VALUES (Date('U'))";

		if ($conn->query($sql) === TRUE) {
			echo "New record created successfully";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	?>
	var sec = 1;
	var secCount = function(){
		if(document.hidden){
			return;
		}
		console.log(sec);
		sec++;
	};
	
	setInterval(secCount, 1000);
	
	window.addEventListener("unload",unload());
}