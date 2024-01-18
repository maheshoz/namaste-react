## 08

Class components

```js
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: john@yahoo.com</h4>
      </div>
    )
  }
}

export default UserClass;
```

functional 
```js
const User = ({name}) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>Contact: john@yahoo.com</h4>
    </div>
  )
}

export default User;
```