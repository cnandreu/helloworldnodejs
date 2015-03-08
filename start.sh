cd /tmp

# try to remove the repo if it already exists
rm -rf helloworldnodejs; true

git clone https://github.com/cnandreu/helloworldnodejs.git

cd ./helloworldnodejs/nodeapp

npm install

node .