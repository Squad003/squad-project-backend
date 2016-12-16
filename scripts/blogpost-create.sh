API="http://localhost:4741"
URL_PATH="/blogposts"
TITLE="BlogPost2"
CONTENT="Content2"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "blogpost": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
    }
  }'
