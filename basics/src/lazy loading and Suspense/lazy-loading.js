import React, { lazy, Suspense } from 'react';
// import Books from './books';

const Books = lazy(() => import ('./books'))

function LazyLoading() {
    return (
        <div>
            <h2>Book details:</h2>
            <div style={{align: "center"}}>
            <Suspense fallback={<p>Loading...</p>}>
                <Books/>
            </Suspense>
            </div>
        </div>
    )
}

export default LazyLoading;