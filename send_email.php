<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "emilia.puutonen@gmail.com";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array("message" => "Email sent successfully."));
    } else {
        echo json_encode(array("message" => "Email sending failed."));
    }
}
?>
