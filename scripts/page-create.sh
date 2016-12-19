API="http://localhost:4741"
URL_PATH="/pages"
TITLE="BlogPostC3"
CONTENT="ContentC3"
TOKEN="D++cImv+zt44f+MVU3bgmLQ5i9yf/9u0DXnNmGXDxe8=--Qn0xE+XiMrbu9A8d8jJjoALYcLKSm72ETY06w+vJDpE="

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "page": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'"
    }
  }'
