---
title: Queue configuration
description: Configuration of queue
---

# Queue configuration

All the configuration variables refers to `config/mailcarrier.php` file.

## `enabled`

Define if the queue system is enabled and can be used or not.  
If the queue is not enabled, trying to send an email with the `enqueue: true` parameter will send it anyway sync.

```php
'queue' => [
    /*
    |--------------------------------------------------------------------------
    | Emails queue
    |--------------------------------------------------------------------------
    |
    | Allow emails to be enqueued.
    |
    */
    'enabled' => true,

    // ...
```

## `force`

When true, all the emails will be sent through a queue also when the `enqueue` parameter is not defined or set to false.  
Can be easily adjusted for different environments with the `MAILCARRIER_FORCE_QUEUE` environment variables.

```php
'queue' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Force email queue
    |--------------------------------------------------------------------------
    |
    | Force email to be always enqueued.
    | If true, the `enqueued` boolean of the API endpoint will be ignored.
    |
    */
    'force' => env('MAILCARRIER_FORCE_QUEUE', false),

    // ...
```

## `name`

If using [multiple queues](https://laravel.com/docs/queues#connections-vs-queues) you can define the queue name here.  
Leaving it to `null` will use the default queue which is normal and fine for most of the cases.

```php
'queue' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Queue name
    |--------------------------------------------------------------------------
    |
    | Set the queue name.
    | Set it to `null` to use the default value.
    |
    */
    'name' => null,

    // ...
```

## `connection`

Define a different connection name to process your async emails.  
Leaving it to `null` will use the default queue connection defined by your `QUEUE_CONNECTION` environment variable, which is fine most of the cases.

```php
'queue' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Queue connection
    |--------------------------------------------------------------------------
    |
    | Set the queue connection, e.g. `sqs` or `redis`.
    | Set it to `null` to use the default value.
    |
    */
    'connection' => null,
],
```
