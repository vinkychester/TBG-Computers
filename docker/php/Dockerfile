ARG PHP_VERSION=8.2

# Versions
FROM php:${PHP_VERSION}-fpm-alpine AS php_base

RUN apk update && apk add --no-cache --update $PHPIZE_DEPS \
    git \
    bash \
    zip \
    curl

# PHP extensions
RUN docker-php-ext-install opcache pdo pdo_mysql mysqli
RUN docker-php-ext-enable opcache

WORKDIR /srv/tbg-computers

COPY . .