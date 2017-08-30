#!/bin/bash
echo "You can optionally answer the question, or 'enter' for defaults: (recommend setting common name to localhost)"
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 3650 -out cert.pem
