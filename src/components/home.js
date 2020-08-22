import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './search-bar';
import RecentPosts from './recent-posts';

export default class Home extends Component {

    handleSearchBarFormSubmit(query) {
        console.log('trying to handlesubmit for query', query);

        this.props.history.push('/results');
    }

    render() {
        return (
            <div className='home-wrapper'>
                <Logo />
                <SearchBar onSubmit={(query) => {this.handleSearchBarFormSubmit(query)}}/>
                <RecentPosts />
            </div>
        );
    }
}