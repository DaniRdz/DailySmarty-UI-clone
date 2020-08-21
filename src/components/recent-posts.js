import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function () {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3) {
                return (
                    <li key={post.id}>{post.title}</li>
                );
            }
        })
        return posts
    }
    render() {
        return (
            <div className='recent-posts'>
                <div className='recent-posts-wrapper'>
                    <div className='recent-posts-heading'>Recent Post</div>
                    <ul className='posts'>
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapSatateToProps(state) {
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapSatateToProps, actions)(RecentPosts)