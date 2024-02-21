<?php

namespace Services;

use CURLFile;

class TelegramNotificationService implements NotificationHandlerInterface
{
    private array|false $env;

    public function __construct()
    {
        $this->env = parse_ini_file('.env');
    }

    #[\Override] public function support(string $contact): bool
    {
        return preg_match('/[0-9]{9}/', $contact);
    }

    #[\Override] public function sendFile(string $contact, string $filePath): void
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot{$this->env["BOT_ID"]}/sendDocument");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $contact,
            'caption' => 'Caption for the document',
            'document' => new CURLFile($filePath)
        ]);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);

        curl_close($ch);

        echo $response;
    }
}