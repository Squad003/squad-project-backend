
API="http://localhost:4741"
URL_PATH="/pages"
ID="5858084c9a722c888c8a6d46"
TOKEN="D++cImv+zt44f+MVU3bgmLQ5i9yf/9u0DXnNmGXDxe8=--Qn0xE+XiMrbu9A8d8jJjoALYcLKSm72ETY06w+vJDpE="

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
