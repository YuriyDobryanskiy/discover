<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    // Перевірка даних
    if (empty($firstName) || empty($lastName) || empty($email) || empty($phone)) {
        echo "error: Поля мають бути заповнені.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error: Неправильний формат електронної пошти.";
    } else {
        // Всі перевірки успішні
        echo "success: Дані успішно перевірені та оброблені.";
    }
}
?>