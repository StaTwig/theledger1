#!/bin/bash


#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repos
rm -rf /home/ubuntu/PRD/theledger

# clone the repo again
cd /home/ubuntu/PRD
git clone https://gitlab.com/statwig-public/theledger.git
cd /home/ubuntu/PRD/theledger

git checkout autodeploy_testdev
#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
#source /home/ubuntu/.nvm/nvm.sh
#test1
echo "deploying the frontend 1"
cd /home/ubuntu/PRD/theledger/frontend
npm install
npm run build

echo "deploying the backend"
cd /home/ubuntu/PRD/theledger/backend
echo "goig to start process"

  cd -P .
      for dir in ./*/
         do cd -P "$dir" ||continue
         echo "curr dir $PWD"
         printf %s\\n "$PWD" >&2
	 npm install && pm2 start && cd "$OLDPWD" ||
         ! break; done || ! cd - >&2

echo "deployed the backend"
