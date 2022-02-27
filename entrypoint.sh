#!/bin/sh

echo 'Waiting for postgres...'
while ! nc -z postgres 5432; do 
    echo 'retrying to connect to db...'
    sleep 10
done

echo 'PostgreSQL started'

yarn start 