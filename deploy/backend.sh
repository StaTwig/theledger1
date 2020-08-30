#!/bin/bash


# any future command that fails will exit the script
set -e

echo "home is" $HOME
BASE_DIR=$HOME/PRD
if [ -d "$BASE_DIR/releases" ]; then
  ### Take action if $DIR exists ###
  echo "Already exists..."
else
  mkdir -p $HOME/PRD/releases
fi

if [ -d "$BASE_DIR/temp" ]; then
  ### Take action if $DIR exists ###
  echo "Already exists..."
else
 mkdir -p $HOME/PRD/temp
fi

if [ -d "$BASE_DIR/current" ]; then
  ### Take action if $DIR exists ###
  echo "Already exists..."
else
mkdir -p $HOME/PRD/current
fi

if [ -d "$BASE_DIR/current/theledger" ]; then

mv $HOME/PRD/current/theledger $HOME/PRD/temp/

fi

# clone the repo again
cd $HOME/PRD/current
git clone https://gitlab.com/statwig-public/theledger.git
cd $HOME/PRD/current/theledger
git checkout autodeploy_latest
python2.7 $HOME/PRD/current/theledger/deploy/aws.py start
echo "Starting instances"
cd $HOME/PRD/current/theledger
#Kill all the running process
#pm2 kill
sh /home/ubuntu/predeployscripts/pre-deploy-test.sh
#sh stop.sh
#cd backend
#Starting the new deploy servicess
#cd -P .
 # for dir in ./*/
  #     do cd -P "$dir" ||continue
  #    echo "curr dir $PWD"
   #    printf %s\\n "$PWD" >&2
   #    npm install && pm2 start && cd "$OLDPWD" ||
   #  ! break; done || ! cd - >&2
rm -rf /home/ubuntu/.pm2
sh stop.sh
./deploy.sh TEST ALL
sudo systemctl start nginx
    
if [ -d "$BASE_DIR/temp/theledger" ];then

mv $HOME/PRD/temp/theledger $HOME/PRD/releases/theledger_`date '+%Y%m%d'`

fi

