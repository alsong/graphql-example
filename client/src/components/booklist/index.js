import React,{useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from './../../queries';
import BookDetails from './../bookdetails'


function Index() {
    const [selected, setSelected] = useState(null);
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <div>Loading books...</div>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <ul id="book-list">
                {
                    data.books.map(book => (
                        <li key={book.id} onClick={(e) => setSelected(book.id)}>
                            {book.name}
                        </li>
                    ))
                }
            </ul>
            <BookDetails bookid={selected}/>
        </div>
    );
}

export default Index;
