import React from 'react';

const books = [
    {id: 1, title: "One Indian Girl", author: "Chetan Bhagat"},
    {id: 2, title: "Two Indian Girls", author: "Chetan Bhagat"},
    {id: 3, title: "Three Indian Girls", author: "Chetan Bhagat"},
    {id: 4, title: "Four Indian Girls", author: "Chetan Bhagat"}
]

const Books = () => {
    return(
        <div >
            {books.map(book => <div style={{display: "inline-block", border: "2px solid green", margin: "10px", padding:"10px", borderRadius: "5px", width: "300px"}}>
                <h3>{book.title}</h3>
                <h6>{book.author}</h6>
            </div>)}
        </div>
    )
}

export default Books;