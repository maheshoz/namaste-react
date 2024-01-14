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

