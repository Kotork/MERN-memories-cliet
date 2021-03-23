import axios from 'axios'

const API = axios.create({
  baseUrl: 'http://localhost:5000/'
})

// Happens on every request and before the request
API.interceptors.request.use( (req) => {
  if (localStorage.getItem('profile')) { // Add token to the header
    req.headers.Authorization = `Bearer ${ JSON.parse(localStorage.getItem('profile')).token }`
  }

  console.log('aqui')
  console.log(req.headers)
  return req
})


export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${ id }`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${ id }`)
export const likePost = (id) => API.patch(`/posts/${ id }/likePost`)

export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)