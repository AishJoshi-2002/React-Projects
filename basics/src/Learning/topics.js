import React from "react";

const topics = ["Introduction to react", "JS Refresher", "Understanding JSX", "Setup + Adding Bootstrap to React", "Lazy loading and Suspense"]

function Topics() {
    return (
        <div style={{ border: "3px solid blue", borderRadius: "7px", width: "400px", marginLeft: "550px", marginTop: "300px", padding: "20px", textAlign: "center" }}>
            <h2>Topics</h2>
            {topics.map(topic => <h6>{topic}</h6>)}
        </div>
    )
}

export default Topics;