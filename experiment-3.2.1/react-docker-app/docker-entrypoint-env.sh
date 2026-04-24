#!/bin/sh
set -eu

: "${API_BASE_URL:=http://localhost:3000/api}"

sed "s|__API_BASE_URL__|${API_BASE_URL}|g" \
  /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.js
