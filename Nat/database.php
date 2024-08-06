$dbhost = 'localhost';
$dbuser = 'User';
$dbpass = 'pass';

$conn = mysql_connect($dbhost, $dbuser, $dbpass);

if (!$conn)
{
    die('Could not connect: ' . mysql_error());
}

if (!get_magic_quotes_gpc())
{
    $author = addslashes($_POST['author']);
    $mousepositions = addslashes($_POST['position']);
} else
{
    $author = $_POST['name'];
    $mousepositions = $_POST['position'];
}

var_dump($author);

$sql = "INSERT INTO Images (Author, Image) VALUES ('$author', '$mousepositions')";

mysql_select_db('db_to_use');
$retval = mysql_query($sql, $conn);

if (!$retval)
{
    die('Could not enter data: ' . mysql_error());
}

echo "Entered data successfully\n";
mysql_close($conn);