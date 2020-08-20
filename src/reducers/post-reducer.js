import { SET_RECENT_POST } from '../actions/types';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function (state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POST:
            const recentPosts = action.payload
            return [...state, recentPosts]
    
        default:
            return state;
    }
}