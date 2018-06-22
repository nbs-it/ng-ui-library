cd demo
npm install ng-ui-library@latest
sed -i "s/import Common from '..\/..\/..\/src\/common';/import NgUiLibrary from 'ng-ui-library';/g" client/app/app.js
sed -i "s/Common,/NgUiLibrary,/g" client/app/app.js
npm run build
cd ..
mv demo/dist public
mv demo/client/vendors public
