import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount(){
        this.props.fetchRecentPosts();
    }
    render() {
        return (
            <div className='recent-posts'>
                <div className='recent-posts-wrapper'>
                    <div className='recent-posts-heading'>Recent Post</div>
                    <ul className='posts'>
                        <li>recent post0</li>
                        <li>recent post1</li>
                        <li>recent post2</li>
                    </ul>
                </div> 
            </div>
        );
    }
}

export default connect(null, actions)(RecentPosts)