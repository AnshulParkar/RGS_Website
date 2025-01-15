<?php
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $name = htmlspecialchars($_POST['name']);
//     $phone = htmlspecialchars($_POST['phone']);
//     $message = htmlspecialchars($_POST['message']);

//     $to = 'anshulparkar@gmail.com'; // Replace with your email address
//     $subject = 'Callback Request from ' . $name;
//     $body = "Name: $name\nPhone: $phone\nMessage: $message";
//     $headers = "From: anshulfarcadesystems@gmail.com\r\n";

//     if (mail($to, $subject, $body, $headers)) {
//         echo 'success';
//     } else {
//         echo 'error';
//     }
// } else {
//     http_response_code(405);
//     echo 'Method Not Allowed';
// }
