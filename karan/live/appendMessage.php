<?php
$message = $_POST['message'];
$sender = $_POST['sender'];
$file = fopen('oldMessages.txt', 'a');
fwrite($file, "$sender: $message\n");
fclose($file);
?>