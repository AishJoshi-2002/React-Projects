import React, { lazy } from 'react';
import Books from './books';

// const Books = lazy ()

function LazyLoading() {
    return (
        <div>
            <Books/>
        </div>
    )
}

export default LazyLoading;