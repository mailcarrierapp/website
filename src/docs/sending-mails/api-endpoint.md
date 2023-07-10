---
title: API Endpoint
description: Learn how to use the API endpoint to send emails
---

# API Endpoint

To start sending emails, after you [created a template](/docs/getting-started/your-first-template), you should invoke the `POST /api/send` endpoint, for example:

```shell
curl -XPOST \
  -H 'Authorization: Bearer xxxxx' \
  -H "Content-type: application/json" \
  -d '{"recipient":"foo@example.org","subject":"My first email","template":"welcome"}' \
  http://localhost:8000/api/send
```

That's it. There are a few other available fields too:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="150px">
        <code>recipient</code>
        <p class="text-xs text-red-500 mt-1">Required</p>
      </td>
      <td>String</td>
      <td>The email recipient. It could be a single value or an array of values when using <code>recipients</code> instead.</td>
    </tr>
    <tr>
      <td>
        <code>recipients</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Array</td>
      <td>An array of recipients, required if <code>recipient</code> is not provided. [Learn more on multiple recipients](/docs/sending-mails/recipient#multiple-recipients).</td>
    </tr>
    <tr>
      <td>
        <code>subject</code>
        <p class="text-xs text-red-500 mt-1">Required</p>
      </td>
      <td>String</td>
      <td>The subject of the email.</td>
    </tr>
    <tr>
      <td>
        <code>template</code>
        <p class="text-xs text-red-500 mt-1">Required</p>
      </td>
      <td>String</td>
      <td>The slug of the template to be used.</td>
    </tr>
    <tr>
      <td>
        <code>sender</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>String|Object</td>
      <td>The sender of the current email. If empty, it will be taken from the app settings. [Learn more on settings](/docs/sending-mails/api-endpoint#sender).</td>
    </tr>
    <tr>
      <td>
        <code>variables</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Object</td>
      <td>A key-value object of variables to render the template. [Learn more on variables](/docs/sending-mails/variables).</td>
    </tr>
    <tr>
      <td>
        <code>enqueue</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Boolean</td>
      <td>Choose if sending the email in a background queue; might need a [little setup to work](/docs/sending-mails/queue). **Default**: false.</td>
    </tr>
    <tr>
      <td>
        <code>trigger</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>String</td>
      <td>The trigger name, useful to identify emails coming from multiple sources/applications.</td>
    </tr>
    <tr>
      <td>
        <code>cc</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>String</td>
      <td>Recipient to put in copy for the current email.</td>
    </tr>
    <tr>
      <td>
        <code>bcc</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>String</td>
      <td>Recipient to put in hidden copy for the current email.</td>
    </tr>
    <tr>
      <td>
        <code>attachments</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Array</td>
      <td>The files to be attached to the email.</td>
    </tr>
    <tr>
      <td>
        <code>remoteAttachments</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Array</td>
      <td>List of remote resources to be attached to the email. [Learn more on remote attachments](/docs/sending-mails/attachments#remote-attachments).</td>
    </tr>
    <tr>
      <td>
        <code>tags</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Array</td>
      <td>List of tags to be sent to SMTP provider.</td>
    </tr>
    <tr>
      <td>
        <code>metadata</code>
        <p class="text-xs text-slate-400 mt-1 italic">Optional</p>
      </td>
      <td>Object</td>
      <td>Object of key => value of metadata to be sent to SMTP provider.</td>
    </tr>
  </tbody>
</table>

## Sender

By default MailCarrier will use, as sender, the values defined by your environment variables `MAIL_FROM_ADDRESS` and `MAIL_FROM_NAME` (which can be empty).  
You can override these values at runtime when making an API call by defining the `sender` property:

```json
{
  // Other variables
  "sender": "sender@example.org"
}
```

Or, specifying the name too:

```json
{
  // Other variables
  "sender": {
    "email": "sender@example.org",
    "name": "Sender name"
  }
}
```

## Cc & Bcc

You can specify a **cc** or **bcc** by providing their relative keys to your payload:

```json
{
  // Other variables
  "cc": "cc@example.org",
  "bcc": "bcc@example.org"
}
```
