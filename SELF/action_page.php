<?php
// action_page.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $first_name = $_POST["fname"];
    $last_name = $_POST["lname"];
    $mother_tongue = $_POST["mother-tounge"];
    $degree_level = isset($_POST["isGraduate"]) ? "Graduate" : (isset($_POST["isTwelevePassed"]) ? "12th Passout" : (isset($_POST["isTenPassed"]) ? "10th Passout" : "")); // Handle checkboxes
    $favorite_subject = $_POST["cars"];

    // Process the data (you can save it to a database, send emails, etc.)
    // For demonstration purposes, let's just display the submitted information:
    echo "<h2>Submitted Information:</h2>";
    echo "<p>First Name: <strong>$first_name</strong></p>";
    echo "<p>Last Name: <strong>$last_name</strong></p>";
    echo "<p>Mother Tongue: <strong>$mother_tongue</strong></p>";
    echo "<p>Degree Level: <strong>$degree_level</strong></p>";
    echo "<p>Favorite Subject: <strong>$favorite_subject</strong></p>";
}
?>
