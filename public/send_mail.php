<?php
// Set CORS headers so that local testing from localhost can access it if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

// Honeypot anti-spam check
if (!empty($input['website_url'])) {
    echo json_encode(["success" => true, "message" => "Security verification passed."]);
    exit;
}

if (!$input || empty($input['email']) || empty($input['name'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Bad Request. Missing required fields."]);
    exit;
}

$admin_email = "oksportas@gmail.com";
$client_email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$client_name = htmlspecialchars($input['name']);
$lang = isset($input['lang']) ? $input['lang'] : 'en';
$type = isset($input['type']) ? $input['type'] : 'contact';

// 1. Send admin notification
$admin_subject = "";
$admin_body = "";

if ($type === 'estimate') {
    $admin_subject = "New Padel Estimate Request - " . $client_name;
    
    $court_model = isset($input['court_model']) ? $input['court_model'] : '';
    $quantity = isset($input['quantity']) ? $input['quantity'] : 1;
    $turf_type = isset($input['turf_type']) ? $input['turf_type'] : '';
    $lighting_system = isset($input['lighting_system']) ? $input['lighting_system'] : '';
    $frame_finish = isset($input['frame_finish']) ? $input['frame_finish'] : '';
    $glass_type = isset($input['glass_type']) ? $input['glass_type'] : '';
    $concrete_foundations = isset($input['concrete_foundations']) ? $input['concrete_foundations'] : '';
    $delivery_required = isset($input['delivery_required']) ? $input['delivery_required'] : '';
    $installation_required = isset($input['installation_required']) ? $input['installation_required'] : '';
    $total_estimated_price = isset($input['total_estimated_price']) ? $input['total_estimated_price'] : '';
    
    $admin_body = "
    <html>
    <head>
        <title>Padel Court Estimate Request</title>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
        <h2>New Padel Court Estimate Request</h2>
        <p><strong>Name:</strong> {$client_name}</p>
        <p><strong>Email:</strong> {$client_email}</p>
        <hr style='border:0; border-top: 1px solid #ccc;' />
        <h3>Selected Specifications:</h3>
        <ul>
            <li><strong>Court Model:</strong> {$court_model}</li>
            <li><strong>Quantity:</strong> {$quantity}</li>
            <li><strong>Turf Type:</strong> {$turf_type}</li>
            <li><strong>Lighting System:</strong> {$lighting_system}</li>
            <li><strong>Frame Finish:</strong> {$frame_finish}</li>
            <li><strong>Glass Type:</strong> {$glass_type}</li>
            <li><strong>Concrete Foundations:</strong> {$concrete_foundations}</li>
            <li><strong>Delivery:</strong> {$delivery_required}</li>
            <li><strong>Assembly/Installation:</strong> {$installation_required}</li>
            <li><strong>Total Estimated Price:</strong> <span style='font-size:18px; color:#10b981; font-weight:bold;'>{$total_estimated_price}</span></li>
        </ul>
    </body>
    </html>
    ";
} else {
    $admin_subject = "New Contact Form Message - " . $client_name;
    $message = isset($input['message']) ? nl2br(htmlspecialchars($input['message'])) : '';
    
    $admin_body = "
    <html>
    <head>
        <title>Contact Form Submission</title>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> {$client_name}</p>
        <p><strong>Email:</strong> {$client_email}</p>
        <hr style='border:0; border-top: 1px solid #ccc;' />
        <h3>Message:</h3>
        <p style='background-color:#f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #10b981;'>{$message}</p>
    </body>
    </html>
    ";
}

// Admin headers
$sender_host = !empty($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'oksportas.lt';
$sender_email = "no-reply@" . $sender_host;
$admin_headers = "MIME-Version: 1.0\r\n";
$admin_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$admin_headers .= "From: OKsportas Website <" . $sender_email . ">\r\n";
$admin_headers .= "Reply-To: " . $client_email . "\r\n";

$admin_sent = mail($admin_email, $admin_subject, $admin_body, $admin_headers, "-f" . $sender_email);

// 2. Send client auto-reply
$client_subject = "";
$client_body = "";

if ($lang === 'lt') {
    $client_subject = "Gavome jūsų užklausą – OKsportas";
    $client_body = "
    <html>
    <head>
        <title>Užklausa gauta</title>
    </head>
    <body style='background-color: #030712; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; color: #f3f4f6;'>
        <div style='background-color: #0b0f19; color: #f3f4f6; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #10b981; box-shadow: 0 10px 30px rgba(0,0,0,0.5);'>
            <div style='text-align: center; margin-bottom: 20px;'>
                <h1 style='color: #10b981; font-size: 24px; margin: 0; font-weight: 800; letter-spacing: 0.05em;'>OKsportas</h1>
            </div>
            <h2 style='color: #ffffff; border-bottom: 1px solid #1f2937; padding-bottom: 12px; margin-top: 0; font-size: 20px;'>Sveiki, {$client_name}!</h2>
            <p style='font-size: 16px; line-height: 1.6;'>Dėkojame, kad domitės <strong>OKsportas</strong> padelio aikštelėmis. Gavome jūsų užklausą.</p>
            <p style='font-size: 16px; line-height: 1.6;'>Mūsų inžinierių komanda jau peržiūri jūsų pateiktus duomenis. Susisieksime su jumis artimiausiu metu su tiksliu komerciniu pasiūlymu ir atsakymais į jūsų klausimus.</p>
            <p style='font-size: 16px; line-height: 1.6;'>Jei turite skubių klausimų ar norite patikslinti detales, susisiekite tiesiogiai:</p>
            <div style='background-color: #131b2e; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;'>
                <p style='margin: 5px 0; font-size: 15px; color: #e5e7eb;'>📞 <strong>Telefonas:</strong> <a href='tel:+37060215771' style='color: #10b981; text-decoration: none; font-weight: 600;'>+370 602 15771</a></p>
                <p style='margin: 5px 0; font-size: 15px; color: #e5e7eb;'>✉ <strong>El. paštas:</strong> <a href='mailto:oksportas@gmail.com' style='color: #10b981; text-decoration: none; font-weight: 600;'>oksportas@gmail.com</a></p>
            </div>
            <hr style='border: 0; border-top: 1px solid #1f2937; margin: 20px 0;'>
            <p style='font-size: 14px; color: #9ca3af; margin-bottom: 0;'>Pagarbiai,<br><strong>OKsportas komanda</strong></p>
        </div>
    </body>
    </html>
    ";
} else {
    $client_subject = "We received your request – OKsportas";
    $client_body = "
    <html>
    <head>
        <title>Request Received</title>
    </head>
    <body style='background-color: #030712; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif; color: #f3f4f6;'>
        <div style='background-color: #0b0f19; color: #f3f4f6; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #10b981; box-shadow: 0 10px 30px rgba(0,0,0,0.5);'>
            <div style='text-align: center; margin-bottom: 20px;'>
                <h1 style='color: #10b981; font-size: 24px; margin: 0; font-weight: 800; letter-spacing: 0.05em;'>OKsportas</h1>
            </div>
            <h2 style='color: #ffffff; border-bottom: 1px solid #1f2937; padding-bottom: 12px; margin-top: 0; font-size: 20px;'>Hello, {$client_name}!</h2>
            <p style='font-size: 16px; line-height: 1.6;'>Thank you for your interest in <strong>OKsportas</strong> padel courts. We have successfully received your inquiry / quote request.</p>
            <p style='font-size: 16px; line-height: 1.6;'>Our engineering team is already reviewing your project details. We will get back to you shortly with a formal commercial offer and answers to your questions.</p>
            <p style='font-size: 16px; line-height: 1.6;'>If you have any urgent inquiries or need to update details, feel free to contact us directly:</p>
            <div style='background-color: #131b2e; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;'>
                <p style='margin: 5px 0; font-size: 15px; color: #e5e7eb;'>📞 <strong>Phone:</strong> <a href='tel:+37060215771' style='color: #10b981; text-decoration: none; font-weight: 600;'>+370 602 15771</a></p>
                <p style='margin: 5px 0; font-size: 15px; color: #e5e7eb;'>✉ <strong>Email:</strong> <a href='mailto:oksportas@gmail.com' style='color: #10b981; text-decoration: none; font-weight: 600;'>oksportas@gmail.com</a></p>
            </div>
            <hr style='border: 0; border-top: 1px solid #1f2937; margin: 20px 0;'>
            <p style='font-size: 14px; color: #9ca3af; margin-bottom: 0;'>Best regards,<br><strong>OKsportas Team</strong></p>
        </div>
    </body>
    </html>
    ";
}

$client_headers = "MIME-Version: 1.0\r\n";
$client_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$client_headers .= "From: OKsportas <" . $sender_email . ">\r\n";
$client_headers .= "Reply-To: " . $admin_email . "\r\n";

$client_sent = mail($client_email, $client_subject, $client_body, $client_headers, "-f" . $sender_email);

if ($admin_sent) {
    echo json_encode(["success" => true, "message" => "Emails sent successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send email. Check your server PHP configuration."]);
}
?>
