#!/bin/sh
cd backend

  cd -P .
      for dir in ./*/
         do cd -P "$dir" ||continue
            printf %s\\n "$PWD" >&2
            npm install && pm2 start && cd "$OLDPWD" ||
         ! break; done || ! cd - >&2

