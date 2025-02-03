import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return (
        <div className="user-card">
            <h1>Name: Aish</h1>
            <h2>Location: Jaipur</h2>
            <h3>Contact: @AishJoshi2002</h3>
            <h4>Email:{props.email}</h4>
            <h5>Count: {count}</h5>
            <h6>Count2: {count2}</h6>
        </div>
    )
}

export default User;