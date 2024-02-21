---
title: Logs configuration
description: Configuration of logs
---

# Logs configuration

All the configuration variables refers to `config/mailcarrier.php` file.

## `prunable_period`

Define for how long the logs should be stored. You can use a human friendly syntax such as `3 months` (default), `1 year` and so on.

```php
'logs' => [
    /*
    |--------------------------------------------------------------------------
    | Prunable time period
    |--------------------------------------------------------------------------
    |
    | Determine how old the logs must be to prune them.
    | You can use a human syntax like "30 days" or "6 months".
    |
    */
    'prunable_period' => '3 months',
],
```

::: tip Prune the logs
Pruning is not done automatically, but you must run in a cronjob, or manually, the command:

```shell
php artisan model:prune --model=MailCarrier\Models\Log
```
:::


## `table_refresh_poll`

Define the refresh poll interval for the Log tables in the dashboard UI. Set it to `null` to disable completely the auto-refresh.

```php
'logs' => [
    ...

    /*
    |--------------------------------------------------------------------------
    | Table refresh time
    |--------------------------------------------------------------------------
    |
    | The polling time to automatically refresh the logs table.
    | Set it to null to disable the poll refresh.
    |
    */
    'table_refresh_poll' => '5s',
],
```