---
title: API protection
description: Define the API protection and authentication
---

# API Protection

By default the API endpoints are protected by **Laravel Sanctum**, an authentication system based on fixed API tokens.  
To generate a new token you can run the `mailcarrier:token` command and specify a name (e.g. `My service`) to quickly understand who's using it. 

```shell
php artisan mailcarrier:token
```

![Generate a new token](/images/generate-new-token.png)

::: tip Local authentication
  If you would like to completely disable the authentication, for example locally, you can leave the `MAILCARRIER_AUTH_GUARD` env blank.
:::

## Other authentication methods

If you don't like the default token-based authentication system or want to use something else, you can install one of the several authentication packages available for Laravel or [build your own](https://laravel.com/docs/authentication#adding-custom-guards).  

For example, you may want to add Machine-to-Machine SSO authentication such as [FusionAuth](https://github.com/danilopolani/laravel-fusionauth-jwt): just follow the README instructions and update the `MAILCARRIER_AUTH_GUARD` env.