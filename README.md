npm install
npm prepare
npx husky add .husky/pre-push "npm run lint && npm run pretty"
