API="http://localhost:4741"
URL_PATH="/blogposts"
TITLE="BlogPostC3"
CONTENT="ContentC3"
TOKEN="mWP79tX02ksy0H/8fBdSNU2fVd8yKl3LnQdFTCXASvo=--Eo5elKEQHZTbiOE1r6eVXZ90bf1fhFzEr/W5JkcXw0U="

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
