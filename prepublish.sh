#!/bin/sh
node make
rm npm-debug.log
mv pro-dev.js ../.tmp.js
mv pro-dev.h ../.tmp.h