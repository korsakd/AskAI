import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_KEY_STORAGE_KEY } from 'src/config/storageKeys'

export const saveAPIKey = async (key: string) => {
    await AsyncStorage.setItem(API_KEY_STORAGE_KEY, key)
}

export const getAPIKey = async () => {
  return await AsyncStorage.getItem(API_KEY_STORAGE_KEY)
}