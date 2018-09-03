<?php
    // обязательные поля name и email
    if (!isset($_POST['name']) || !trim($_POST['name'])) {
        echo json_encode(array('rs' => 0, 'message' => "Введите Имя"));
        return;
    }
    if (!isset($_POST['email']) || !trim($_POST['email'])) {
        echo json_encode(array('rs' => 0, 'message' => "Email"));
        return;
    }

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);

    echo json_encode(array('rs' => 1, 'message' => "Уважаемый ".$name."! Ваша заявка успешно отправлена!"));
    return;
