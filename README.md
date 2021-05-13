## Run the below commands to setup the project

```
npm install
npx husky add .husky/pre-push "npm run lint && npm run pretty"
```

## Create a file called .env and add the below environemnt variables

```
VUE_APP_API=<vue-api-url>
```
