import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

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

const AboutFC = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is about page</h2>
      <User name="john function"/>
      <UserClass name="john class" location="mumbai"/>
    </div>
  )
}

export default About;