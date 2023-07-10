---
title: Queue
description: Send emails in the background 
---

# Queue

Sending an email can be an expensive - in terms of time - operation, for example because it relies on SMTP and the connection could take several seconds.  
For this reason you can put the job in the background through a **queue**, so the API endpoint will be faster and the operation will be not blocking.  

To get started, you can follow the [official Laravel documentation](https://laravel.com/docs/queues) to understand how to configure your preferred driver, such as your **database**, **Redis**, **Amazon SQS** or **Beanstalkd**.

Then start your queue worker:

```bash
php artisan queue:work
```

::: info Worker daemon
Be sure to use a service such as Supervisor to keep your worker up and to correctly restart your worker on deploy with `php artisan queue:restart`.  
Read more here: [Queue Workers & Deployments](https://laravel.com/docs/queues#queue-workers-and-deployment).
:::

## Usage

To tell MailCarrier that an email should be enqueued you can pass the `enqueue: true` parameter to the API endpoint.

```json
{
  "enqueue": true,
  "recipient": "foo@example.org",
  "subject": "Queue? Yes, please!",
  "template": "default"
}
```

If you want to enforce that every email must be enqueued you can do it by setting the `MAILCARRIER_FORCE_QUEUE` to true.

```bash
MAILCARRIER_FORCE_QUEUE=true
```

Or, eventually, force it in your `config/mailcarrier.php` configuration file under the `queue.force` key. 

```php
'queue' => [
    // ... Other keys

    /*
    |--------------------------------------------------------------------------
    | Force email queue
    |--------------------------------------------------------------------------
    |
    | Force email to be always enqueued.
    | If true, the `enqueued` boolean of the API endpoint will be ignored.
    |
    */
    'force' => true,

    // ... Other keys
```

If, on the other side, you don't want at all emails to be enqueued (*why, though?*) you can set the `queue.enabled` key to false.

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
    'enabled' => false,

    // ... Other keys
```

## Retries

Failed emails will be saved in the queue and retried after specific, fixed, range of times.  
Since the error could be caused by a misconfiguration or a temporarily issue in your email provider, these values should cover every possible issue and allows you to fix it.  

After the 6th attempt the email will be **discarded** and there will be no way to retry them.

1. (*First retry*) After 5 seconds
1. After 30 seconds
1. After 1 minute
1. After 5 minutes
1. After 30 minutes
1. After 1 hour
