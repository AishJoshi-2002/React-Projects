//  creating an element is a core thing of react, so used first CDN link
// heading will be an object, a react element
const heading = React.createElement("h1", { id:"heading" }, "Hello World from React"); // (  tag-type, object(for providing attribues such as id, class etc), content inside tag)
// props are the children(content) and attributes(id, class, etc)

// creating a root and rendering some content inside it is a job of React DOM
const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(heading);
// responsible for creating the h1 tag and adding the content to it


{/* <div id="parent">
    <div id="child">
        <h1>I am tag h1</h1>
        <h2>I am tag h2</h2> // for siblings 3rd paraeter can be an array
    </div>
</div> */}

const parentEle = React.createElement("div", { id:"parent" }, React.createElement("div", { id:"child" }, [React.createElement("h1", {}, "I am tag h1"), React.createElement("h2", {}, "I am tag h2")]));
const root1 = ReactDOM.createRoot(document.getElementById("react1"));
root1.render(parentEle);

// if in any tag, already some elements are present then .render() will replace the elements


// React is a library
// library can be applied to a small portion