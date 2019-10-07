import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from './../../queries';

function Index({ bookid }) {
    const { data } = useQuery(getBookQuery, {
        variables: {id: bookid }
    })
   
    if (data) {
        return (
            <div id="book-details">
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>All books by this author</p>
                <ul className="other-books">
                    {
                        data.book.author.books.map(item => (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <div id="book-details">
                <p>No book selected</p>
            </div>
        )
    }

}

export default Index;