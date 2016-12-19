API="http://localhost:4741"
URL_PATH="/pages"
TITLE='Page2'
CONTENT='Content2'
ID="5857f602b55fc969f925f2c1"
TOKEN="D++cImv+zt44f+MVU3bgmLQ5i9yf/9u0DXnNmGXDxe8=--Qn0xE+XiMrbu9A8d8jJjoALYcLKSm72ETY06w+vJDpE="

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "page": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
    }
  }'
