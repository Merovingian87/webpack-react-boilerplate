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
minified and partially optimized with a much smaller file size for production.

# How Webpack and React Work
Your server will statucally serve index.html which includes a single <div> with an id of "root" followed by 
a <script> tag that has your bundle.js file as its source.
The idea with WebPack and react is to build all your app from multiple separated modules that are 'called' 
in a tree fashion all the way from the main <App /> component.

The index.jsx file is your starting point, it imports <App /> and uses the ReactDOM.Render method to establish 
the link between your component and the DOM.

Webapck will use index.jsx as the entry point from which to build the bundle.js file. 
Bundle.js will have all your components transpiled into ES3 (old and always compatible JavaScript) and assambled 
into a single js file which will anchor your entire React app into the root div on your html doc.