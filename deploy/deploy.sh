
#!/bin/bash

# any future command that fails will exit the script
#set -e
#test line
#i Lets write the public key of our aws instance

eval $(ssh-agent -s)
echo "The chabi of the lock : " 
echo "${PRIVATE_KEY}" 
echo "have you seen the chabi"
echo "$PRIVATE_KEY"
echo "ab dekhi ??? "
echo "$SAMPLE_KEY"
echo "$SAMPLE_KEY" | tr -d '\r' | ssh-add - > /dev/null


# ** Alternative approach
# echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
# chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

# disable the host key checking.
./deploy/disableHostKeyChecking.sh

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
echo "$DEPLOY_SERVERS"
DEPLOY_SERVERS="test.vaccineledger.com"

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
#ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
#echo "ALL_SERVERS ${ALL_SERVERS}"
#test
# Lets iterate over this array and ssh into each EC2 instance
# Once inside the server, run updateAndRestart.sh
#for server in "${ALL_SERVERS[@]}"
#do
echo "deploying to ${DEPLOY_SERVERS}"
#ssh ubuntu@${DEPLOY_SERVERS} "cd /home/ubuntu/PRD && git clone git@gitlab.com:statwig-public/theledger.git && cd /home/ubuntu/PRD/theledger && npm start"
ssh ubuntu@$DEPLOY_SERVERS 'bash' < ./deploy/updateAndRestart.sh
echo "Deployed BRanch ST-90"
#done
#testi11




