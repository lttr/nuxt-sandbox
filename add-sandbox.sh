#!/bin/bash

# Arguments
# $1 - name of the sandbox

pnpm create nuxt@latest "$1" --packageManager=pnpm --gitInit=false --modules="" 
