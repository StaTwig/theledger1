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
cd /home/ec2-user/PRD/theledger/backend

  cd -P .
      for dir in ./*/
         do cd -P "$dir" ||continue
         echo "curr dir $PWD"
         printf %s\\n "$PWD" >&2
	 npm install && ( npm start & )&& cd "$OLDPWD" ||
         ! break; done || ! cd - >&2


