<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ONLY edit these 4 lines with your GoDaddy database credentials
$host = "localhost"; // Usually localhost on GoDaddy
$dbname = "alpeshyoga";
$username = "Alpeshyoga";
$password = "Namaste2026!";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        echo json_encode(["success" => false, "error" => "Invalid JSON data"]);
        exit;
    }

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Check settings
        $stmt = $pdo->query("SELECT setting_key, setting_value FROM settings");
        $settings = [];
        if ($stmt) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $settings[$row['setting_key']] = $row['setting_value'];
            }
        }

        if (isset($settings['form_enabled']) && $settings['form_enabled'] === 'false') {
            echo json_encode(["success" => false, "error" => "Applications are currently closed."]);
            exit;
        }

        $stmt = $pdo->prepare("INSERT INTO applications (
            location, program, batch, full_name, gender, dob, age, nationality, address, 
            phone, whatsapp, email, occupation, practice_duration, has_hatha, has_philosophy, 
            has_teaching, teaching_details, has_injuries, injury_details, why_join, how_heard
        ) VALUES (
            :location, :program, :batch, :fullName, :gender, :dob, :age, :nationality, :address, 
            :phone, :whatsapp, :email, :occupation, :practiceDuration, :hasHatha, :hasPhilosophy, 
            :hasTeaching, :teachingDetails, :hasInjuries, :injuryDetails, :whyJoin, :howHeard
        )");

        $whatsapp = $data['whatsappSame'] ? 
            ($data['phoneCode'] . ' ' . $data['phoneNumber']) : 
            ($data['whatsappCode'] . ' ' . $data['whatsappNumber']);

        $stmt->execute([
            ':location' => $data['location'] ?? '',
            ':program' => $data['program'] ?? '',
            ':batch' => $data['batch'] ?? '',
            ':fullName' => $data['fullName'] ?? '',
            ':gender' => $data['gender'] ?? '',
            ':dob' => $data['dob'] ?? '',
            ':age' => $data['age'] ?? 0,
            ':nationality' => $data['nationality'] ?? '',
            ':address' => $data['address'] ?? '',
            ':phone' => ($data['phoneCode'] ?? '') . ' ' . ($data['phoneNumber'] ?? ''),
            ':whatsapp' => $whatsapp,
            ':email' => $data['email'] ?? '',
            ':occupation' => $data['occupation'] ?? '',
            ':practiceDuration' => $data['practiceDuration'] ?? '',
            ':hasHatha' => $data['hasHathaAlignment'] ?? '',
            ':hasPhilosophy' => $data['hasPhilosophy'] ?? '',
            ':hasTeaching' => $data['hasTeaching'] ?? '',
            ':teachingDetails' => $data['teachingDetails'] ?? '',
            ':hasInjuries' => $data['hasInjuries'] ?? '',
            ':injuryDetails' => $data['injuryDetails'] ?? '',
            ':whyJoin' => $data['whyJoin'] ?? '',
            ':howHeard' => $data['howHeard'] ?? ''
        ]);

        // Send email notification
        if (!empty($settings['notification_email'])) {
            $to = $settings['notification_email'];
            $subject = "New Yoga Application: " . ($data['fullName'] ?? 'Applicant');
            
            $message = "A new application has been submitted.\n\n";
            $message .= "Name: " . ($data['fullName'] ?? 'N/A') . "\n";
            $message .= "Email: " . ($data['email'] ?? 'N/A') . "\n";
            $message .= "Program: " . ($data['program'] ?? 'N/A') . " - " . ($data['location'] ?? 'N/A') . "\n";
            $message .= "Batch: " . ($data['batch'] ?? 'N/A') . "\n\n";
            $message .= "Log in to the Admin Dashboard to view full details:\nhttps://alpeshyoga.com/admin";
            
            $headers = "From: noreply@alpeshyoga.com\r\n";
            $headers .= "Reply-To: " . ($data['email'] ?? 'noreply@alpeshyoga.com') . "\r\n";
            $headers .= "X-Mailer: PHP/" . phpversion();

            @mail($to, $subject, $message, $headers);
        }

        echo json_encode(["success" => true, "message" => "Application submitted successfully"]);
    } catch (PDOException $e) {
        // In production, you might not want to output the exact DB error for security reasons
        echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
}
?>
