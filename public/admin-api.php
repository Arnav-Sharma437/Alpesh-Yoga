<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ==========================================
// CONFIGURATION
// ==========================================
$ADMIN_PASSWORD = "CHANGE_ME_ADMIN_123"; // Update this with a strong password

$host = "localhost"; 
$dbname = "alpeshyoga";
$username = "Alpeshyoga";
$password = "Namaste2026!";

// ==========================================
// AUTHENTICATION
// ==========================================
$headers = apache_request_headers();
$authHeader = $headers['Authorization'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? '';

// Basic auth check
if (strpos($authHeader, 'Bearer ') === 0) {
    $token = substr($authHeader, 7);
    if ($token !== $ADMIN_PASSWORD) {
        http_response_code(401);
        echo json_encode(["success" => false, "error" => "Unauthorized"]);
        exit;
    }
} else {
    // If it's a login request, we check the body
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (isset($data['action']) && $data['action'] === 'login') {
        if (isset($data['password']) && $data['password'] === $ADMIN_PASSWORD) {
            echo json_encode(["success" => true, "token" => $ADMIN_PASSWORD]);
            exit;
        } else {
            http_response_code(401);
            echo json_encode(["success" => false, "error" => "Invalid password"]);
            exit;
        }
    }
    
    http_response_code(401);
    echo json_encode(["success" => false, "error" => "Unauthorized"]);
    exit;
}

// ==========================================
// DATABASE CONNECTION
// ==========================================
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Database connection failed"]);
    exit;
}

// ==========================================
// ROUTING
// ==========================================
$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'get_leads') {
    try {
        // Create table if it doesn't exist (helpful for initial setup)
        $pdo->exec("CREATE TABLE IF NOT EXISTS applications (
            id INT AUTO_INCREMENT PRIMARY KEY,
            location VARCHAR(50),
            program VARCHAR(100),
            batch VARCHAR(100),
            full_name VARCHAR(100),
            gender VARCHAR(20),
            dob VARCHAR(50),
            age INT,
            nationality VARCHAR(50),
            address TEXT,
            phone VARCHAR(50),
            whatsapp VARCHAR(50),
            email VARCHAR(100),
            occupation VARCHAR(100),
            practice_duration VARCHAR(100),
            has_hatha VARCHAR(10),
            has_philosophy VARCHAR(10),
            has_teaching VARCHAR(10),
            teaching_details TEXT,
            has_injuries VARCHAR(10),
            injury_details TEXT,
            why_join TEXT,
            how_heard VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");

        $stmt = $pdo->query("SELECT * FROM applications ORDER BY created_at DESC");
        $leads = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["success" => true, "leads" => $leads]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    }
} 
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE' && $action === 'delete_lead') {
    $id = $_GET['id'] ?? null;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Missing ID"]);
        exit;
    }
    
    try {
        $stmt = $pdo->prepare("DELETE FROM applications WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    }
} 
elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && $action === 'get_settings') {
    try {
        $pdo->exec("CREATE TABLE IF NOT EXISTS settings (
            setting_key VARCHAR(50) PRIMARY KEY,
            setting_value TEXT
        )");
        $stmt = $pdo->query("SELECT * FROM settings");
        $settings = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $settings[$row['setting_key']] = $row['setting_value'];
        }
        echo json_encode(["success" => true, "settings" => $settings]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    }
}
elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'update_settings') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    try {
        $stmt = $pdo->prepare("INSERT INTO settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)");
        
        foreach (['form_enabled', 'notification_email'] as $key) {
            if (isset($data[$key])) {
                $stmt->execute([$key, $data[$key]]);
            }
        }
        
        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => $e->getMessage()]);
    }
} 
else {
    http_response_code(404);
    echo json_encode(["success" => false, "error" => "Action not found"]);
}
?>
