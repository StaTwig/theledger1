#!/bin/bash


#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repo
rm -rf /home/ec2-user/PRD/theledger

# clone the repo again
cd /home/ec2-user/PRD
git clone https://gitlab.com/statwig-public/theledger.git

#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
#source /home/ubuntu/.nvm/nvm.sh
#test


services="blockchain_service"

for line in $services; do
echo "Starting $line service"
cd /home/ec2-user/PRD/theledger/backend/$line
echo "curr dir $PWD"
echo "Running npm install"
npm install
npm start &
#pm2 startttt
echo "Started $line service"
cd ../..
echo "curr back dire $PWD"
done

