# Intro

This repo contains a reference setup for a nginx as a https reverse proxy

[x] Test client to check that the config is correct

[x] https with tls 1.2

[x] mutual tls

# Links
https://blog.codeship.com/how-to-set-up-mutual-tls-authentication/ - Mutual TLS blog

## Instructions

To test the implementation of HTTPS follow these steps

```
    git clone ...
    cd ee-nginx
    npm install
    ./nginx/gen_certs.sh
    docker-compose up -d
    npm test
```

