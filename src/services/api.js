import axios from 'axios';

// CRUDCRUD.com base url
const BASE_URL = 'https://crudcrud.com/api/f4d36589b8414bbb8f13297c2fd41880';


const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for crud operations
export const booksAPI = {
  // Get all books
  getBooks: async () => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch books');
    }
  },

  // Add new book
  addBook: async (bookData) => {
    try {
      const response = await api.post('/', bookData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to add book');
    }
  },

  // Update existing book
  updateBook: async (id, bookData) => {
    try {
      const response = await api.put(`/${id}`, bookData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update book');
    }
  },

  // Delete book
  deleteBook: async (id) => {
    try {
      const response = await api.delete(`/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete book');
    }
  },
};
