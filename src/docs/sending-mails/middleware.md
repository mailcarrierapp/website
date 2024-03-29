---
title: Middleware
description: Intercept and apply a middleware before and after sending a mail 
---

# Middleware

MailCarrier provides a "middleware" to call and apply your custom code *before* and *after* sending an email. This could be useful for logging purposes or change at runtime some configuration values.  

To get started open your `app/Providers/AppServiceProviders.php`: here you will find a `MailCarrier::sending` callback where you can access the [`GenericMailDto`](https://github.com/mailcarrierapp/mailcarrier/blob/master/src/Dto/GenericMailDto.php) data such as recipient and variables.

```php
MailCarrier::sending(function (GenericMailDto $mail, \Closure $next): void {
    // Do something before
    $next();
    // Do something after
});
```

::: danger Throwing exceptions
Never throw exceptions inside your `sending` middleware because it could stop your queue worker!
:::

The only important thing you have to remember is to call `$next()` to proceed with the flow and send the email.  
For example you could prevent sending emails when the sender is not from a specific domain:

```php
MailCarrier::sending(function (GenericMailDto $mail, \Closure $next): void {
    if (!str_ends_with($mail->sender?->email, '@mailcarrier.app')) {
      return;
    }

    $next();
});
```

::: info Nullable properties
Please note that some properties of the DTO are nullable, that's why we use the [null-safe operator](https://php.watch/versions/8.0/null-safe-operator) to access the sender email.
:::

You can, eventually, pass a `GenericMailDto` instance to the `$next()` callback to override the original. For example, you can force the sender and always add the template name as mail tag:

```php
MailCarrier::sending(function (GenericMailDto $mail, \Closure $next): void {
    $next($mail->clone(
      sender: 'forced@example.org',
      tags: [
        ...$mail->tags,
        'template:' . $mail->template->name,
      ],
    ));
});
```

## Sync Middleware
The `sending` middleware happens before and after the mail sending, meaning that it could happens even in the background queue if enabled.  
As said earlier, you must never throw exceptions inside that middleware, that's why MailCarrier provides a `beforeSending` hook that always runs in foreground (API call) and where you can add custom validation, throwing exceptions etc.

Taking the example above, we can write a better validation to prevents foreign senders throwing a JSON error instead of just skipping it:

```php
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

MailCarrier::beforeSending(function (GenericMailDto $mail): void {
    $isDomainAllowed = str_ends_with($mail->sender->email, '@mailcarrier.app');

    if (!is_null($mail->sender) && !$isDomainAllowed) {
      throw new BadRequestHttpException('Sender domain not allowed.');
    }
});
```

Now, if you try to hit the `/api/send` endpoint it will throw an error:

![Block sender from beforeSending hook](/images/example-block-sender-hook.png)