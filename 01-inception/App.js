
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
