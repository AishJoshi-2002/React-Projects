import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); // without it, will throw error
        // console.log(props);

        // best place to create state variables
        this.state = {
            count: 0,
            count2: 1
        }
        // loading this class
        // State was created when a instance of class is created.
    }

    componentDidMount() {
        console.log("Child Component did mount")
    }

    render() {
        return (
            <div className="user-card">
            <h1>Name: Aish</h1>
            <h2>Location: Jaipur</h2>
            <h3>Contact: @AishJoshi2002</h3>
            <h4>Email: {this.props.email}</h4>
            <h5>Count: {this.state.count}</h5>
            <button onClick={() => {
                // NEVER DIRECTLY UPDATE YOUR STATE VARIABLES
                // this.state.count = this.state.count + 1 // WRONG

                this.setState({
                    count: this.state.count + 1
                })
            }}>cnt inc++</button>
            <h6>Count2: {this.state.count2}</h6>
        </div>
        )
    }
}

export default UserClass;

// mounted, Life cycle
// loading, mounting the component to the web page
// instance of the class created => constructor is called
// then render is called
// then component did mount: used for making API calls
// render component => API call => fill data