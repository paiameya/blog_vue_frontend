npm install
npx husky add .husky/pre-push "npm run lint && npm run pretty"
