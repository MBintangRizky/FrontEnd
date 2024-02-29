<?php
include_once('koneksi.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $custId = $_POST['custId'];

  try {

    $query = "DELETE FROM customer WHERE cust_id = :custId";
    $statement = $conn->prepare($query);
    $statement->bindParam(':custId', $custId);
    $statement->execute();


    echo json_encode(['status' => 'success', 'message' => 'Customer deleted successfully']);
  } catch (PDOException $e) {

    echo json_encode(['status' => 'error', 'message' => 'Error deleting customer: ' . $e->getMessage()]);
  }
} else {
  echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

$conn = null;
?>