---
title: Upgrading from v1
description: Upgrade guide from MailCarrier v1 to v2 
---

# Upgrading from v1

::: info Are you using Docker?
If you're using Docker just hook to the new image version of `mailcarrier:2` and you're ready to go. No further action is required.
:::

With the upgrade to Filament 3.x and several enhancements to MailCarrier, a few things must be done to upgrade correctly.

1. Remove `filament/filament` direct dependency on your project, since it's already a direct dependency from MailCarrier.
```shell
composer remove filament/filament
```

Ignore the error at the end saying `Removal failed, filament/filament is still present, it may be required by another package`.

2. Cleanup old files
With MailCarrier v2 public assets are stored inside a dedicated folder, therefore a bit of cleanup can be done.

```shell
rm -rf public/js public/css public/fonts public/images
rm config/filament.php
rm resources/views/errors/401.blade.php
rm resources/views/vendor/filament/login.blade.php
rm resources/views/vendor/filament/components/brand.blade.php
```

3. Upgrade to MailCarrier 2.x.
```shell
composer require mailcarrier/mailcarrier:^2.0 -W
```

4. Install new components.
```shell
php artisan filament:install
```