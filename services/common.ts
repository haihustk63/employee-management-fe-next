import axios from "axios";

export const api = {
  get: async (url: string, params?: any) => {
    const response = await axios.get(url, { params });
    return response.data;
  },

  post: async (url: string, data: any) => {
    return await axios.post(url, { data });
  },
};
