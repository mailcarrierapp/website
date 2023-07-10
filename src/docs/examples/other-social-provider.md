---
title: "Example: Installing a social provider"
---

# Example: Installing a social provider

Let's integrate **Discord** to see how simple is that. Please find all the needed instructions also on the relative [Socialite Discord page](https://socialiteproviders.com/Discord/).

1. Install the provider by running `composer require socialiteproviders/discord`.

![Require other social authentication provider](/images/social-auth-other-require.png)

2. Open your `config/services.php` file and add the needed data. You can find it in the Socialite page linked above.

```php
'discord' => [
    'client_id' => env('DISCORD_CLIENT_ID'),
    'client_secret' => env('DISCORD_CLIENT_SECRET'),
    'redirect' => env('DISCORD_REDIRECT_URI'),
],
```
3. Add the new environment variables to your `.env` file.

```bash
MAILCARRIER_SOCIAL_AUTH_DRIVER=discord
DISCORD_CLIENT_ID=12345
DISCORD_CLIENT_SECRET=xxxx
DISCORD_REDIRECT_URI="${APP_URL}/auth/callback"
```

4. Open your `app/Providers/EventServiceProvider.php` file and add the event listener to let everything work like magic.

```php
/**
 * The event to listener mappings for the application.
 */
protected $listen = [
    \SocialiteProviders\Manager\SocialiteWasCalled::class => [
        \SocialiteProviders\Discord\DiscordExtendSocialite::class,
    ],
];
```