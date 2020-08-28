
#!/bin/bash

set -e

eval $(ssh-agent -s)
echo "$SSH_PRIVATE_KEY_TS" | tr -d '\r' | ssh-add - > /dev/null
echo "$SSH_PRIVATE_KEY_FE" | tr -d '\r' | ssh-add - > /dev/null

./deploy/disableHostKeyChecking.sh

# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# ciomma seperated values of ip addresses..
DEPLOY_SERVERS_BE=$DEPLOY_SERVERS_TS
DEPLOY_SERVERS_FE=$DEPLOY_SERVERS_FE

echo "Deploying too ${DEPLOY_SERVERS_BE}"
ssh ubuntu@${DEPLOY_SERVERS_TS} 'bash' < ./deploy/backend.sh
echo "Deploying too ${DEPLOY_SERVERS_FE}"
ssh ubuntu@${DEPLOY_SERVERS_FE} 'bash' < ./deploy/frontend.sh

