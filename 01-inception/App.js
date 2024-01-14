import React from "react";
import ReactDOM  from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  {id: "heading"},
  "Hello from  react element"
)
// JSX - XML/HTML like syntax
// jsx (transpiled before it reaches the js) - parcel - Babel
// this is react Element
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">Hello from JSX - react element</h1>
);

// this is react component
const HeadingComponent = () => {
  return <h1>Functional COmponent</h1>
}

const Title = () => (
  <h1 className="heading">
    Title h1
  </h1>
)

const DivComponent = () => (
  <div id="container">
    <h1>Functional COmponent</h1>
    {20 +30}
    {jsxHeading}
    
    <Title/>
    <Title></Title>
    {Title()}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading) // rendering react element
// root.render(<HeadingComponent/>) // rendering react component
root.render(<DivComponent/>)