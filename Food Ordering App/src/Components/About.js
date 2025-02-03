import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Series, About Page.</h2>
            <h1>User Component: functional component</h1>
            <User email={"aishjoshi2002@gmail.com"}/>
            <h1>UserClass Component: class component</h1>
            <UserClass email={"aishjoshi2002@gmail.com"}/>
        </div>
    )
}

export default About;