---
title: API Endpoint configuration
description: Configuration of API Endpoint
---

# API Endpoint configuration

All the configuration variables refers to `config/mailcarrier.php` file.

## `auth_guard`

Set by the `MAILCARRIER_AUTH_GUARD` environment variable, defines what's the authentication system of your APIs.  
By default it's `auth:sanctum`, meaning that API tokens shipped out-of-the-box by MailCarrier will be used, but you can install any authentication system, such as JWTs, Machine-to-Machine (Auth0, FusionAuth etc.) and many more.

```php
'api_endpoint' => [
    /*
    |--------------------------------------------------------------------------
    | API auth guard
    |--------------------------------------------------------------------------
    |
    | Set the guard that must be applied to protected the API endpoint.
    | Use `null` to disable it.
    |
    */
    'auth_guard' => env('MAILCARRIER_AUTH_GUARD', 'auth:sanctum'),

    // ...
],
```

## `extra_middleware`

An array of additional [middlewares](https://laravel.com/docs/middleware#defining-middleware) that you want to apply to the API endpoint.  
These middleware can be third-party or first-party, defined by your `app/Http/Middleware` files.

```php
'api_endpoint' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | API auth extra middleware
    |--------------------------------------------------------------------------
    |
    | Set the middleware that must be applied to the API endpoint.
    | Use `null` to disable it.
    |
    */
    'extra_middleware' => [
        \App\Http\Middleware\MyMiddleware::class,
    ],
],
```