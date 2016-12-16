#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
TOKEN="OWc17eij70YdnEgRK+0tDrZi0my7/F5NJHGe18wmTFA=--HQmgUZBgoAsU1iW/GcnDfAMUFF+Xm+TjXwDeIQ/2P8Q="
ID="585419c72c4deff94b527104"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
