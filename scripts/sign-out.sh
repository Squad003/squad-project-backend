#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
TOKEN="WA7a/mLP4ErEduZm7TRNbVN9lGFxcaoPtk4CLkmYU5w=--tXeSSTJG9Y6WNp3V684/xSlifX6GLM65nBR49wsdxDk="
ID="5857f602b55fc969f925f2c1"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
