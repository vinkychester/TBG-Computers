<?php

namespace Services;

class NotificationProviderService
{
    private EmailNotificationService $emailService;
    private TelegramNotificationService $telegramService;

    public function __construct()
    {
        $this->emailService = new EmailNotificationService();
        $this->telegramService = new TelegramNotificationService();
    }

    private function findSupportedService(
        string                       $content,
        NotificationHandlerInterface ...$notifications
    ): ?NotificationHandlerInterface
    {
        //Defines the chain
        while ($notifications) {
            /** @var NotificationHandlerInterface $current */
            $current = current($notifications);
            if ($current->support($content)) {
                return $current;
            } else {
                next($notifications);
            }
        }

        return null;
    }

    /**
     * @throws \Exception
     */
    public function getNotificationService(string $content): ?NotificationHandlerInterface
    {
        $service = $this->findSupportedService($content, $this->telegramService, $this->emailService);

        if (!$service) {
            throw new \Exception('Service not found', 404);
        }

        return $service;
    }
}