---
title: Installation
description: Install MailCarrier
---

# Installation

Installing MailCarrier is just one command away!

::: tip Using Docker?
If you prefer to use Docker [we got your back](/docs/getting-started/running-docker)!
:::

## Prerequisites

- **PHP** - 8.1 or higher.
- **Composer** - The PHP dependency manager.
- **Database** - Could be *MySQL*, *PostgreSQL* or whatever you like.

## Install

### 1. Run the Setup Wizard
Run the following command in your terminal to start our handy install wizard.

```shell
curl "https://mailcarrier.app/create" | bash
```

It will clone a fresh **Laravel** application in a folder named `mailcarrier`, install MailCarrier and the needed dependencies.

::: details What's that file?
Wondering what's the content of that bash file? Check it out [on GitHub](https://github.com/mailcarrierapp/website/blob/master/src/public/create), we're always 100% open and secure.
:::

### 2. Setup your database
Once the first setup is over, go and edit your `.env` file inside your brand new `mailcarrier` application and edit the **database** environment variables according, for example:

```js
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=mailcarrier
DB_USERNAME=mailcarrier
DB_PASSWORD=supersecretpassword
```

To know more about database configuration, you can read it on [Laravel docs](https://laravel.com/docs/9.x/database#introduction).

### 3. Complete your installation
Inside your terminal run the last command to complete the process:

```shell
php artisan mailcarrier:install
```

It will install the dashboard and let you choose how would you like to authenticate your users.

### 4. Run MailCarrier
Inside your terminal run this command to spawn a web server for MailCarrier:

```shell
php artisan serve
```

Now open your browser, navigate to [http://127.0.0.1:8000](http://127.0.0.1:8000) and have fun!
