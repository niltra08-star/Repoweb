<?php

namespace VeriFactu;

class VeriFactuException extends \Exception
{
    private $statusCode;

    public function __construct(string $message, int $statusCode = null)
    {
        parent::__construct($message);
        $this->statusCode = $statusCode;
    }

    public function getStatusCode()
    {
        return $this->statusCode;
    }
}

class VeriFactuClient
{
    private $apiKey;
    private $baseUrl;

    public function __construct(string $apiKey, string $baseUrl = 'https://api.verifactu.dev')
    {
        $this->apiKey = $apiKey;
        $this->baseUrl = $baseUrl;
    }

    private function request(string $method, string $endpoint, array $data = null)
    {
        $url = $this->baseUrl . $endpoint;
        $ch = curl_init();

        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json',
        ];

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        if ($method === 'POST') {
            curl_setopt($ch, CURLOPT_POST, true);
            if ($data) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            }
        }

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode >= 400) {
            $error = json_decode($response, true);
            throw new VeriFactuException($error['error'] ?? 'Error', $httpCode);
        }

        return json_decode($response, true);
    }

    public function health()
    {
        return $this->request('GET', '/api/v1/health');
    }

    public function createInvoice(array $emitter, array $receiver, array $lines, string $series = null)
    {
        $data = [
            'emitter' => $emitter,
            'receiver' => $receiver,
            'lines' => $lines,
        ];

        if ($series) {
            $data['series'] = $series;
        }

        return $this->request('POST', '/api/v1/invoices', $data);
    }

    public function listInvoices(int $limit = 50, int $offset = 0)
    {
        return $this->request('GET', "/api/v1/invoices?limit=$limit&offset=$offset");
    }

    public function getInvoice(string $id)
    {
        return $this->request('GET', "/api/v1/invoices/$id");
    }

    public function cancelInvoice(string $id)
    {
        return $this->request('POST', "/api/v1/invoices/$id", ['action' => 'cancel']);
    }
}

function register(string $email, string $password, string $name = null, string $baseUrl = 'https://api.verifactu.dev')
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $baseUrl . '/api/auth/register');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'email' => $email,
        'password' => $password,
        'name' => $name,
    ]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

function login(string $email, string $password, string $baseUrl = 'https://api.verifactu.dev')
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $baseUrl . '/api/auth/login');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'email' => $email,
        'password' => $password,
    ]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}