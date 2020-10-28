import React from 'react';

const Keyword = ({key, text, onDelete, onSearch }) => {

    return (
        <div className='keyword'>
            <li className='keywordElement' key={key}>
                <span className='keywordText' onClick={() => onSearch(text)}>{text}</span>
                <span className='keywordDelete' onClick={() => onDelete(key)}>X</span>
            </li>
        </div>
    )
}

export default Keyword;
