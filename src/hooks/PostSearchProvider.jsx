import React, { createContext, useReducer } from 'react';
import { getPost } from '../API';

// Create Context
export const PostContext = createContext();

// Create Reducer
const type_action = {
  GET_ALL: 'GET_ALL',
  FOUND_POST: 'FIND_POST',
};

function PostReducer(state, action) {
  const { payload, type } = action;

  switch (type) {
    case type_action.GET_ALL:
      return {
        ...state,
        posts: payload,
      };
    case type_action.FOUND_POST:
      return {
        ...state,
        found_post: payload,
      };
    default:
      throw new Error('Occured a wrong');
  }
}

// Create Provider Component

export default function PostSearchProvider({ children }) {
  const initialState = {
    posts: [],
    found_post: null,
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const getByTitle = (text) => {
    let countText = text.length;
    const found_post = state.posts.filter(
      (post) =>
        post.title.toLowerCase().substr(0, countText) == text.toLowerCase()
    );

    dispatch({
      type: type_action.FOUND_POST,
      payload: found_post,
    });
  };

  const getAll = async () => {
    dispatch({
      type: type_action.GET_ALL,
      payload: await getPost(),
    });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        found_post: state.found_post,
        getByTitle,
        getAll,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
