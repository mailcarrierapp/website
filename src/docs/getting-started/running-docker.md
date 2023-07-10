---
title: Running with Docker
description: Install MailCarrier via Docker
---

# Running with Docker

Docker images are hosted under the [`mailcarrier/mailcarrier`](https://hub.docker.com/repository/docker/mailcarrier/mailcarrier) name.  

```shell
docker run -p 80:80 -ti mailcarrier/mailcarrier
```

## Security

By default the app runs with a public "App Key" for testing purposes; it's being used to encrypt everything in MailCarrier, so you should use a <u>random, unique, string</u>.  
To generate a string, you can run the following command inside your container:

```shell
php artisan key:generate --show
```

Then pass the given value as an env value when running your app:

```shell
docker run -e APP_KEY=mysecretstring -p 80:80 mailcarrier/mailcarrier
```

## Configuration

Always because of testing purposes, the image runs on a volatile `sqlite` database, but you should definitely connect the app the a proper, persistent mounted database, such as **MySQL** or **PostgreSQL**.  
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