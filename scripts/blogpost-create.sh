API="http://localhost:4741"
URL_PATH="/blogposts"
TITLE="BlogPost7"
CONTENT="Content7"
TOKEN="OWc17eij70YdnEgRK+0tDrZi0my7/F5NJHGe18wmTFA=--HQmgUZBgoAsU1iW/GcnDfAMUFF+Xm+TjXwDeIQ/2P8Q="

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "blogpost": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
    }
  }'
