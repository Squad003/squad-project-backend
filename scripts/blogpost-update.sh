API="http://localhost:4741"
URL_PATH="/blogposts"
TITLE='Blogpost4'
CONTENT='Content4'
ID="58543513bbe28800e2b52f4b"
TOKEN="OWc17eij70YdnEgRK+0tDrZi0my7/F5NJHGe18wmTFA=--HQmgUZBgoAsU1iW/GcnDfAMUFF+Xm+TjXwDeIQ/2P8Q="

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "blogpost": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
    }
  }'
