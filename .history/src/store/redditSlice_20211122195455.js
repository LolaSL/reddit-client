
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
        fetchPosts(state, action) {
            state.selectedSubreddit = action.payload;
        },
        selectFilteredPosts(state, action) {
            state.posts = action.payload;
        }
    }
})
export const {
    setSearchTerm, fetchComments, setPosts, fetchPosts, selectFilteredPosts
} = redditSlice.actions;
export default redditSlice.reducer;
