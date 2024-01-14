creating h1 and adding to div with js
```html
  <div id="root">
    
  </div>

  <script>
    const heading = document.createElement("h1");
    heading.innerText = "Hello World";

    const root = document.getElementById("root");
    root.appendChild(heading)
  </script>
```

using React.js with CDN

```js
React.createElement(htmlElement, htmlAttributes, htmlTextorChildren[])

const heading = React.createElement("h1", {id: "heading1"}, "Hello World from React h1 element");
const root = ReactDOM.createRoot(heading)
root.render(root)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Namaste React</title>
</head>
<body>
  <div id="root"></div>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <script>
    const heading = React.createElement("h1", {}, "Hello World from React h1 element");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);

  </script>

</body>
</html>
```

App.js
```js
const heading = React.createElement(
  "h1",
  {id: "heading", title : "react heading1"},
  "Hello World from React h1 element"
);

console.log(typeof heading); //object
console.log("react create Element h1", heading);

// $$typeof: Symbol(react.element)
// type : "h1"
// props : {id : 'heading', title: 'react heading1', children: 'hello world from react h1 element'}
//......

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

```

```js

{/* 
  <div id="parent">
    <div id="child">
      <h1>header1</h1>
      <h2>header2</h2>
    </div>
  </div> 
*/}


const parent = React.createElement(
  "div",
  {id: "parent", key: 'parentKey'},[
    
    React.createElement("div", {id: 'child', key: 'div1'}, 
    [React.createElement("h1",{key:'a'}, "header1"), React.createElement("h1",{key:'b'}, "header2")]),
    React.createElement("div", {id: 'child2', key: 'div2'}, 
    [React.createElement("h1",{key: 'c'}, "header1"), React.createElement("h1",{key: 'd'}, "header2")])
  ]
)

console.log('parent div', parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

```
we can add key attribute in createElements attributes, **but in html key attribute will not be visible, can be fount in elements object property**

```js
// <div id="parent">...</div>

// $$typefo : Symbol(react.element)
// key: "parentKey"
// props: {id: 'parent', children: Array(2)}
// type: "div"
//.....
```

Order to add script in js- in title, in body end etc , async, defer, why crossorigin


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Namaste React</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1>Learning react</h1>
  <div id="root">
    <h1>will be replaced by render methods react element</h1>
    <h1>header</h1>
    <h1>header</h1>
    <h1>header</h1>
    <h1>header</h1>
    <h1>header</h1>
    <h1>header</h1>
    <h1>header</h1>
  </div>

  <p>p after root</p>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- <script src="App.js"></script> -->
  <script>
    
{/* 
  <div id="parent">
    <div id="child">
      <h1>header1</h1>
      <h2>header2</h2>
    </div>
  </div> 
*/}


const parent = React.createElement(
  "div",
  {id: "parent", key: 'parentKey'},[
    
    React.createElement("div", {id: 'child', key: 'div1'}, 
    [React.createElement("h1",{key:'a'}, "header1"), React.createElement("h1",{key:'b'}, "header2")]),
    React.createElement("div", {id: 'child2', key: 'div2'}, 
    [React.createElement("h1",{key: 'c'}, "header1"), React.createElement("h1",{key: 'd'}, "header2")])
  ]
)

const heading = React.createElement(
  "h1",
  {id: "heading", title : "react heading1"},
  "Hello World from React h1 element"
);

// console.log(typeof heading);
console.log("react create Element h1", heading);
console.log('parent div', parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

  </script>

</body>
</html>
```
render replaces the code in root element, we can reload and check 

NPM - node package manager

npm init - to create package.json which is a configuration file for npm


installing dependencies

Bundlers to build, minify - ex. webpack , parcel, vite

```sh
npm install -D parcel
```
Two types of dependencies we can install
* dev dependency - required for development
* normal dependency - used in production

"parcel": "^2.11.0"

**~version** “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

**^version** “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

why package-lock.json - keeps the dependencies exact version 
Transitive denpendencies - when we install parcel it install its dependencies

add `.gitignore` node_modules/

to generate dev build and serve in localhost
```sh
npx parcel index.html
```
parcel creates a dev build and server http://localhost:1234/

npm to install a package
npx to execute a package

```sh
npm install react
npm install react-dom
```
## Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- uses File watching algorithm - written in c++
- Caching - faster builds
- Image Optimization
- Minification , Bundling , Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnostics - Error Handling
- HTTPS
- Tee Shaking - remove unused code
- Different dev an prod build bundles

command To create production build
```sh
npx parcel build index.html
```

Browserslist package - Shared browser compatibility config for popular JavaScript tools like Autoprefixer, Babel, ESLint, PostCSS, and Webpack
```js
//package.json
"browserslist": [
    "last 3 versions"
  ]
```