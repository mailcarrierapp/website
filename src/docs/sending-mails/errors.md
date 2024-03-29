---
title: Errors
description: Errors and Exceptions handling 
---

# Errors

When something goes wrong, for example a variable is not found, MailCarrier throws an exception specific for that error.  
Thanks to [Laravel error handling](https://laravel.com/docs/errors) you can intercept them and do whatever you want, for example you could intercept the failure of sending emails and log it on Discord.

Open your `app/Exceptions/Handler.php` and inside the `register()` method let's the use `reportable()` hook. Inside that callback you can pass the Exceptions that you want to intercept, in this case `SendingFailedException`.

Inside every MailCarrier exception you will have a (nullable) `log` property where you can access the details of the event. In this case we're going to use the `trigger` field to understand what's the service to notify.  
With this info and the [**Http client** of Laravel](https://laravel.com/docs/http-client) we'll fire a Discord webhook.

```php
use Illuminate\Support\Facades\Http;
use MailCarrier\Exceptions\SendingFailedException;

$this->reportable(function (SendingFailedException $e) {
    $trigger = $e->log?->trigger ?: 'Not defined';
    $error = $e->getMessage();

    Http::post('https://discord.com/api/webhooks/...', [
        'content' => "Something went wrong while sending a email from **{$trigger}** with error: {$error}",
    ]);
});
```

Thanks to union types you can of course catch multiple exceptions within the same callback:

```php
use Illuminate\Support\Facades\Http;
use MailCarrier\Exceptions\MissingVariableException;
use MailCarrier\Exceptions\SendingFailedException;

$this->reportable(function (MissingVariableException|SendingFailedException $e) {
    $trigger = $e->log?->trigger ?: 'Not defined';
    $error = $e->getMessage();

    Http::post('https://discord.com/api/webhooks/...', [
        'content' => "Something went wrong while sending a email from **{$trigger}** with error: {$error}",
    ]);
});
```

If you want to catch **all the MailCarrier exception** you can do that as well by invoking the callback with `MailCarrierException`:

```php
use MailCarrier\Exceptions\SendingFailedException;

$this->reportable(function (MailCarrierException $e) {
    // Do something here
});
```

## Available Exceptions

All exceptions refers to the namespace `MailCarrier\Exceptions`.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Scenario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="300px"><code>AttachmentNotDownloadableException</code></td>
      <td>The attachment can't be downloaded (not saved anywhere). Should never happens, though.</td>
    </tr>
    <tr>
      <td><code>AttachmentNotFoundException</code></td>
      <td>The attachment was not found on the remote disk/filesystem.</td>
    </tr>
    <tr>
      <td><code>MissingVariableException</code></td>
      <td>A required variable in the template was not provided.</td>
    </tr>
    <tr>
      <td><code>SendingFailedException</code></td>
      <td>Something went wrong while sending the email (e.g. timeout from provider). It will catch also <code>MissingVariableException</code>.</td>
    </tr>
    <tr>
      <td><code>SocialAuthNotEnabledException</code></td>
      <td>The social auth endpoint was called but the social auth is not enabled.</td>
    </tr>
    <tr>
      <td><code>TemplateRenderException</code></td>
      <td>The template cannot be rendered.</td>
    </tr>
  </tbody>
</table>