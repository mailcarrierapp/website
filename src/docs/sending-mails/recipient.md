---
title: Recipient
description: Define the recipient 
---

# Recipient

Defining the recipient is as simple as declaring the `recipient` variable that must be a **valid email address**.

```json
{
  // Other variables
  "recipient": "foo@example.org"
}
```

## Multiple recipients

If you need to send the same email to multiple recipients you can do it as well by using the `recipients` key instead of `recipient`:

```json
{
  // Other variables
  "recipients": [
    "foo@example.org",
    "bar@example.org"
  ]
}
```

You can even define specific [variables](/docs/sending-mails/variables), [cc, bcc](/docs/sending-mails/api-endpoint#cc-bcc) and more for each single recipient.  
Per-recipient data will be merged with *global data*, take an example to this snippet:

```json
{
  // Other variables
  "recipients": [
    {
      "email": "foo@example.org",
      "variables": {
        "name": "Foo"
      }
    },
    {
      "email": "foo@example.org",
      "cc": "bar2@example.org"
    }
  ],
  "variables": {
    "companyName": "MailCarrier",
    "name": "Default"
  },
  "cc": "global+cc@example.org",
}
```

What will happen here:

1. The first email will be sent to `foo@example.org` with `name: Foo` and `cc: global+cc@example.org`;
2. The second email will be sent to `bar@example.org` with `name: Default` and `cc: bar2@example.org`.

Both emails will have access to the `companyName: MailCarrier` variable. The same applies to [attachments and remote attachments](/docs/sending-mails/attachments). 
