#!/bin/bash


#python2.7  $HOME/theledger/deploy/aws.py start

# any future command that fails will exit the script
set -e

# Delete the old repos
rm -rf $HOME/theledger

# clone the repo again
git clone https://gitlab.com/statwig-public/theledger.git
cd ./theledger

#git checkout development
git checkout autodeploy_latest
cd $HOME/theledger/frontend
export PATH=$PATH:$HOME/node/bin
npm install
ENVIRONMENT=test npm run build
echo "Uploading the files"
echo "$pwd"
chmod 600 $HOME/keys/testdevserver.pem
#testdevserverttt
scp -r -i $HOME/keys/testdevserver.pem /home/ubuntu/theledger/frontend/dist  ubuntu@ec2-13-232-141-136.ap-south-1.compute.amazonaws.com:/home/ubuntu/build_files
scp -r -i $HOME/keys/testdevserver.pem /home/ubuntu/theledger/frontend/index.html  ubuntu@ec2-13-232-141-136.ap-south-1.compute.amazonaws.com:/home/ubuntu/build_files/index.html_`date '+%m%d'.'%H'00`

python2.7  $HOME/theledger/deploy/aws.py stop
