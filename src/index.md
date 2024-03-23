---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 'MailCarrier - Design emails once, send them everywhere'
titleTemplate: false

hero:
  name: "MailCarrier"
  tagline: Design emails once, send them everywhere
  actions:
    - theme: brand
      text: Get started
      link: /docs/getting-started/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/mailcarrierapp/mailcarrier

features:
  - title: No vendor lock-in
    half: true
    icon:
      src: icons/provider-aware.svg
    details: Bring your favorite provider to send emails, such as Amazon SES, MailGun, SendGrid.<br><u>Failover support</u> is built-in.

  - title: Design your templates
    half: true
    icon:
      src: icons/design.svg
    details: Explore a beautiful, robust and expressive template syntax powered by Symfony.

  - title: Open Source
    icon:
      src: icons/unicorn.svg
    details: Open and free at 100%, powered by the community.
  
  - title: Intuitive APIs
    icon:
      src: icons/api.svg
    details: Use a friendly and well documented API endpoint to send your emails.

  - title: Hackable
    icon:
      src: icons/hackable.svg
    details: MailCarrier relies on <a href="https://laravel.com/" target="_blank">Laravel</a> and <a href="https://filamentphp.com/" target="_blank">Filament</a>, that means that over 30K packages are available to customise your instance.

  - title: Secure by default
    wide: true
    icon:
      src: icons/lock.svg
    details: "The interface and the underlying APIs are both protected by-default. Connect a OAuth 2.0 provider, generate API tokens or roll your own authentication system. Everything is possible."

  - title: Attachments
    icon:
      src: icons/attachment.svg
    details: Upload files or fetch them from a remote source such S3, GCP Spaces or similar.

  - title: Retries
    icon:
      src: icons/background-jobs.svg
    details: By enqueuing your emails, you can leaverage the automatic retry feature, or manually trigger it by the UI.

  - title: 'Live preview <em style="opacity: .7; font-size: 12px">(coming soon)</em>'
    icon:
      src: icons/preview.svg
    details: Preview your templates in real-time in your browser, or your mobile devices.

  - title: 'Variants <em style="opacity: .7; font-size: 12px">(coming soon)</em>'
    icon:
      src: icons/variants.svg
    details: Create different variants of your template, for example for i18n support.
---

<style>
article.box {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
}
</style>