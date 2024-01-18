
## 07

useEffect is called after component renders

- if there is no dependency array, useEffect is called everytime component renders
```js
  useEffect(()=> {
    console.log('useEffect called');
    fetchData();
  });
```

- if there is empty dependency array useEffect is called once on initial render
```js
  useEffect(()=> {
    console.log('useEffect called');
    fetchData();
  }, []);
```

- useEffect is called on dependency state change
```js
  useEffect(()=> {
    console.log('useEffect called');
    fetchData();
  }, [btnText]);
```

- Do not create state variables outside component
- add states on top or first in component
- dont create states based on  if/else condition or in for loop

### Routing

`npm i react-router-dom` 

```js
import {createBrowserRouter , RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About/>
  }
]);

root.render(<RouterProvider router={appRouter}/>);
```

using router dom hook to get the error info
```js
import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error</h1>
      <p>{err.status} : {err.statusText}</p>
      <p>{err.data}</p>
    </div>
  )
}
```


adding props, state to Class component, using this.setState
```js
import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count : 0,
      countTwo: 2
    }
  }
  render() {
    const {name, location} = this.props;

    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>

         <button 
          onClick={
            ()=>{
              this.setState({
                count: this.state.count+1;
              })
            }
          }>
          Update count
        </button>
        <h1>Count: {this.state.countTwo}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: john@yahoo.com</h4>
      </div>
    )
  }
}

export default UserClass;
```

Class Component LifeCycle

```js
class About extends Component {

  constructor(props) {
    super(props)

    console.log("Parent(about) constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }


  render() {
    console.log("Parent(about) render");

    return(
      <div>
        <h1>About</h1>
        <h2>This is about page</h2>
        
        <UserClass name="first" location="mumbai"/>
        <UserClass name="Second" location="mumbai"/>
        <UserClass name="Third" location="mumbai"/>
    </div>
    )
  }
}


class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 0,
     
    }

    console.log(this.props.name + 'Child Constructor called');
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
  }

  render() {
    const {name, location} = this.props;
    console.log(this.props.name + 'Child Render method called');

    return (
      <div className="user-card">
      ....
      </div>
    )
  }
}

```

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/