#!/bin/sh

head='\/\/ team-functions-begin'
tail='\/\/ team-functions-end'
sed -e "/$head/,/$tail/{ /$head/{p; r get-team-3.js
        }; /$tail/p; d }" test-template.html
