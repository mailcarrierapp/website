---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: 'MailCarrier - Design emails once, send them everywhere'
titleTemplate: false

hero:
  name: "MailCarrier"
  tagline: Design emails once, send them everywhere
  actions:
    - theme: alt
      text: View on GitHub
      link: https://github.com/mailcarrierapp/mailcarrier
    - theme: brand
      text: Get started
      link: /docs/getting-started/installation

features:
  - title: 🦄 Open Source
    details: Open and free at 100%, powered by the community.
  - title: 🎨 Beautiful syntax
    details: Explore a beautiful, robust and expressive template syntax thanks to <a href="https://twig.symfony.com/" target="_blank">Twig by Symfony</a>.
  - title: 🧭 Provider aware
    details: Bring your favorite provider to send emails, such as Amazon SES, MailGun, SendGrid etc.
  - title: ✨ Friendly APIs
    details: Use a friendly and well documented API endpoint to send your emails.
  - title: 🔐 Secure by default
    details: "Both authentication and API endpoint are always secure: use one of the pre-built auth system or bring your own."
  - title: 📎 Attachments
    details: Upload files or fetch them from a remote source such S3, Spaces etc.
  - title: 👩‍💻 Hackable
    details: MailCarrier relies on <a href="https://laravel.com/" target="_blank">Laravel</a> and <a href="https://filamentphp.com/" target="_blank">Filament</a>, that means that over 30K packages are available to customise your MailCarrier instance.
  - title: ⏳ Background jobs
    details: You can choose whether or not to send emails in a enqueued, background jobs, to not block the user experience.
  - title: '🧩 MJML integration <em style="opacity: .7; font-size: 12px">(coming soon)</em>'
    details: Design responsive emails quickly thanks to <a href="https://mjml.io/" target="_blank">MJML framework</a>.
---

<style>
#VPContent.is-home {
  background-image: radial-gradient(circle at center,#3730a3,#1f2937,#111827 100%);
}

article.box {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a;
}
</style>