#!/bin/bash

API="http://localhost:4741"
URL_PATH="/blogposts"
ID=58540b25d94ff9a1992d2163

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json"
  # --header "Authorization: Token token=$TOKEN"
