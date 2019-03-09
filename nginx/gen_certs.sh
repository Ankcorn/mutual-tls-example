echo "Generating Keys for test Mutual TLS"
mkdir ca certs client

echo "Generating Root CA"
openssl genrsa -aes256 -out ca/ca.key 4096 
chmod 400 ca/ca.key
echo "Generating CA crt"
openssl req -new -x509 -sha256 -days 730 -key ca/ca.key -out ca/ca.crt
chmod 444 ca/ca.crt
echo "Generating key"
openssl genrsa -out certs/entity-extraction.key 2048
chmod 400 certs/entity-extraction.key
echo "Signing request"
openssl req -new -key certs/entity-extraction.key -sha256 -out certs/entity-extraction.csr
echo "Generate server cert"
openssl x509 -req -days 365 -sha256 -in certs/entity-extraction.csr -CA ca/ca.crt -CAkey ca/ca.key -set_serial 1 -out certs/entity-extraction.crt
echo "Generate EE client key"
openssl genrsa -out client/ee.key 2048
echo "Generate client CSR"
openssl req -new -key client/ee.key -out client/ee.csr
echo "Generate client Cert"
openssl x509 -req -days 365 -sha256 -in client/ee.csr -CA ca/ca.crt -CAkey ca/ca.key -set_serial 2 -out client/ee.crt