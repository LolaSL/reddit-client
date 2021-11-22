
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    posts: [],
    comments: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
};

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        fetchComments(state, action) {
            state.comments = action.payload;
        },


    }
})
export const {
    setSearchTerm, fetchComments, setPosts
} = redditSlice.actions;
export default redditSlice.reducer;
