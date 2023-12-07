<?php
require_once './PDO.php';
// get 
$limit = $_GET["limt"];
$query = $_GET["query"];
$rq = "SELECT cast, title FROM `movies_full` WHERE cast LIKE '%query%' LIMIT 0,$limit";
$request = $pdo->prepare($rq);
$request->execute();
$results = $request->fetchAll();
echo json_encode($results);
