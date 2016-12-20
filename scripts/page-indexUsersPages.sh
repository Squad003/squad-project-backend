ID="5857f602b55fc969f925f2c1"
TOKEN="+qED0MXnPKS2iJg7OcEN7QT6ilT7wUb00pxhpcvQljM=--a2x/SR461Do2ogBguAWyM8KyTLs/jrhgerh8n6tH54M="

curl --include --request GET http://localhost:4741/pages/me/$ID \
  --header "Authorization: Token token=$TOKEN"
