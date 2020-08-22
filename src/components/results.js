import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './search-bar';

export default class Results extends Component {
    handleSearchBarFormSubmit(query) {
        console.log(query);
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