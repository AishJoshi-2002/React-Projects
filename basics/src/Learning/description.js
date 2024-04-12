import React from "react";

function Description() {
    return (
        <>
            <h3>Lazy loading and Suspense</h3>
            <div>
                To load react components lazily through code spliting without any help of external libraries.
                Suspense: Component required by lazy function to wrap lazy component.
                fallback: accepts a React element
            </div>
        </>
    )
}

export default Description;