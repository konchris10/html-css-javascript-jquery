<?php

$_POST['email'];
$_POST['password'];

$array = array(
	"username" => "Michael",
	"email"    => "michael@zenbox.de",
	"last"     => "12.12.2012",
);

echo json_encode($array);