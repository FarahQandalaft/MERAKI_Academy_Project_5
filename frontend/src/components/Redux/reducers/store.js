import { configureStore } from "@reduxjs/toolkit";

//reducers
import postsReducer from "./posts";
import authReducer from "./auth";
import likeReducer from "./like";
import commentsReducer from "./comments";
import usersReducer from './users'

export default configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    like: likeReducer,
    comments: commentsReducer,
    users:usersReducer,
  },
});
