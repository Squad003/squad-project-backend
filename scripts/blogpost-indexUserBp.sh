#!/bin/bash

ID="585443c562c26f0746c12ba6"
TOKEN="r0VuzjyFIFn/sU6A6k4x5683H65uHF5ca76Pjd0Id1A=--4HfBOROy3Y8OejJmi2jr/K29BJs714g4RWZ5pGVy3LI="

curl --include --request GET http://localhost:4741/blogposts/$ID \
  --header "Authorization: Token token=$TOKEN"
