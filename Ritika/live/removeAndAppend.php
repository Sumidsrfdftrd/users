<?php
$messages = file('messages.txt');
$firstFiveLines = array_slice($messages, 0, 1);
$remainingLines = array_slice($messages, 1);
file_put_contents('messages.txt', implode('', $remainingLines));
file_put_contents('oldMessages.txt', implode('', $firstFiveLines), FILE_APPEND);
?>