#!/bin/bash


#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repos
rm -rf $HOME/theledger

# clone the repo again
git clone https://gitlab.com/statwig-public/theledger.git
cd ./theledger

git checkout development
#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
#source /home/ubuntu/.nvm/nvm.sh
#test1
echo "deploying the frontend"
cd $HOME/theledger/frontend
export PATH=$PATH:/home/ubuntu/node/bin
npm install
ENVIRONMENT=test npm run build

echo "deploying the backend"
cd $HOME/theledger/backend
echo "Staring the build and deployment of services..... Go Grab a "
printf '\U2615\n'
cd -P .
for dir in ./*/
    do cd -P "$dir" ||continue
    echo "curr dir $PWD"
    printf %s\\n "$PWD" >&2
    npm install && pm2 start && pm2 save && cd "$OLDPWD" ||
    ! break; done || ! cd - >&2

echo "deployed the backend"
