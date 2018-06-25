# move src files into client folder
mv ./src ./demo/client
mv ./package.json ./demo/client
sed -i "s/..\/..\/..\/src\/common/..\/src\/common/g" ./demo/client/app/app.js

# install npm modules
npm install npm@latest -g
npm install --prefix ./demo
npm install --prefix ./demo/client

# build dist files
npm run build --prefix ./demo

# move dist files into public folder
mv ./demo/dist ./public
mv ./demo/client/vendors ./public
