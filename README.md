# Webpack-react-App
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
The current server is a simple node/express app that listens on port 8000.
It does nothing but to serve static files from the "public" directory.
  
# Base Components
This boilerplate only includes 2 simple sample components: 'App' and 'OtherComp':
App is built as a traditional Class-Based component and OtherComp is built as a Functional
Component using an ES6 Arrow function and modern hooks:
https://reactjs.org/docs/hooks-intro.html

# Development Mode
As you tinker with your components webpack will trigger a new build on every new save.

# Production Mode
If you are not gonna keep tinkering with the front-end anymore, you can replace 'npm run watchBuild'
with 'npm run build' to generate a single bundle.js and exit the program freeing your console. 
Additionally, you will have to make a single change on your 'webpack.config.js' file: change the word 
'development' for 'production'. It will take a longer time to build the bundle but it will alredy be 
minified and partially optimized with a much smaller file size for deployment.

# How Webpack and React Work
Your server will statically serve index.html which includes a single div tag with an id of "root" followed by 
a script tag that has your bundle.js file as its source.

The idea with WebPack and react is to build all your app from multiple separated modules that are 'called' 
(potentially in a very nested tree fashion) all the way up from the main App component.

The index.jsx file is your starting point, it imports 'App' and uses the ReactDOM.Render method to establish 
the link between your component and the DOM.

Webapck will use index.jsx as the entry point from which to build the bundle.js file. 
Webpack will leverage Babel to transpile the all the ES6+ JS and the React JSX into ES3 (old and always compatible 
JavaScript) and assambled all of it into a single bundle.js file which will anchor your entire React app onto 
the root div of your html doc.