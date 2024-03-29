---
title: Recipient
description: Define the recipient 
---

# Variables

Variables allows to dynamically serve the same template with different data, for example for different users.  
They're just an object, so you can use whatever type you want and with whatever depth. For example, we could define the **user name** (*string*), the **purchased items** (*array*) and an *optional* **call to action** (*object*).

```json
{
  "subject": "Thank you for your purchase"
  "recipient": "foo@example.org",
  "variables": {
    "name": "Foo",
    "items": [
      "Item 1",
      "Item 2",
    ],
    "callToAction": {
      "label": "Review your order",
      "url": "https://example.org/profile"
    }
  }
}
```

Then, in our template, we can display and interact with these variables, such as displaying a section of code only if a variable exists.

```twig
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Thank you for your order!</h1>
    
    <p>Yo {{ name }}, this is the recap of your order:</p>

    <ul>
    {% for item in items %}
      <li>{{ item }}</li>
    {% endfor %}
    </ul>

    {% if callToAction %}
      <a href="{{ callToAction.url }}" target="_blank">
        {{ callToAction.label }}
      </a>
    {% endif %}
  </body>
</html>
```