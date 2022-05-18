<?php
// forum.php: Forum...
?>
			<h1>Welcome to your forum</h1>
			<h2>Post a message bellow:</h2>
			<form name=posttoforumform method=POST action="<?php echo $_SERVER['SCRIPT_NAME'] . "?" . $_SERVER['QUERY_STRING']?>">
				<!--<p><input type="text" name="user_name" size="20"></p> -->
				<p><textarea rows="5" cols="80" name="input_from_form" size="20"></textarea></p>
				<p><input type="submit" value="Submit" name="Submit_button"></p>
			</form>

<?php
// Grab inputs
$inputfromform = mysql_real_escape_string($_REQUEST["input_from_form"]);
$showonlyuser =  $_REQUEST["show_only_user"];

if ($inputfromform  <> "") {
	$query = "INSERT INTO forum_table(poster_name, comment, date) VALUES ('".
		$user->username . "', '".
		$inputfromform  . "', " .
		" now() )";

$result = execute_query($query);
}

$query  = "SELECT * FROM forum_table 
		ORDER BY date DESC
		LIMIT 0 , 100";
		
$result = execute_query($query);

echo '			<h1>Previous Posts:</h1>';
while($row = mysql_fetch_array($result, MYSQL_ASSOC))
{
echo "			<p><h2>{$row['poster_name']} </b>({$row['date']}):</h2><p>{$row['comment']}</p>";
}
echo "			<p>\n";
?>
