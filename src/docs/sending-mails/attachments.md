---
title: Attachments
description: Attach files to your emails locally or remotely 
---

# Attachments

MailCarrier allows to send one or more attachments with your email. To get started simply specify the `attachments` array key and connect it to your file.  
Remember that we're working with files, so you must send a `form-data` and not a json. This is an example of how it looks like on *Postman*:

![Attachments on Postman](/images/attachments-form-data-postman.png)

::: warning Files types
By default only specific mimetypes are allowed for security reasons, such as *zip*, *pdf*, *images* and so on. You can learn more about this in the [configuration section](/docs/configuration/attachments). 
:::

## Remote attachments

Along with standard attachments, you can even attach *remote attachments*, namely files already uploaded somewhere (**S3**, **Spaces**, **local filesystem**).  You will find this useful when you want to attach a file that has already been created and stored and you don't want to download it just to send it to MailCarrier.

To get started configure your desired disk following the Laravel documentation, for example [install the S3 driver](https://laravel.com/docs/filesystem#s3-driver-configuration) and set the correct environment variables.

Then set the `MAILCARRIER_FILESYSTEM_DISK` variable to reflect the name of your disk (you will find it inside your `config/filesystem.php`, e.g. `s3`).

Now in your JSON payload you can define a `remoteAttachments` array with the paths of your files.

```json
{
  // Other variables
  "remoteAttachments": [
    "path/to/file.pdf",
    "path/to/otherfile.pdf",
  ]
}
```

::: info JSON or Form-Data?
Because remote attachments are just an array you can use them in your classic **JSON** payload. If you plan to use standard attachments, remember to use instead **Form Data**.
:::

### Working with multiple remote disks

If you need to grab data from multiple source, e.g. s3 and Spaces, you can define your other disks as usual and then, since the `MAILCARRIER_FILESYSTEM_DISK` is already taken, you can add them to your `additional_disks` array in your `config/mailcarrier.php` file.

```php
'additional_disks' => [
    'spaces',
    'local',
],
```

Now you can specify a `disk` property in your remote attachments to choose where to pick them. If you omit it, the default `MAILCARRIER_FILESYSTEM_DISK` disk will be used.

```json
{
  // Other variables
  "remoteAttachments": [
    {
      "resource": "path/to/file.pdf",
    },
    {
      "resource": "path/to/otherfile.pdf",
      "disk": "spaces"
    }
  ]
}
```

## Remote attachments names

If you work with a disk that does not provide a valid name or want to override it when attaching the file, you can use the `name` property.

```json
{
  // Other variables
  "remoteAttachments": [
    {
      "resource": "path/to/file.pdf",
      "disk": "s3",
      "name": "Receipt.pdf"
    },
    {
      "resource": "path/to/otherfile.pdf",
      "disk": "spaces"
    }
  ]
}
```
