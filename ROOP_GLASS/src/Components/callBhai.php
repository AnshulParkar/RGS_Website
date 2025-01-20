<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'anshulfarcadesystems@gmail.com'; // Email address
    $mail->Password = 'vygb tmzz rzkq qifm';   // App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('anshulfarcadesystems@gmail.com', 'RGS');
    $mail->addAddress('anshulparkar@gmail.com', 'Anshul Parkar'); // Add a recipient

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Subject';
    $mail->Body    = 'This is a test email.';

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo "Failed to send email. Error: {$mail->ErrorInfo}";
}
?>
