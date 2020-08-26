import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './logo';
import SearchBar from './search-bar';
import ResultsPosts from './results-posts';

import * as actions from '../actions';

class Results extends Component {
    handleSearchBarFormSubmit(query) {
        this.props.fetchPostsWithQuery(query)
    }
    render() {
        return (
            <div className='content-wrapper'>
                <div className='results'>
                    <Logo size={55} />
                    <SearchBar page='results' onSubmit={(query) => this.handleSearchBarFormSubmit(query)} />
                    <ResultsPosts />
                </div>
            </div>
        );
    }
}
export default connect(null, actions)(Results)