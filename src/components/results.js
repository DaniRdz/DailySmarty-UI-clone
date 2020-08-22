import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './logo';
import SearchBar from './search-bar';

import * as actions from '../actions';

class Results extends Component {
    handleSearchBarFormSubmit(query) {
        console.log('serch for', query)
        this.props.fetchPostsWithQuery(query)
    }
    render() {
        return (
            <div>
                <Logo size={55} />
                <SearchBar onSubmit={(query) => this.handleSearchBarFormSubmit(query)} />
            </div>
        );
    }
}
export default connect(null, actions)(Results)