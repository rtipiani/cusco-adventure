<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@cuscoadventuretravelperu.com, reservascatravelperu@gmail.com";
    $subject = "Nuevo mensaje desde el formulario web";
    $body = "
    Nombre: $name\n
    Correo: $email\n
    Teléfono: $phone\n
    Mensaje:\n$message
    ";
    $headers = "From: no-reply@cuscoadventuretravelperu.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
