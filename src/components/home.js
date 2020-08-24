import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './logo';
import SearchBar from './search-bar';
import RecentPosts from './recent-posts';

import * as actions from '../actions';

class Home extends Component {

    handleSearchBarFormSubmit(query) {
        this.props.fetchPostsWithQuery(query, () => {
            this.props.history.push('/results');
        });
    }

    render() {
        return (
            <div className='home-wrapper'>
                <Logo />
                <SearchBar onSubmit={(query) => { this.handleSearchBarFormSubmit(query) }} />
                <RecentPosts />
            </div>
        );
    }
}

export default connect(null, actions)(Home)