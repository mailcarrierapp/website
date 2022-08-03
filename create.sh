#!/bin/bash

# Create project
composer create-project laravel/laravel mailcarrier
cd mailcarrier

# Cleanup env file
ENV=$(sed '/^VITE_/d' .env.example)
ENV=$(echo "$ENV" | sed '/^PUSHER_/d')
ENV=$(echo "$ENV" | sed '/^BROADCAST_DRIVER/d')
ENV=$(echo "$ENV" | sed '/^SESSION_/d')

echo "$ENV" > .env.example
echo -e "\n# MailCarrier\nMAILCARRIER_AUTH_GUARD=auth:sanctum"
echo "$ENV" > .env

# Regenerate app key
php artisan key:generate

# Require MailCarrier
composer require mailcarrier/mailcarrier

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Have fun!
echo -e "${GREEN}MailCarrier installed! What's next:${NC}\n"
echo -e "• Review your ${BLUE}database env variables${NC}\n"
echo -e "• Complete the installation by running ${BLUE}php artisan mailcarrier:install${NC}\n"
