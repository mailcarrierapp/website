---
title: Running with Docker
description: Install MailCarrier via Docker
---

# Running with Docker

Docker images are hosted under the [`mailcarrier/mailcarrier`](https://hub.docker.com/repository/docker/mailcarrier/mailcarrier) name.  

```shell
docker run -e APP_KEY="base64:$(head -c 32 /dev/urandom | base64)" -p 80:80 --name mailcarrier_app mailcarrier/mailcarrier
```

## Security

As you may have noticed from the command above we generate a random `APP_KEY` (32 bytes) at every run, but this is just for testing purposes.  
That key is being used to encrypt everything in MailCarrier, so you should generate a static, <u>private random string</u> to pass it to every container run.  

```shell
echo "base64:$(head -c 32 /dev/urandom | base64)"
```

Then pass the given value as an env value when running your app (be sure it includes the `base64:` prefix):

```shell
docker run -e APP_KEY="..." -p 80:80 --name mailcarrier_app mailcarrier/mailcarrier
```

## Creating the first user

You can leaverage the same MailCarrier commands as the classic installation to create your first user and just follow the wizard:

```shell
docker exec /bin/sh -c "php artisan mailcarrier:user"
```

## Configuration

By default MailCarrier container runs on an ephemeral SQLite instance for testing purposes.  If you don't bind that database to a volume, or use a persistent classic database such as **MySQL** or **PostgreSQL**, your changes could be lost with container shutdowns.  
You can find an example of the environment variables to customise the app in the [`.env.example` file](https://github.com/mailcarrierapp/app/blob/master/.env.example), for example to connect a database and a redis queue it would be something like:

```shell
docker run \
  -e APP_KEY=mysecretstring \
  -e DB_CONNECTION=mysql \
  -e DB_HOST=mysql_host \
  -e DB_USERNAME=mailcarrier \
  -e DB_PASSWORD=secretdbpassword \
  -e QUEUE_CONNECTION=redis \
  -e REDIS_HOST=redis_host \
  -p 80:80 \
  mailcarrier/mailcarrier
```
