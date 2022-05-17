<?php
include ("includes/header.php");
// Grab inputs
$page = $_GET[page];
if ($page=="") {
	include("index.html"); 
} else { include ("$page".".php"); } 
include ("includes/footer.php");
?>
