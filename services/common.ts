import axios from "axios";

export const api = {
  get: async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  },

  post: async (url: string, data: any) => {
    return await axios.post(url, { data });
  },
};
