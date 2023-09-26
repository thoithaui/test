import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Thay đổi địa chỉ API của bạn

const apiService = {
  // Phương thức GET
  get: async (endpoint, params = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Phương thức POST
  post: async (endpoint, data = {}) => {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Phương thức PUT
  put: async (endpoint, data = {}) => {
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Phương thức DELETE
  delete: async (endpoint) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
