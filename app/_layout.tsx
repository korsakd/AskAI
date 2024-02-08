import { useEffect } from 'react';
import { Slot, router } from 'expo-router';
import { getAPIKey } from 'src/services/apiKey';

const InitialLayout = () => {
  useEffect(() => {
    const doWork = async () => {
      // AsyncStorage.removeItem(API_KEY_STORAGE_KEY);
      const key = await getAPIKey();

      if (key) {
        router.replace('/chat');
      } else {
        router.replace('/api_key');
      }
    };
    doWork();
  });

  return <Slot />;
};

const RootLayout = () => {
  return <InitialLayout />;
};

export default RootLayout;
