import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Style= styled.h1`
    color: ${props => props.color || "black"};
    background: ${props => props.bg || "none"};
    padding: 10px;
`;

const Word = () => {
    const {str, color, bg}= useParams();

    return (
        <div>
        {isNaN(str) ? 
            <Style color={color} bg={bg}>The word is: {str}</Style>: 
            <h1>{str} is not a word</h1>}
        </div>
    )
}

export default Word;