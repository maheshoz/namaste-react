
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