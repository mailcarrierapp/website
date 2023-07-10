---
title: Attachments configuration
description: Define email standard and remote attachments
---

# Attachments configuration

All the configuration variables refers to `config/mailcarrier.php` file.

## `max_size`

The maximum file size allowed for attachments in kilobytes.

```php
'attachments' => [
    /*
    |--------------------------------------------------------------------------
    | Max attachments size
    |--------------------------------------------------------------------------
    |
    | Define the maximum attachments files in kb.
    | For example, 1024 * 5 = 5MB.
    |
    */
    'max_size' => 1024 * 5,

    // ...
```

## `mimetypes`

The allowed mimetypes for attachments preventing malicious files to be sent via email.  
By default are allowed: **images**, **csv**, **xls**, **xlsx**, **pdf** and **zip**. 

```php
'attachments' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Accepted mimetypes
    |--------------------------------------------------------------------------
    |
    | Define the accepted mimetypes.
    | Set it to null to accept any kind of file.
    |
    */
    'mimetypes' => [
        'image/jpeg',
        'image/png',
        'image/gif',
        'text/csv',
        'application/vnd.ms-excel', // xls
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
        'application/pdf',
        'application/zip',
    ],

    // ...
```

## `disk`

Defined by the `MAILCARRIER_FILESYSTEM_DISK` environment variable (and default to the Laravel default one via `FILESYSTEM_DISK`), represents the default disk used to store attachments for logs (see [log_strategy](`log_strategy`)) or to fetch them when a [remote disk](/docs/sending-mails/attachments#remote-attachments) is used.  

By default it uses the `local` disk (aka your filesystem), but you can use anything such as [S3 (or API-compatible)](https://laravel.com/docs/filesystem#s3-driver-configuration), [FTP](https://laravel.com/docs/filesystem#ftp-driver-configuration), [DropBox](https://www.yellowduck.be/posts/using-dropbox-as-a-laravel-filesystem) or a custom one, as long as it follows the [Laravel Filesystem logic](https://laravel.com/docs/filesystem#custom-filesystems).

```php
'attachments' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Default attachments storage
    |--------------------------------------------------------------------------
    |
    | Define the default storage that will be used to
    | upload or download attachments.
    | When an attachment is sent and saved for logs, it will be uploaded.
    | When an attachment is a reference, it will be fetched.
    |
    */
    'disk' => env('MAILCARRIER_FILESYSTEM_DISK', env('FILESYSTEM_DISK')),

    // ...
```

## `additional_disks`

An array of additional allowed disk to fetch remote attachment. Useful if you plan to use more than one storage, such as one for images, one for documents etc.

```php
'attachments' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Additional attachments disks
    |--------------------------------------------------------------------------
    |
    | Define the additional disks available to pull referenced attachments.
    |
    */
    'additional_disks' => [
      'my_other_disk',
    ],

    // ...
```

## `path`

The default path where attachments for logs will be stored (see [log_strategy](`log_strategy`)).  Can be a S3 or similar bucket path too.  
By default `null` means that they will be stored in the "path root".

```php
'attachments' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Upload path
    |--------------------------------------------------------------------------
    |
    | Define the default path where the standard attachments will be uploaded.
    |
    */
    'path' => null,

    // ...
```


## `log_strategy`

Define how (and if) to store attachments for logs purposes when present in a email. It allows three different values:

- `AttachmentLogStrategy::Inline`: attachments will be saved, **encrypted**, in the database. Since it can lead to a big space in your database, the suggestion is to use it combined with [logs pruning](/docs/configuration/logs#prunable_period).  
- `AttachmentLogStrategy::Upload`: attachments will be uploaded in your [default disk](#disk) and [path](#path) and its location saved in your log.  
- `AttachmentLogStrategy::None`: attachments content will not be saved anywhere, but only its name and size for reference.

```php
'attachments' => [
    // ...

    /*
    |--------------------------------------------------------------------------
    | Log's attachment strategy
    |--------------------------------------------------------------------------
    |
    | Define the strategy to retain attachments for logs:
    | - AttachmentLogStrategy::Inline to save them encoded in the database.
    | - AttachmentLogStrategy::Upload to upload them in the storage (if standard).
    | - AttachmentLogStrategy::None to save only their names and sizes.
    |
    */
    'log_strategy' => AttachmentLogStrategy::Inline,
],
```
