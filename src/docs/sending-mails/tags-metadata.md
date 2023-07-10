---
title: Tags & Metadata
description: Set tags and metadata to your email 
---

# Tags & Metadata

Some SMTP provider, such as [MailGun](https://documentation.mailgun.com/en/latest/api-tags.html), accept tags and metadata to track emails and create metrics.  

## Tags

Tags are just an array of string, nothing fancy.

```shell
curl -XPOST \
  -H 'Authorization: Bearer xxxxx' \
  -H "Content-type: application/json" \
  -d '{"recipient":"foo@example.org","subject":"My first email","template":"welcome","tags":["newsletter","welcome"]}' \
  http://localhost:8000/api/send
```

## Metadata

```shell
curl -XPOST \
  -H 'Authorization: Bearer xxxxx' \
  -H "Content-type: application/json" \
  -d '{"recipient":"foo@example.org","subject":"My first email","template":"welcome","metadata":{"orderId":1}}' \
  http://localhost:8000/api/send
```