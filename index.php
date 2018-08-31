<?php
    // обязательнвй поля Name и Email
    if (!isset($_POST['Name']) || !isset($_POST['Email'])) {
        echo json_encode(array('rs' => 0, 'message' => "Введите Имя и Email"));
        return;
    }

    $name = htmlspecialchars($_POST["Name"]);
    $email = htmlspecialchars($_POST["Email"]);

    echo json_encode(array('rs' => 1, 'message' => "Уважаемый ".$name."! Ваша заявка успешно отправлена!"));
    return;
