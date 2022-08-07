---
title: Authentication
description: Define how your users will login into MailCarrier
layout: ../../../layouts/MainLayout.astro
---
MailCarrier allows you to choose between two ways to sign in: **Standard** (Email + Password) or **Social**.

### Standard

During the installation (`php artisan mailcarrier:install`) you should choose to *not enable social authentication*.  
From that point, you can run from your terminal the following command to create new users.

```js
php artisan mailcarrier:user
```

You can choose to let the system generate a random password for you by leaving that field empty.

### Social Authentication
