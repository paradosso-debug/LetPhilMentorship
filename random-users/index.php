<?php
echo "helo world"
$xml = file_get_contents("http://www.example.com/file.xml");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    const j = <? $xml ?>
  </script>
</body>
</html>