#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
TOKEN="leWyxPAyvnxunLrXN1rWNLmIK82At/R7eb6OOjSqs9g=--nVq394wu+J9Yz6HK6KqvxqWKU8GSNvripgznpze5euY="
ID="585443b262c26f0746c12ba5"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
