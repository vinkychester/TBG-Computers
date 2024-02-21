<?php

namespace Services;

interface NotificationHandlerInterface
{
    /**
     * Gets service which return true
     * @param string $contact
     * @return bool
     */
    public function support(string $contact): bool;

    public function sendFile(string $contact, string $filePath);
}