ID="5857f602b55fc969f925f2c1"
TOKEN="NvYZ5Fq/ZSV4F2tEq8SOzQUC9bq3sPmq/l/Q/fepG1k=--c7WtGt/2uJ89W689c8i/NC6DQE4MFuT2D7mfxu6u49w="

curl --include --request GET http://localhost:4741/pages/$ID \
  --header "Authorization: Token token=$TOKEN"
