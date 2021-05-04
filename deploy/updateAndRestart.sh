
source /home/ubuntu/.bashrc
touch /home/ubuntu/IWasHere
cd theledger
./stop.sh
cd ..
rm -rf theledeger
git clone https://gitlab.com/statwig-public/theledger.git
cd theledger
git checkout ST-90
git pull
cd frontend
npm install
ENVIRONMENT=test npm run build
sudo rm -rf /var/www/html/dist
sudo cp -r dist /var/www/html/
sudo cp index.html /var/www/html/
cd ..
cp ../predeployscripts/pre-deploy-test.sh ./
./deploy.sh TEST ALL
sudo systemctl start nginx