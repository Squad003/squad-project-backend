API="http://localhost:4741"
URL_PATH="/blogposts"
TITLE='Blogpost4'
CONTENT='Content4'
ID=58540b25d94ff9a1992d2163

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "blogpost": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
    }
  }'
