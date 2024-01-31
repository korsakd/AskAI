import axios from 'axios';
import { CHAT_BASE_URL } from 'src/config';
import { getAPIKey } from '../apiKey';

export const chatClient = axios.create({
    baseURL: CHAT_BASE_URL,
  });
  
  chatClient.interceptors.request.use(
    async (config: any) => {
      const apiKey = await getAPIKey();
      
      return {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      };
    },
    (error) => Promise.reject(error),
  );