<?php

namespace Services;

class EmailNotificationService implements NotificationHandlerInterface
{
    private array|false $env;

    public function __construct()
    {
        $this->env = parse_ini_file('.env');
    }

    #[\Override] public function support(string $contact): bool
    {
        return filter_var($contact, FILTER_VALIDATE_EMAIL);
    }

    #[\Override] public function sendFile(string $contact, string $filePath)
    {
        $from = $this->env["FROM_EMAIL"];
        $attachmentName = "attachment_" . date("YmdHms") . (
            (isset($pathInfo['extension'])) ? "." . $pathInfo['extension'] : ""
            );

        $attachment = chunk_split(base64_encode(file_get_contents($filePath)));
        $boundary = "PHP-mixed-" . md5(time());
        $boundWithPre = "\n--" . $boundary;

        $headers = "From: $from";
        $headers .= "\nReply-To: $from";
        $headers .= "\nContent-Type: multipart/mixed; boundary=\"" . $boundary . "\"";

        $message = $boundWithPre;
        $message .= "\n Content-Type: text/plain; charset=UTF-8\n";

        $message .= $boundWithPre;
        $message .= "\nContent-Type: application/octet-stream; name=\"" . $attachmentName . "\"";
        $message .= "\nContent-Transfer-Encoding: base64\n";
        $message .= "\nContent-Disposition: attachment\n";
        $message .= $attachment;
        $message .= $boundWithPre . "--";

        return mail($contact, "PDF File", $message, $headers);
    }
}