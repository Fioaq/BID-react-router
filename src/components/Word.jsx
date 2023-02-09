import React from 'react';
import { useParams } from 'react-router-dom';

const Word = () => {
    const {str}= useParams();

    return (
        <>
        {isNaN(str) ? 
            <h1>The word is: {str}</h1>: 
            <h1>The number is: {str}</h1>}
        </>
    )
}

export default Word;