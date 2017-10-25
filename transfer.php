<?php

// Estableshing connection to database:
//                    host ip    username  pw  name of db 
$db = mysqli_connect('127.0.0.1','root',   '', 'sdsu');
if (mysqli_connect_errno()) {
	echo "Data base connection failed with following errors: ".mysqli_connect_error();
	die();
}


$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$middleName = $_POST['middleName'];
$address = $_POST['address'];
$city = $_POST['city'];
$zipcode = $_POST['zipcode'];
$area_phone = $_POST['area_phone'];
$prefix_phone = $_POST['prefix_phone'];
$phone = $_POST['phone'];
$email = $_POST['email'];	


$inserted = $db->query("insert into runners values('$firstName','$lastName','$middleName','$address','$city','$zipcode','$area_phone','$prefix_phone','$phone','$email')");


if($inserted)
{
	echo "We got you!";
}
else{
	echo "something went wrong";
}
	

?>