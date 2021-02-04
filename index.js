#!/usr/bin/env node

const string = process.argv[2];

const result = string
  .split("")
  .map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
  )
  .join("");

console.log(result);
