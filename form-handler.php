<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_body = "User Name: $name.\n".
"User Email: $visitor_email.\n".
"User Subject: $subject.\n".
"User Message: $message .\n";

$to = 'sahilsundaiit@gmail.com';

$headers = "From: $visitor_email \r\n";

$headers .= "Reply-To: $to \r\n";

mail($to,$subject,$email_body,$headers);

header("Location: contact.html")


 ?>
