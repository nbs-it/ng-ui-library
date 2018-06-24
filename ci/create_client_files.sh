mv ./src ./demo/client
mv ./package.json ./demo/client
sed -i "s/..\/..\/..\/src\/common/..\/src\/common/g" ./demo/client/app/app.js
npm install npm@latest -g
npm install --prefix ./demo
npm install --prefix ./demo/client
npm run build --prefix ./demo
mv ./demo/dist ./public
mv ./demo/client/vendors ./public
