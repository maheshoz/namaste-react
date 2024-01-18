import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    // console.log(props);

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
        <h1>Count: {this.state.count}</h1>
        <button 
          onClick={
            ()=>{
              this.setState({
                count: this.state.count+1
              })
            }
          }>
          Update count
        </button>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: john@yahoo.com</h4>
      </div>
    )
  }
}

export default UserClass;