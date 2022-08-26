#!/bin/bash

problemName=$1
mkdir "problems/$problemName"

# Make JS File
echo "const start = Date.now();

console.log(`\${(Date.now() - start) /1000} seconds`);" > "problems/$problemName/app.js"

echo
echo "Problem $problemName Created Successfully!"
echo
exit 0
