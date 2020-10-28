import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addKeyword } from '../../store/keywords/actionCreators';

const SearchBar = ({keywords, dispatch, onSearchSubmit}) => {
    let input;

    const [state, setState] = useState('');
    const [exists, setExists] = useState('');

    const saveKeyword = (e) => {
        e.preventDefault();
        const found = keywords.some(kw => kw.text === input.value);
        
        if(!found) {
            if(!input.value.trim()) return;
            dispatch(addKeyword(input.value));
            setExists('');
        } else {
            setExists('keyword already exists!');
        }
    }

    const onChange = (e) => {
        setState(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(state === '') {
            alert('You must enter keyword for search');
        } else {
            onSearchSubmit(state);
        }
    }

    return (
        <div className='searchContainer'>
            <form onSubmit={onSubmit} className='form'>
                <input className='searchInput' onChange={onChange} type='text' placeholder='Search image' ref={node => input = node}></input>
                <div className='buttonContainer'>
                    <button className='buttonSearch'>Search</button>
                    <button className='buttonSave' onClick={saveKeyword}>Save</button>
                </div>
            </form>
            <p className='existErr'>{exists}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        keywords: state
    })
}

export default connect(mapStateToProps)(SearchBar);
