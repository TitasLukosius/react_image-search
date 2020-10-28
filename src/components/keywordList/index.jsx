import React from 'react';
import { connect } from 'react-redux';
import { removeKeyword } from '../../store/keywords/actionCreators';
import Keyword from '../../components/keyword';

const KeywordList = ({keywords, removeKeyword, onSearchSubmit}) => {

    const searchSubmit = (word) => {
        onSearchSubmit(word);
    }

    const allKeywords = keywords.map((keyword) => {
        return <Keyword onSearch={searchSubmit} key={keyword.id} text={keyword.text} onDelete={() => removeKeyword(keyword.id)}/>
    });

    return (
        <div className='keywordContainer'>
            <ul className='keywordsList'>
                {allKeywords}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        keywords: state
    })
}

const mapDispatchToProps = dispatch => {
    return {
        removeKeyword: id => dispatch(removeKeyword(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordList);
