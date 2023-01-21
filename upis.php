<?php

include_once 'konekcija.php';

$a = $_POST['name1'];
$b = $_POST['name2'];
$t = $_POST['name3'];

$sql2 = "INSERT INTO lprofil(a, b, t) VALUES('$a', '$b', '$t');";
mysqli_query($conn,$sql2);

//header ("Location: index.php?signup=success");