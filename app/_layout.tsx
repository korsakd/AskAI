import { Slot, Tabs } from 'expo-router';
import { StatusBar, View } from 'react-native';

export default function HomeLayout() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={{ flex: 1, backgroundColor: '#141414' }}>
        <Slot />
      </View>
    </>
  );
}
