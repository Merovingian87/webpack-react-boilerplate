# webpack-react-App
This is a simple boilerplate to get you started with React.js

# Setup

```sh
0) Clone down this repo into your local machine.
1) CD into the root directory.
2) Run 'npm install'   > to add all necessary dependencies via NPM (Node Packe Manager).
3) Run 'npm run watchBuild'  > to generate a bundle.js file
4) Run 'npm start'  > to start the server
5) Open localhost:8000 on a browser :)
```

# Server Details
The current server is a simple node.js app listens on port 8000.
It only serves static files from the "public" directory.

# Base Components
This boilerplate only includes 2 simple sample components: <App /> and <OtherComp>:
App is built as a traditional class-based component and OtherComp is built an functional
Component using an ES6 Arrow function and modern hooks:
https://reactjs.org/docs/hooks-intro.html

# Development Mode
As you tinker with your components webpack will trigger a new build on every new save.

# Production Mode
If you are not gonna keep tinkering with the front-end anymore, you can replace 'npm run watchBuild'
with 'npm run build' to generate a single bundle.js and exit the program freeing your console. 
Additionally, you will have to make a single change on your 'webpack.config.js' file: change the word 
'development' for 'production'. It will take a longer time to build the bundle but it will alredy be 
minified and partially optimized witha much smaller file size for production.