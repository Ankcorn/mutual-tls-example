# Intro

This repo contains a reference setup for a nginx as a https reverse proxy

[x] Test client to check that the config is correct

[x] https with tls 1.2

[x] mutual tls

# Links
https://blog.codeship.com/how-to-set-up-mutual-tls-authentication/ - Mutual TLS blog

Still implementing the mutual TLS

## Wou want keys, have some keys :)

```
cd nginx/certs
openssl genrsa -des3 -passout pass:x -out server.pass.key 4096
openssl rsa -passin pass:x -in server.pass.key -out entity_extraction.key
rm server.pass.key
openssl req -new -key entity_extraction.key -out server.csr
openssl x509 -req -sha256 -days 365 -in server.csr -signkey entity_extraction.key -out entity_extraction.crt
```

## Instructions

To test the implementation of HTTPS follow these steps

```
    git clone ...
    cd ee-nginx
    npm install
    # gen keys
    docker-compose up -d
    npm test
```

## TLS Implementation notes

### Setup certificate authority

Create a private key with a password for the CA

```openssl genrsa -aes256 -out ca/ca.key 4096```

Aplay the correct permissions to the private key. This should be kept offline and it's access should be tightly controlled.
```chmod 400 ca/ca.key```

Create the root CA certificate

```openssl req -new -x509 -sha256 -days 730 -key ca/ca.key -out ca/ca.crt```

Add the correct permissions to the root CA cert

```chmod 444 ca/ca.crt```

### The Certificate Signing Request (CSR)

Generate 2048 bit public key

```openssl genrsa -out certs/entity-extraction.key 2048```

Set permissions on public key

```chmod 400 certs/entity-extraction.key```

Generate the certificate signing request

```openssl req -new -key certs/entity-extraction.key -sha256 -out certs/entity-extraction.csr```


###  Create the server cert

Use the root ca cert to complete the csr and generate a certificate

```openssl x509 -req -days 365 -sha256 -in certs/entity-extraction.csr -CA ca/ca.crt -CAkey ca/ca.key -set_serial 1 -out certs/entity-extraction.crt```

Set Permissions on crt

```chmod 444 server/entity-extraction.crt```

### Generate client keys

Generate client key

```openssl genrsa -out client/ee.key 2048```

Generate client csr

```openssl req -new -key client/ee.key -out client/ee.csr```

Create client cert

```openssl x509 -req -days 365 -sha256 -in client/ee.csr -CA ca/ca.crt -CAkey ca/ca.key -set_serial 2 -out client/ee.crt```






