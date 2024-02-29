<?php
include_once('koneksi.php');

try {
  // Get data
  $custId = $_POST['custId'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $alamat = $_POST['alamat'];

  // Update record customer
  $sql = "UPDATE customer SET nama = :name, email = :email, alamat = :alamat WHERE cust_id = :custId";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':alamat', $alamat);
  $stmt->bindParam(':custId', $custId);
  $stmt->execute();
} catch (PDOException $e) {
  echo "Error updating customer record: " . $e->getMessage();
} finally {
  $conn = null; // Close the connection
}
?>