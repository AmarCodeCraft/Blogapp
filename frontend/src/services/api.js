import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;


// For posts API
const postsApi = axios.create({
  baseURL: `${baseURL}/posts`,
});

export const getAllPosts = () => postsApi.get('/');
export const getPostById = (id) => postsApi.get(`/${id}`);
export const createPost = (post) => {
  const token = localStorage.getItem('token');
  return postsApi.post('/', post, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-auth-token': token,
    },
  });
};
export const updatePost = (id, post) => {
  const token = localStorage.getItem('token');
  return postsApi.put(`/${id}`, post, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-auth-token': token,
    },
  });
};
export const deletePost = (id) => {
  const token = localStorage.getItem('token');
  return postsApi.delete(`/${id}`, {
    headers: {
      'x-auth-token': token,
    },
  });
};
