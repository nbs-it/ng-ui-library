cd demo
npm install ng-ui-library@latest
cd client/app
sed -i "6d;13d" app.js
sed -i "8iimport NgUiLibrary from 'ng-ui-library';" app.js
sed -i "13iNgUiLibrary" app.js
cd ../..
npm run build
cd ..
mv demo/dist public
mv demo/client/vendors public
