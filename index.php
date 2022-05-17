<?php
include ("includes/header.php");
// Grab inputs
$page = $_GET[page];
if ($page=="") {
	include("home.html"); 
} else { include ("$page".".php"); } 
include ("includes/footer.php");
?>