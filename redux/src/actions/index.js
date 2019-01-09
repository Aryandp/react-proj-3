import uuidv4 from 'uuid/v4';
// import { ADD_POST, DELETE_POST } from './types';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';


export const createPost = ({ title, body }) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    title,
    body
  }
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});
//Counter
