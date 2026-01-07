<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "khanfarhan7788khan@gmail.com"; // 👈 apna email daalo
  $subject = "New Contact Message - Portfolio";

  $body = "
  Name: $name\n
  Email: $email\n
  Message:\n$message
  ";

  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
  } else {
    echo "<script>alert('Message failed to send'); window.history.back();</script>";
  }
}
?>
